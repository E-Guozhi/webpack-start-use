'use strict'
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// CommonJS 模块
module.exports = {
  // "development" | "production" | "none"
  mode: 'none',
  // 入口文件
  entry: './src/index.js',
  // 输出
  output: {
    // 输出路径
    path: path.join(__dirname, 'dist'),
    // 输出文件名
    filename: 'index.js'
  },
  // 插件
  plugins: [
    // 自动编译出html文件,在模版基础上，插入编译生成的 js 
    new HtmlWebpackPlugin({
      // 模版文件
      template: path.join(__dirname, 'src', 'index.html'),
      // 输出文件名称
      filename: 'index.html'
    }),
  ],
  // webpack-dev-server 在保存时自动编译文件，但不会自动刷新浏览器
  devServer: {
    // 端口
    port: 8080,
    // 静态文件路径
    static: path.join(__dirname, 'dist'),
  },
  // 模块，对象
  module: {
    // 规则
    rules: [
      {
        // js文件规则
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
      }
    ]
  }
}