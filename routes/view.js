var express = require('express');
var router = express.Router();
// var mysql = require('mysql');
/*
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
*/
// function createConn() {
//     var connection = mysql.createConnection({
//         user: 'training',
//         password: 'training',
//         host: '10.164.37.53',
//         port: 3306,
//         database: 'training'
//     });
//     return connection;
// }

/*
function Project(id, name) {
	this.id = id;
	this.name = name;
}
*/

router.get('/view', function(req, res, next) {
  res.send("Hello GET View");
});



module.exports = router;
