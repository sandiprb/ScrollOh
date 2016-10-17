var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var csrf = require('csurf');

var ejs = require('ejs')
var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(process.env.PWD, 'templates'));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(process.env.PWD, 'static')));
app.use(session({secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
app.use(csrf())

/*APP Routes*/
app.use('/', routes);

/*API Routes*/
app.disable('x-powered-by');

app.use('/api/csrf', require('./api/routes/csrf'));
app.use('/api/pages', require('./api/routes/pages'));

// catch 404 and forward to error handler || TEMP COMMENT
/*app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});*/

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {}
  });
});


module.exports = app;
