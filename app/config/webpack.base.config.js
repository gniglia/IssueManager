var path = require('path')
var webpack = require('webpack')
var basePath = path.join(__dirname, '..');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (options) => ({
	entry: options.entry,
	output: options.output,
	plugins: options.plugins.concat([
		new ExtractTextPlugin('style.css', { allChunks: true }),
		new webpack.ResolverPlugin(
			new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
		),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin(),
		// Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
		// inside your code for any environment checks; UglifyJS will automatically
		// drop any unreachable code.
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV)
			}
		})
	]),
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel'],
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style', 'css!sass')
			},
			{
				test: /\.css$/,
				loaders: options.cssLoaders
			},
			{
				test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg|png)(\?.*$|$)/,
				loader: 'file-loader'
			}
		]
	},
	resolve: {
		modulesDirectories: ['bower_components', 'node_modules']
	},
	devtool: options.devtool,
	target: 'web',
	stats: false,
	progress: true
});
