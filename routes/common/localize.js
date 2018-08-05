var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/languages', function (req, res, next) {

  res.json([{
    id: 'eng',
    language: "English"
  }, {
    id: 'jap',
    language: "Japanese"
  }, {
    id: 'tha',
    language: "Thai"
  }, {
    id: 'ger',
    language: "German"
  }, {
    id: 'fra',
    language: "French"
  }]);
});

router.get('/timezone', function (req, res, next) {

  res.json([{
    id: 1,
    timezone: "(UTC+00:00) UTC",
    value: 0
  }, {
    id: 2,
    timezone: "(UTC+07:00) Bangkok, Hanoi, Jakarta",
    value: 7
  }, {
    id: 3,
    timezone: "(UTC+08:00) Kuala Lumpur, Singapore",
    value: 8
  }, {
    id: 4,
    timezone: "(UTC+09:00) Osaka, Sapporo, Tokyo",
    value: 9
  }, {
    id: 5,
    timezone: "(UTC-06:00) Central America",
    value: -6
  }]);
});

router.get('/currency', function (req, res, next) {

  res.json([{
    id: 'usd',
    currency: "U.S. dollars ($)"
  }, {
    id: 'eur',
    currency: "Euro"
  }, {
    id: 'thb',
    currency: "Thai Baht"
  }, {
    id: 'jpy',
    currency: "Japanese Yen"
  }, {
    id: 'gbp',
    currency: "U.K. Pound"
  }]);
});

module.exports = router;
