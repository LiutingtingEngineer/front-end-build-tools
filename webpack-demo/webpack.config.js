const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = { 
    entry: './src/main.js',
    output: {
        filename: "static/js/main.js", // 将 js 文件输出到 static/js 目录中
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    devtool: 'source-map',
    // watch: true,
    // watchOptions: {
    //     ignored: /node_modules/
    // },
    module: {
        rules: []
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./index.html"),
            filename: "index.html",
        })
    ],
    devServer: {
        // port: "3500", // 启动服务器端口号
        open: true, // 是否自动打开浏览器
      },
    mode: 'development',
 }