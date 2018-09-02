
const fs = require('fs');


const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');


app.use (bodyParser.json());
app.use (bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname , '../dist/chat')));

require('./sockets.js')(app, io);
const port = process.env.PORT || 3000;

// io.on('connection', (socket) => {
//     console.log('user connected');
// });

http.listen(port, () => {
    console.log(`started on port: ${port}`);
});


// io.on('connection', (socket) => {
//     socket.on('test', (message) => {
//         console.log(message);
//         });
// });
//
// io.on('disconnect', function(){
//     console.log('user disconnected');
// });
//
// io.on('add-message', (message)=>{
//     io.emit('message', {type:'message', text: message});
// });
app.get('/api/groups', (req,res) => {
  var uname = req.query.username;
  var groups;
  fs.readFile('authData.json', 'utf8', function(err,data){
    var someData = JSON.parse(data);
    for(let i=0;i<someData.length;i++){
      if(someData[i].name == uname){
        groups = someData[i].groups;
      }
    }


    res.send({'groups': groups});

  });
})

app.get('/api/getgroups', (req,res) => {
  var groups = [];
  fs.readFile('chatData.json', 'utf8', function(err,data){
    var someData = JSON.parse(data);
    for(let i=0;i<someData.length;i++){
      groups.push(someData[i].name);
    }


    // var groups = .....;
    res.send({'groups': groups});

  });
})

app.get('/api/reg', (req, res) => {
  var isUser = 0;
  var userObj;
  var uname = req.query.username;
  var email = req.query.email;
  var newAuth = req.query.auth;

  fs.readFile('authData.json', 'utf-8', function(err, data){
    if (err){
      console.log(err);
    }else {
    userObj = JSON.parse(data);
    for (let i=0;i<userObj.length;i++){
      if (userObj[i].name == uname){
        isUser = 1;
      }
    }
    console.log("AUTH LEVEL: " + newAuth);
    if (isUser == 1){
      res.send({'username':'', success:false});
    } else {
      userObj.push({'name': uname, 'email': email, 'groups': [], 'auth': newAuth});
      var newData = JSON.stringify(userObj);
      fs.writeFile('authData.json', newData, 'utf-8', function(err) {
        if (err) throw err;
        res.send({'username': uname, 'success': true});
      });
      }
    }
  });
})
app.get('/api/delete', (req, res) => {
  var isUser = 0;
  var userObj;
  var uname = req.query.username;


  fs.readFile('authData.json', 'utf-8', function(err, data){
    if (err){
      console.log(err);
    }else {
    userObj = JSON.parse(data);
    for (let i=0;i<userObj.length;i++){
      if (userObj[i].name == uname){
        isUser = 1;

        console.log(userObj);
        userObj.splice(i, 1);
        console.log(userObj);
        var newData = JSON.stringify(userObj);

        fs.writeFile('authData.json', newData, 'utf-8', function(err) {
            if (err) throw err;
            res.send({'username': uname, 'success': true});
          });

      }
    }
    if (isUser == 0){
      res.send({'username':'', success:false});
    }
    // if (isUser == 1){
    //   res.send({'username':'', success:false});
    // } else {
    //   userObj.push({'name': uname, 'email': email, 'groups': [], 'auth': newAuth});
    //   var newData = JSON.stringify(userObj);
    //   fs.writeFile('authData.json', newData, 'utf-8', function(err) {
    //     if (err) throw err;
    //     res.send({'username': uname, 'success': true});
    //   });
    //   }
    }
  });
})

app.get('/api/auth', (req,res) => {
  var uname = req.query.username;

  var userObj;

  fs.readFile('authData.json', 'utf8', function(err,data){
    if(err) {
      console.log(err);
      res.send({'username':'','success':false});
    } else {

      userObj = JSON.parse(data);
      for (let i=0;i<userObj.length;i++){
        if (userObj[i].name == uname){
          res.send({'username':uname,'success':true, 'groups': userObj[i].groups, 'auth': userObj[i].auth});
          return;
        }
      }
      res.send({'username':uname,'success':false});
    }});
})

// TODO: There are a few bugs as the data is not being properly processed. The process needs to be broken down and simplified.
//       Use the whiteboard. When a new group is entered it updates, but the issues start when a 2nd group is added. It replaces
//       the first group which was added, rather than pushing the new group to both the user data and the master data.
// Also -- When the new group (first new) is added, and then a new channel is added inside that new group, the group disappears.





app.get('/api/update', (req, res) => {
  var userObj;
  var index = 0;
  var user = req.query.username;
  var newGroup = req.query.groupname;


  // Now we know the username and the new group. Now we have to find which index the user is in the json data.
  fs.readFile('authData.json', 'utf8', function(err,data){
    userObj = JSON.parse(data);
    
    for(let j=0;j<userObj.length;j++){

      if(userObj[j].name === user){

        index = j;
      }
      else {
        console.log(" J: " + j);
      }
    }
    console.log("This is the index: " + index);
    userObj[index].groups.push(newGroup);
    var newData = JSON.stringify(userObj);

    fs.writeFile('authData.json', newData, 'utf-8', function(err) {
      if(err) throw err;
      res.send({'success': true});
    });

    });
  fs.readFile('chatData.json', 'utf8', function(err,data){
    var newDataObject = JSON.parse(data);
    //var newDataObject;
    //console.log("ChatData " + temp[0].name);
    newDataObject.push({
      "name": newGroup,
      "children": []
    });
    console.log(JSON.stringify(newDataObject));
    newDataObject = JSON.stringify(newDataObject);
    fs.writeFile('chatData.json', newDataObject, 'utf-8', function(err) {
      if(err) throw err;
      res.send({'success': true});
    });

  });




    //userObj.push({''})

  // fs.writeFile('authData.json', )
})
// app.get('/api/update2', (req,res) => {
//   // var user = req.query.username;
//   // var newGroup = req.query.groupname;
//   console.log("works");
//   // fs.readFile('chatData.json', 'utf-8', function(err,data) {
//   //   var newDataObj = JSON.parse(data);
//   //   console.log(" ----> " + newDataObj[0].name);
//   //   // newDataObj.push({
//   //   //   "name": newGroup,
//   //   //   "children": []
//   //   // });
//   //   console.log(" ----> " + newDataObj);
//   //
//   //   // fs.writeFile('chatData.json', newDataObj, 'utf-8', function(err) {
//   //   //   if(err) throw err;
//   //   //   res.send({'success': true});
//   //   // });
//   // })
//
// })





app.get('/api/getdata', (req, res) => {
  var dataObj;
  var someOtherdataObj;
  var object = [];
  // Now we know the username and the new group. Now we have to find which index the user is in the json data.
  fs.readFile('chatData.json', 'utf8', function(err,data){
    var someData = JSON.parse(data);

    res.send({'data': someData});

  });

})
app.get('/api/adduser', (req,res) => {
  var user = req.query.username;
  var group = req.query.group;

  fs.readFile('authData.json', 'utf8', function(err,data){
    var userData = JSON.parse(data);

    for(let j=0;j<userData.length;j++){

      if(userData[j].name === user){
        userData[j].groups.push(group);
        var newData = JSON.stringify(userData);
      }

    }
    fs.writeFile('authData.json', newData, 'utf-8', function(err) {
      if(err) throw err;
      res.send({'success': true});
    });


  });

})
app.get('/api/removeuser', (req,res) => {
  var user = req.query.username;
  var group = req.query.group;

  fs.readFile('authData.json', 'utf8', function(err,data){
    var userData = JSON.parse(data);

    for(let j=0;j<userData.length;j++){

      if(userData[j].name === user){
        for(let k=0;k<userData[j].groups.length;k++){
          if(userData[j].groups[k] === group){
            userData[j].groups.splice(k, 1);
            //console.log(userObj);
            var newData = JSON.stringify(userData);
          }
        }

      }

    }
    fs.writeFile('authData.json', newData, 'utf-8', function(err) {
      if(err) throw err;
      res.send({'success': true});
    });


  });

})
app.get('/api/newchannel', (req, res) => {
  var user = req.query.username;
  var channel = req.query.channelname;
  var group = req.query.groupname;
  var temp;
  fs.readFile('chatData.json', 'utf8', function(err,data){
    var dataObj = JSON.parse(data);
    for(let j=0;j<dataObj.length;j++){
      if(dataObj[j].name === group){
        dataObj[j].children.push({'name': channel});

        var temp = JSON.stringify(dataObj);

      }
    }
    fs.writeFile('chatData.json', temp, 'utf-8', function(err) {
      if(err) throw err;
      res.send({'success': true});
    });

  });


})
