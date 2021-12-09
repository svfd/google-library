const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
	const { mode } = argv;

	const isDev = mode === 'development';
	const isProd = mode === 'production';

	const getPlugins = () => {
		const plugins = [
			new HtmlWebpackPlugin({
				template: 'public/index.html',
				publicPath: '/'
			})
		];

		if (isProd) {
			plugins.push(
				new MiniCssExtractPlugin({filename: 'main-[hash:8].css'}),
				new CleanWebpackPlugin()
			);
		}

		return plugins;
	};

	const getStyleLoaders = () => {

		const loaderType = {
			development: 'style-loader',
			production: MiniCssExtractPlugin.loader
		};

		const loaders = [];
		loaders.push(loaderType[mode], 'css-loader');

		return loaders;
	};

	return {
		entry: path.resolve(__dirname, 'src/index.js'),
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'bundle.js'
		},
		mode,
		plugins: getPlugins(),
		module: {
			rules: [
				// JS loader
				{
					exclude: /node_modules/,
					test: /\.jsx?$/,
					loader: 'babel-loader'
				},
				// TS loader
				{
					test: /\.tsx?$/,
					loader: 'ts-loader',
				},
				// File loader
				{
					test: /\.(svg|jpe?g|png)$/i,
					loader: 'file-loader',
					options: {
						name: '[name].[sha512:hash5].[ext]',
						outputPath: 'images'
					}
				},
				// Css loader
				{
					test: /\.css$/,
					use: getStyleLoaders()
				},
				// Less loader
				{
					test: /\.less$/,
					use: [...getStyleLoaders(), 'less-loader']
				}
			]
		},
		optimization: {
			minimizer: [
				'...',
				new CssMinimizerPlugin(),
			],
		},
		// Devtools
		target: isDev ? 'web' : 'browserslist',
		devtool: isDev ? 'inline-source-map' : false,
		// Alias
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
			alias: {
				'mocks': path.resolve(__dirname, '/__mocks__'),
				'assets': path.resolve(__dirname, '/assets'),
				'src': path.resolve(__dirname, '/src'),
				'components': path.resolve(__dirname, '/src/components'),
				'containers': path.resolve(__dirname, '/src/containers'),
				'store': path.resolve(__dirname, '/src/store')
			}
		},
		devServer: {
			historyApiFallback: true,
		}
	}
};