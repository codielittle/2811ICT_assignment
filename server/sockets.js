module.exports = function(app, io){
    var roomName;
    console.log("Server socket initialised");

    io.on('connection', (socket)=>{
        console.log('user connected');
        socket.on('room', function(room, user) {
          console.log(room + " ---- " + user);
          socket.join(room);
          roomName = room;
          //io.in(roomName).emit('newuser', {type:'user', text: user});
          io.in(roomName).emit('newuser', {user: user});


        });
        socket.on('disconnect', function(){
        console.log('user disconnected');
        });
        socket.on('add-message', (message)=>{
          io.in(roomName).emit('message', {type:'message', text: message});
          //io.emit('message', {type:'message', text: message});
        });

    });



}
