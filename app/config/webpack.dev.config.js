var path = require('path')
var webpack = require('webpack')
var basePath = path.join(__dirname, '..');

module.exports = require('./webpack.base.config')({
	devtool: 'inline-source-map',
	entry: [
		'webpack-hot-middleware/client?reload=true',
		path.join(basePath, 'src', 'js', 'index.js')
	],
	output: {
		path: path.join(basePath, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	cssLoaders: [
		'style-loader',
		'css-loader',
		'sass-loader'
	],
	plugins: [
		new webpack.HotModuleReplacementPlugin()
  ],
	resolve: {
    modulesDirectories: ['src', 'node_modules']
  }
});
