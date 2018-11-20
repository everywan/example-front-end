let path = require('path');
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const envConfig = require('../config/base.conf')

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',     // 模式, 可以区分不同环境, 后续使用
    entry: path.resolve(__dirname, '../src/main.js'),                               // 入口文件
    output: {                                                                       // 构建暑促配置
        path: path.resolve(__dirname, '../dist'),                                   // 最终文件生成目录
        filename: './static/js/app.js',                                             // 最终构建的js代码名称
        publicPath: 'http://localhost:8080/dist/'
    },
    devServer: {
        publicPath: '/dist/',
        contentBase: './',
        compress: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    // hotReload: false // 关闭热重载, 默认开启
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            // 源码中所有 process.env.XX 都会被替换为 '../config/dev.env' 这个 module export 出来的配置
            'process.env': envConfig
        })
    ]
};