module.exports = function(app,db) {
  var result = 0;
  app.post('/api/newchannel', (req, res) => {
    const assert = require('assert');

    var channel = req.body.channel.toString();
    var group = req.body.group.toString();
    var temp;
    const collection = db.collection('groups');

    collection.find({name:group}).toArray(function(err, res) {

      var channels = Object.values(res[0].channels);
      //Search if a channel with this name already exists for this group.
      for(let i=0;i<channels.length;i++){
        //console.log(channels[i]);
        console.log("DOES " + channels[i] + " Equal " + channel);
        if (channels[i] == channel){
          result = 1;
        }
      }

    })
    if (result == 1){
      console.log("Channel Already Exists");
      res.send({'success': "false"});
    }
    else if(result == 0){
      collection.find({name:group}).toArray(function(err, res) {
        var updatedChannels = new Array();
        var channels = Object.values(res[0].channels);
        for(let i=0;i<channels.length;i++){
          updatedChannels.push(channels[i]);
        }
        updatedChannels.push(channel);
        updatedChannels = {$set:{channels:updatedChannels}}
        collection.updateOne({name: group}, updatedChannels, function(err, response){
          if (err) throw err;
        })
      })

    }

    //Adds all super admins to the group
    const collectionCredentials = db.collection('credentials');
    collectionCredentials.find({auth:0}).toArray(function(err, res) {
      var superAdminArray = new Array();
      //var users = Object.values(res[0].username);
      res.forEach(function(r) {
        superAdminArray.push(r.username);
        console.log(r);
      });
      console.log(superAdminArray);
      // var jsonArray = JSON.stringify(res);
      // console.log("//" + jsonArray[0]['username']);
      // console.log("//" + Object.values(res));

    })
  });
}
