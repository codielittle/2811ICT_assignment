module.exports = function(app,db) {
  app.get('/api/delete', (req, res) => {
    const assert = require('assert');
    var uname = req.query.username;
    var group = req.query.group;
    var channel = req.query.channel;
    const collection = db.collection("credentials");

    //Route to remove a user from a specific channel
    collection.findOne({username: uname,groupname: group}, function(err, res) {
      var updatedChannels = new Array();
      if (err) throw err;
      var channels = res['channels'];
      for(let j=0;j<channels.length;j++){
          console.log(channels[j] + " === " + channel);
          if(channels[j] === channel){

            channels.splice(j, 1);
                //console.log(userObj);
            //var newData = JSON.stringify(userData);
            console.log(channels);

          }

      }
      updatedChannels = {$set:{channels:channels}}
      console.log(updatedChannels);
      collection.updateOne({username: uname, groupname: group}, updatedChannels, function(err, response){
        if (err) throw err;
        //response.send({'success': true});
      })


    })



});


}



// fs.readFile('authData.json', 'utf8', function(err,data){
//   var userData = JSON.parse(data);
//
//   for(let j=0;j<userData.length;j++){
//
//     if(userData[j].name === user){
//       for(let k=0;k<userData[j].groups.length;k++){
//         if(userData[j].groups[k] === group){
//           userData[j].groups.splice(k, 1);
//           //console.log(userObj);
//           var newData = JSON.stringify(userData);
//         }
//       }
//
//     }
//
//   }
//   fs.writeFile('authData.json', newData, 'utf-8', function(err) {
//     if(err) throw err;
//     res.send({'success': true});
//   });
