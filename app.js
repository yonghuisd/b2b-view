
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var swig = require('swig');
var methodOverride = require('method-override');
var request = require('sync-request');//sync

var pages = require('./routes/pages');
var log = require('./logs/logHelper');
var app = express();
app.set('views', path.join(__dirname, 'src'));
var swig = new swig.Swig({//开发和线上区别对待
  allowErrors: false,   
  autoescape: true,
  cache: false,       
  encoding: 'utf8'
});

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
log.use(app);  
app.use(methodOverride('_method'));
app.use(logger('dev')); //开发和线上区别对待
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false,limit:"10000kb"}));
app.use(cookieParser());
app.use(session({
  resave:false,
  saveUninitialized:true,
  secret: 'keyboard cat'
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
    next();
});
app.use('/', pages);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('s-pages/error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('pages/error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
// > node-inspector
// > supervisor --debug-brk debugme.js
// > supervisor --debug --force-watch ./bin/www
////http://127.0.0.1:8080/?port=5858