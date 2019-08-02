const mode = process.env.NODE_ENV;
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    mode: mode,
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: false,
        port: 8080,
        hot: true,
    },
    module: {
        rules: [
            { test: /\.(ts|tsx)$/, exclude: /node-modules/, loader: 'babel-loader' },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                enforce: 'pre',
                test: /.js$/,
                exclude: /node-modules/,
                loader: 'source-map-loader',
            },
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './index.html',
            filename: './index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};
