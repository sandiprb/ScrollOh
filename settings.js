var fs = require('fs');
var path = require('path');

var chunkfilePath = path.join(__dirname +'/static/build/js/manifest.json') || path.join(process.env.PWD +'/static/build/js/manifest.json')
var chunkOutput = JSON.parse(fs.readFileSync(chunkfilePath,'utf8'));

module.exports = {
	mainjs: chunkOutput['main.js']
}