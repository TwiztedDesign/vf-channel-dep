import {join} from 'path';
const MinifyPlugin = require("babel-minify-webpack-plugin");
const webpack = require('webpack');

const include = join(__dirname, 'src');

module.exports =  {
    entry               : {
        "vfchannel"           : "./src/index.js",
        "vfchannel.min"       : "./src/index.js",
    },
    output              : {
        filename        : "[name].js",
        path            : join(__dirname, 'dist'),
        libraryTarget   : 'umd',
        library         : 'vfChannel'
    },
    devtool             : false,
    module              : {
        rules         : [
            {
                test : /\.js$/,
                use : [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'eslint-loader'
                    }],
                include
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, {
                        loader: "sass-loader" // compiles Sass to CSS
                   }],
                include
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS
                    }],
                include
            },
            {
                test : /\.json$/,
                use : 'json-loader',
                include
            }
        ]
    },
    plugins : [
        new MinifyPlugin({}, {
            include: /vfchannel\.min\.js$/,
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].js.map',
        })
    ]
};
