module.exports = function(app,db) {
  app.post('/api/message', (req, res) => {
    const assert = require('assert');

    var username = req.body.username.toString();
    var group = req.body.group.toString();
    var channel = req.body.channel.toString();
    var message = req.body.message.toString();
    const collection = db.collection('messages');

    collection.insertOne({'username':username, 'group': group, 'channel': channel, 'message': message});

    collection.find({channel: channel }).toArray(function(err, response) {
      if (err) throw err;

      //result(res);
      res.send({'data': response});

    });

    // TODO: THEN RETURN MESSAGE ARRAY? <== BUT AFTER PERFORMING A "FIND" searching the collection for the particular channel and then toArray.
  });
}
