module.exports = function(app,db) {
  app.post('/api/message', (req, res) => {
    const assert = require('assert');
    //Route to send a new message. Message is added to the credentials collection
    var username = req.body.username.toString();
    var group = req.body.group.toString();
    var channel = req.body.channel.toString();
    var message = req.body.message.toString();
    const collection = db.collection('messages');

    collection.insertOne({'username':username, 'group': group, 'channel': channel, 'message': message});

    collection.find({channel: channel }).toArray(function(err, response) {
      if (err) throw err;

      res.send({'data': response});

    });

  });
}
