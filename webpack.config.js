'use strict'

module.exports = {
	entry: './client/main.js',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	context: __dirname,
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	}
};