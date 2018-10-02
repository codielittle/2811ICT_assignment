module.exports = function(app,db) {
  var auth = 0;

  app.post('/api/auth', (req, res) => {
    const helpers = require('.includes/helpers.js');

    const assert = require('assert');
    var uname = req.body.username.toString();
    var pwd = req.body.password.toString();

    var authResult = null;
    var success = false;
    authResult = helpers.auth(uname, pwd);
    if (authResult.errors.length == 0){
      success = true;
    } else {
      success = false;
    }
    const collection = db.collection('credentials');
    console.log(uname + " == " + pwd);
    collection.findOne({username: uname}, function(err, res) {
      if (err) throw err;
        auth = res.auth;

    })

    collection.find({'username':uname, 'password': pwd}).count(function (err, count){
      console.log("count + " + count);
      assert.equal(null, err);
      if (count > 0){
        res.send({'username':uname, 'success': true, 'auth': auth});
      }
      else {
        res.send({'username':uname, 'success': false});
      }
    });
  });
}
