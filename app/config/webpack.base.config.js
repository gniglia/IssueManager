var path = require('path')
var webpack = require('webpack')
var basePath = path.join(__dirname, '..');

module.exports = (options) => ({
	entry: options.entry,
	output: options.output,
	plugins: options.plugins.concat([
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
				loaders: options.cssLoaders
			},
			{ test: /\.svg$/, loader: 'raw-loader' },
			{ test: /\.(?:png|jpg|jpeg|gif)$/, loader: 'file-loader' }
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
