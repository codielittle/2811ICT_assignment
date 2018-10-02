module.exports =
{

  query: function(db, result) {
    const collection = db.collection('credentials');
    collection.findOne({username: "Codie"}, function(err, res) {
      if (err) throw err;
        console.log(JSON.stringify(res));
    })
  }
}
