let path = require('path');

module.exports = {
    mode: 'development',                                // 模式, 可以区分不同环境, 后续使用
    entry: path.resolve(__dirname, '../src/main.js'),   // 入口文件
    output: {                                           // 构建暑促配置
        path: path.resolve(__dirname, '../dist'),       // 最终文件生成目录
        filename: './static/js/app.js'                  // 最终构建的js代码名称
    }
};