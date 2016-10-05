const BASE_URL = 'http://scroll.in/feed/scroll/page/';
var currentPage = 1;

const ENDPOINTS = {
	pages : function (params){
		currentPage ++;
		return BASE_URL+currentPage;
	}
}

module.exports = ENDPOINTS;
