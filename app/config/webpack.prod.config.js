const path = require('path')
const webpack = require('webpack')
const basePath = path.join(__dirname, '..');

const env = process.env.NODE_ENV;

const options = {
  devtool: 'source-map',
	entry: [
		path.join(basePath, 'src', 'js', 'index.js')
	],
	output: {
		path: path.join(basePath, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
	},
	cssLoaders: [
		'style-loader',
		'css-loader',
		'sass-loader'
	],
	plugins: [
    // Merge all duplicate modules
		new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
			mangle: {},
			sourceMap: false,
			compress: {
				warnings: false,
				screw_ie8: true
			},
			exclude: ''
		})
  ],
	resolve: {
    modulesDirectories: ['src', 'node_modules']
  }
};

module.exports = require('./webpack.base.config')(options);
