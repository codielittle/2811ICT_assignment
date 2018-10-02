module.exports = function(app,db) {
  app.post('/api/getmessages', (req, res) => {
    const assert = require('assert');

    //Route to get all the chat data from the specified channel
    var channel = req.body.channel.toString();

    const collection = db.collection('messages');



    collection.find({channel: channel }).toArray(function(err, response) {
      if (err) throw err;

      res.send({'data': response});

    });

  });
}
