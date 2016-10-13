var express = require('express');
var morgan = require('morgan'); 
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var passport = require('passport');
var session = require('express-session');
// var orm = require('../db/orm.js');
var app = express();


app.set('port', (process.env.PORT || 3000));

//session is used to keep the user logged in 
app.use(session({ 
	secret: 'keyboard cat', 
	saveUninitialized: true
}))

//flash is used to show a message on an incorrect login
app.use(flash());

//passport middleware methods
app.use(passport.initialize());
app.use(passport.session());

app.use('/', express.static(__dirname + '/../dist'));
app.use('/scripts', express.static(__dirname + '/../node_modules'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(morgan('dev'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/../dist/index.html');
});

// orm.connectToDB();

app.listen(app.get('port'), function() {
    console.log('Angular2 fullstack listening on port '+app.get('port'));
});










