var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var plugins = [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new ExtractTextPlugin('stylesheets/style.css', { allChunks: true })
];

if (process.env.NODE_ENV === 'production') {
    plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
    devtool: process.env.NODE_ENV !== 'production' ? 'eval' : null,

    entry: {
        app: './src/client/App.jsx',
    },

    output: {
        path: './public',
        publicPath: '/',
        filename: '[name].js'
    },

    plugins: plugins,

    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css!sass')
        }]
    }
};
