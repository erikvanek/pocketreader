const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: ['./src/test/firstTest.ts'],
	target: 'node',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'tests.js'
	},

	externals: [nodeExternals()],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {presets: ['es2015']}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	}
};