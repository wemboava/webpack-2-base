ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = [
    { 
        test: /\.scss$/,
        exclude: '/node_modules/',
        use: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: 'babel-loader'
    }
]

// { 
//     test: /\.scss$/, 
//     use: ExtractTextPlugin.extract({
//         fallback: 'style-loader',
//         use: ['style-loader', 'css-loader', 'sass-loader'],
//         publicPath: '/dist'
//     }) 
// }