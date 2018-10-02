module.exports = function(app,db) {
  app.post('/api/newgroup', (req, res) => {
    const assert = require('assert');


    var group = req.body.group.toString();

    const collection = db.collection('groups');
    collection.insertOne({'name':group, 'channels': [] });

    const collectionCredentials = db.collection('credentials');
    collectionCredentials.find({auth:0}).toArray(function(err, res) {
      var superAdminArray = new Array();
      //var users = Object.values(res[0].username);
      res.forEach(function(r) {
        superAdminArray.push(r.username);
        console.log(r);
      });
      //
      console.log(superAdminArray);

      for(let i=0;i<superAdminArray.length;i++){
        collectionCredentials.insertOne({'username':superAdminArray[i], 'groupname': group, 'channels': [] });
      }

    })

  });
}
