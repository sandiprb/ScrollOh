var express = require('express');
var router = express.Router();
var csrf = require('csurf');

var csrfProtect = csrf();
/* GET home page. */
router.get('/', function(req, res, next) {
	res.send({CSRF: req.csrfToken()});
});

module.exports = router;
