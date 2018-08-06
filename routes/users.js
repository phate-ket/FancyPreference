var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

router.get('/:username', function (req, res, next) {
  // res.send('respond with a resource');
  MongoClient.connect('mongodb+srv://user:P4ssword@cluster0-avio8.gcp.mongodb.net/test?retryWrites=true', {useNewUrlParser: true}, function (err, client) {
    if (err) throw err;
    var db = client.db('fancy');
    db.collection('users').findOne({username: req.params.username}, function (err, result) {
      if (err) throw err;

      console.log(result);
      res.json(result);
    })
  });
});

router.get('/new/:username', function (req, res, next) {
  // res.send('respond with a resource');
  MongoClient.connect('mongodb+srv://user:P4ssword@cluster0-avio8.gcp.mongodb.net/test?retryWrites=true', {useNewUrlParser: true}, function (err, client) {
    if (err) throw err;
    var db = client.db('fancy');
    db.collection('users').findOne({username: req.params.username}, function (err, result) {
      if (err) throw err;

      if (result) res.json({error: 'already taken'});
      else {
        db.collection('users').insertOne({username: req.params.username}, function (err, result) {
          if (err) throw err;

          console.log(result);
          res.json({username: req.params.username, error: null})
        })
      }
    })
  });
});

router.post('/save_preferences', function (req, res, next) {
  // res.send('respond with a resource');
  console.log('req: ' + req.body.username.toString());
  MongoClient.connect('mongodb+srv://user:P4ssword@cluster0-avio8.gcp.mongodb.net/test?retryWrites=true', {useNewUrlParser: true}, function (err, client) {
    if (err) throw err;
    var db = client.db('fancy');
    db.collection('users').updateOne(
      {username: req.body.username},
      {
        $set: { preferences: {
          selectedLanguage: req.body.selectedLanguage,
          selectedTimezone: req.body.selectedTimezone,
          selectedCurrency: req.body.selectedCurrency,
          visibility: req.body.visibility,
          message: req.body.message,
          categoryList: req.body.categoryList
        }},
        $currentDate: {lastModified: true}
      }, function (err, result) {
        if (err) throw err;

        console.log(result);
        res.json(result);
      })
  });
});

module.exports = router;
