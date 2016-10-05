import request from 'superagent';

const BASE_URL = '/api/pages'

const API = {
	getArticles: function (pageNo, callback){
		request
		.post(BASE_URL)
		.set('Content-Type', 'application/x-www-form-urlencoded')
		.set('X-CSRF-Token' , CSRF)
		.send({'page':pageNo})
		.end(function(err, res){
			if(res.ok){
				callback(res.body)
			}else{
				alert("Error! Pleasecheck console")
				console.log(err);
			}
		});
	},
}

module.exports = API