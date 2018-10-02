module.exports = function(app,db) {
  app.get('/api/get', (req, res) => {
    const assert = require('assert');


    var uname = req.query.username;
    //var uname = "Super";
    const collection = db.collection('credentials');



    //// TODO: WIll have to change it to find as we will have more than one group per user
  //   collection.findOne({ groupname: { $exists: true}, username: uname })
  //     .then(response => {
  //
  //
  //       console.log("Something" + JSON.stringify(response));
  //       res.send({'data': response});
  //     })
  //     //.then(response => result(response))
  //     .catch(err => console.error(err));
  //
  //
  //
  //
  // });
  let temp;
  collection.find({ groupname: { $exists: true}, username: uname }).toArray(function(err, response) {
    if (err) throw err;
    console.log(response);

    //result(res);
    res.send({'data': response});

  });




});


}
