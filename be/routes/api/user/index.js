var express = require('express');
var createError = require('http-errors');
var router = express.Router();

const us = [
  {
    name: '김정규',
    age: 40
  },
  {
    anme: '박길선',
    age: 30
  },
  {
    anme: '박세원',
    age: 20
  }
]

router.get('/', function(req, res, next) {
  console.log(req.query)
  console.log(req.body)

  res.send({ users: us })
});

router.post('/', (req, res, next) => {
  console.log(req.query)
  console.log(req.body)
  res.send({sucess: true, msg: 'post ok'})
})

router.put('/', (req, res, next) => {
  console.log(req.query)
  console.log(req.body)
  res.send({sucess: true, msg : 'put ok'})
})

router.delete('/', (req, res, next) => {
  console.log(req.query)
  console.log(req.body)
  res.send({sucess: true, msg: 'delete ok'})
})

router.all('*', function(req, res, next) {
  next(createError(404, '그런 API 없어요'));
});

module.exports = router;
