'use strict';

var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin-extra-files');

module.exports = {
    entry: "./src/js/app.module.js",
    output: {
        path: '../bookapp-web/src/main/resources/static',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
                test: /\.css$/, 
                loaders: [
                    'style',
                    'css' 
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    'ng-annotate-loader',
                    'babel?presets[]=es2015'
                ]
            },
            {
                test: /\.(woff2|woff|ttf|eot|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loaders: [
                    'url-loader'
                ]
            }, {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'url-loader?limit=10000'
                ]
            },
            {
                test: /\.tpl\.html$/,
                loaders: [
                    'html-loader?attrs[]=img:src&attrs[]=img:data-src'
                ]
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.tpl.html',
            inject: 'body',
            extraFiles: 'books.png'
        })
    ],
    devtool: 'cheap-source-map',
    devServer: {
        contentBase: '../bookapp-web/src/main/resources/static',
        info: true,
        hot: false,
        inline: true,
        port: 8081,
        proxy: {
            "*": "http://localhost:8080"
        }
    }
};