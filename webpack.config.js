const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devServer: {
        compress: true,
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'app', 'index.html'),
            filename: 'index.html',
            inject: 'body'
        })
    ]
};