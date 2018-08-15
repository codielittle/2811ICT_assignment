let express = require('express')
let app = express();
const path = require('path');
const fs = require('fs');
let http = require('http');
let server = http.Server(app);
const bodyParser = require('body-parser');
app.use (bodyParser.json());
app.use (bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname , '../dist/chat')));
let socketIO = require('socket.io');
let io = socketIO(server);

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
    console.log('user connected');
});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});


io.on('connection', (socket) => {
    socket.on('test', (message) => {
        console.log(message);
        });
});


app.get('/api/auth', (req,res) => {
  //var uname = req.query.username;
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
          res.send({'username':uname,'success':true});
          return;
        }
      }
      res.send({'username':uname,'success':false});
    }});
})
