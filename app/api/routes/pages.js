'use strict';

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

router.post('/', function(req, res, next) {
	let url = ENDPOINTS.pages() + req.body.page;
	console.log("REQ ",url)
	request(url, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			res.json(JSON.parse(body.replace('//', '')));
		}
	})


});

module.exports = router;
