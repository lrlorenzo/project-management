var express = require('express');
var router = express.Router();

var PDFDocument = require('pdfkit');
var blobStream = require('blob-stream');
var fs = require('fs');



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

router.get('/', function(req, res, next) {
  res.send("Hello GET view");
});

router.get('/:id', function(req, res, next) {
	var doc = new PDFDocument();
	doc.pipe(fs.createWriteStream('file.pdf'));
	doc.text('Hello World and World again!!',100,100);
	doc.pipe(res);
	doc.end();
});

router.post('/:id', function(req, res) {
 
  res.send("Hello POST view");
});

module.exports = router;
