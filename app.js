﻿var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var questions = require('./routes/questions');
var admin = require('./routes/admin');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/questions', questions);
app.use('/admin', admin);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

//var mysql = require('mysql');
//var connection = mysql.createConnection({
//    host     : 'localhost',
//    user     : 'admin',
//    password : 'supersecret'
//});

//console.log("Connecting...");
//connection.connect(function (err, results) {
//    if (err) {
//        console.log("ERROR: " + err.message);
//        throw err;
//    }
//    console.log("Connected.");
//    clientConnected();
//});

//// Creates development database
//clientConnected = function () {
//    connection.query('CREATE DATABASE database_development', function (err, results) {
//        if (err) {
//            if (err.errno == '1007') {
//                console.log("Database already exists.");
//            }
//            else {
//                console.log("ERROR: " + err.message);
//                throw err;
//            }
//        }
//        dbCreated();
//    });
//}

//dbCreated = function () {
//    connection.query('USE database_development', function (err, results) {
//        if (err) {
//            console.log("ERROR: " + err.message);
//            throw err;
//        }
        
//        console.log("Connected to database_development")
//    });
//}