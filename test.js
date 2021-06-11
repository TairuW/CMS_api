var MongoClient = require('mongodb').MongoClient;
var dburl       =   "mongodb://localhost:27017/test";
MongoClient.connect(dburl, function(err, db) {
  if (err) {
    throw err;
  }
  console.log('db connected');
  db.close();
});