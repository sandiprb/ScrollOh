var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var request = require('request');
var ENDPOINTS = require('../credentials/credentials');

var csrfProtect = csrf();
router.use(csrfProtect)

router.get('/', function(req, res, next){
	res.json({'what you looking for baby?' : ':p'})
});

/* GET venues api. */
router.post('/', function(req, res, next) {
	var options ={
		url: ENDPOINTS.pages(),
		include: true
	};
	request(options.url, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			res.json(JSON.parse(body.replace('//', '')));
		}
	})
});

module.exports = router;

/* set this in header =  X-CSRF-Token', "upKHp6St-nqHrr3Vkv_vy838ZrkpurhL6tR4"*/