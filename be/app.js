var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const history = require('connect-history-api-fallback')
const cors = require('cors')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

if (process.env.NODE_ENV !== 'production') app.use(cors())
app.use('/api', require('./routes/api'))

app.use(express.static(path.join(__dirname, '../', 'fe', 'dist')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({ msg : err.message});
});

module.exports = app;

const mongoose = require('mongoose')
const User = require('./models/users')

mongoose.connect('mongodb://localhost:27017/nemv', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('mongoose connected')

  // User.deleteMany()
  //  .then( r => console.log(r))
  //   .catch(e => console.error(e))

});

module.exports = app;

var jwt = require('jsonwebtoken');
const key = "베리베리어려운키"
var token = jwt.sign({ id: 'jakinpilla', email: 'jakinpilla@xxx.com' }, key);
console.log(token)

var decoded = jwt.verify(token, key) //, (err, r) => {
//   if (err) return console.log(err)
// });
console.log(decoded)
console.log(new Date(decoded.iat * 10000))

















