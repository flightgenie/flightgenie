const status = process.env.NODE_ENV;
const path = require('path');
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
    mode: status,
    devServer: {
        publicPath: '/build/',
        hot: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    module: {
        rules: [
            { test: /.tsx?$/, exclude: /node-modules/, loader: 'babel-loader' },
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
        ],
    },
};
