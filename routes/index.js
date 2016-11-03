var express = require('express');
var router = express.Router();
var csrf = require('csurf');


var csrfProtect = csrf();
router.use(csrfProtect)
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index',{
		title: 'Scroll Oh!',
		csrfToken: req.csrfToken()
	});
});

module.exports = router;
