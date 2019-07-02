var createError = require('http-errors');
var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  console.log(req.headers)
  res.send({ msg : 'hello', a : '괜찮아' })
});

router.get('/hello', function(req, res, next) {
  res.send({ msg : 'hello', a : 2222 })
});

router.all('*', function(req, res, next) {
  next(createError(404, '그런 API 없어요'));
});

module.exports = router;
