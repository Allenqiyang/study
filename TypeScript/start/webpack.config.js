const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')

const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const { resolve } = require('path')

// webpack configuration
module.exports = {
    // 入口文件
    entry: './src/index.ts',
    mode: 'development',

    // 指定打包所在目录
    output: {
        path: path.resolve(__dirname, 'dist'),   // path to output
        filename: 'bundle.js',    // 打包后文件的名称
    },

    // 指定webpack打包用的模块
    module: {
        rules: [
            {
                test: /\.ts$/,    // 指定规则生效的文件
                use: 'ts-loader',
                exclude: /node_modules/    // 排除的文件
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            // title:"custom title",
            template: "./src/index.html"    //以该文件作为模板
        }),
        new CleanWebpackPlugin()
    ],

    // 设置引用模块
    resolve: {
        extensions: ['.ts','.js']   // 以这两个后缀的文件都可以作为模块使用
    }
}