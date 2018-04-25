const HtmlWebpackPlugin = require('html-webpack-plugin')
    , ExtractTextPlugin = require("extract-text-webpack-plugin")
    , webpack = require('webpack')
    , path = require('path')
    , loaders = require('./webpack/config/loaders')


module.exports = {
    entry: {
        app: './src/app.js',
        contact: './src/contact.js'
    },
    
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].bundle.js'
    },
    
    module: {
        rules: [
            ...loaders
        ]
    },
    
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        hot: true,
        stats: "errors-only"
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            minify: {
                collapseWhitespace: true
            },
            excludeChunks: ['contact'],
            // Load a custom template (lodash by default see the FAQ for details)
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Contact Page',
            // minify: {
            //     collapseWhitespace: true
            // },
            chunks: ['contact'],
            filename: 'contact.html',
            template: './src/contact.html'
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: true,
            allChunks: true
        }),
        // enable HMR globally
        new webpack.HotModuleReplacementPlugin(),
        // prints more readable module names in the browser console on HMR update
        new webpack.NamedModulesPlugin()
    ]
}