var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var fs = require('fs');
var path = require('path')

var chunkfilePath = path.join(__dirname +'/../static/build/js/manifest.json')
var chunkOutput = JSON.parse(fs.readFileSync(chunkfilePath,'utf8'));


var csrfProtect = csrf();
router.use(csrfProtect)
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index',{
		title: 'Look Around',
		csrfToken: req.csrfToken(),
		chunkOutput: chunkOutput['main.js']});
});

module.exports = router;
