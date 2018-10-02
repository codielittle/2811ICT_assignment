module.exports = function(app,db) {
  app.post('/api/getmessages', (req, res) => {
    const assert = require('assert');


    var channel = req.body.channel.toString();

    const collection = db.collection('messages');



    collection.find({channel: channel }).toArray(function(err, response) {
      if (err) throw err;
      
      res.send({'data': response});

    });

    // TODO: THEN RETURN MESSAGE ARRAY? <== BUT AFTER PERFORMING A "FIND" searching the collection for the particular channel and then toArray.
  });
}
