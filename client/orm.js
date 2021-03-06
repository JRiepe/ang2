var mysql = require('mysql');
var ormdb = require('../db/ormdb.js');
var connection = mysql.createConnection(process.env.JAWSDB_URL);

// var connection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: process.argv[2],
// 	database: 'ang2'
// });

function connectToDB(){
	connection.connect(function(err){
		if (err) {
			console.error('error connection:', err.stack);
			return
		}
		console.log('connected to MySQL DB')
	});
}

module.exports.connectToDB = connectToDB;

function addUserToDB(userObj, callback){
	connection.query('INSERT INTO users SET ?', userObj, function(err, results){
		if (err) return callback(false, err)
		callback(true. null)
	});
}

module.exports.addUserToDB = addUserToDB;

function findUser(username, callback){
	connection.query('SELECT * FROM users WHERE ?', {username: username}, function(err, user){
		callback(err, user)
	})
}
module.exports.findUser = findUser;