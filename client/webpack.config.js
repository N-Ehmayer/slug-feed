var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        './src/index.jsx'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {

        loaders: [{
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }

        ]
        // rules: [
        //   {
        //     test: /\.jsx?$/,
        //     loader: 'babel-loader',
        //     include: path.join(__dirname, 'src')
        //   },
        //   {
        //     test: /\.scss$/,
        //     use: [
        //       'style-loader',
        //       'css-loader',
        //       'sass-loader'
        //     ]
        //   }
        // ]

    }
};