module.exports = function(app,db) {
  app.post('/api/register', (req, res) => {
    const assert = require('assert');
    //Route to create a new user
    var uname = req.body.username.toString();
    var pwd = req.body.password.toString();
    var auth = req.body.auth;
    auth = Number(auth);
    const collection = db.collection('credentials');

    collection.insertOne({'username':uname, 'password':"Test", 'auth': auth});

  });
}
