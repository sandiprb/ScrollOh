var webpack = require('webpack');
var path = require('path');
var ManifestPlugin = require('webpack-manifest-plugin');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');

var debug = process.env.NODE_ENV !== 'production';

const STATIC_DIR = path.join(__dirname, './app/static');

module.exports = {
	context: __dirname,

	devtool: debug ? 'inline-sourcemap' : null,
	
	entry: STATIC_DIR + '/js/index.jsx',

	output: {
		path: STATIC_DIR + '/build/js/',
		filename: '[name].js',
		chunkFilename: '[name].[chunkhash].js',
		publicPath: '/app/static/'
	},

	module:{
		loaders : [
		{test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
		{test: /\.jsx$/, exclude: /node_modules/, loader: 'babel'}
		]
	},

	plugins: debug ? [new ManifestPlugin(),
	new ChunkManifestPlugin({
		filename: 'chunk-manifest.json',
		manifestVariable: 'webpackManifest'
	})
	] : [new webpack.optimize.OccurenceOrderPlugin(),
	new webpack.optimize.DedupePlugin(),
	new webpack.optimize.OccurenceOrderPlugin(),
	new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
	],
};
