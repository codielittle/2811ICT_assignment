module.exports = function(app,db) {
  var auth = 0;
  //Route to check if the username and password is correct
  app.post('/api/auth', (req, res) => {


    const assert = require('assert');
    var uname = req.body.username.toString();
    var pwd = req.body.password.toString();


    const collection = db.collection('credentials');
    console.log(uname + " == " + pwd);
    collection.findOne({username: uname}, function(err, res) {
      if (err) throw err;
      if(res){
        auth = res.auth;
      }


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
