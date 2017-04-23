const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: ['./src/index.tsx'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js'
	},

	externals: [nodeExternals()],
	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				exclude: ['/node_modules/', '/src/test'],
				loader: ['babel-loader', 'awesome-typescript-loader'],
				//query: {presets: ['es2015']}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	}
};