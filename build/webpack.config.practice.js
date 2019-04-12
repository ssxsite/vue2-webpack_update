const path = require('path');
const merge = require('webpack-merge');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const baseConfig = require('./webpack.config.base.js');

const devServer = {
  port: '8001',
  host: '0.0.0.0',
  overlay: {  // webpack编译出现错误，则显示到网页上
    errors: true,
  },
  // open: true,

  // 不刷新热加载数据
  hot: true
};
const defaultPlugin = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  }),
  new HTMLPlugin({
    template:path.join(__dirname,'../index.html')
  })
];

let config

config = merge(baseConfig,{
  entry:path.join(__dirname,'../practice/index.js'),
  devtool:'#cheap-module-eval-source-map',
  module:{
    rules:[
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'sass-loader'
        ]
      }
    ]

  },
  devServer,
  // resolve:{
  //   extensions: ['.js','.vue','.json'],
  //   alias:{
  //     'vue$':path.join(__dirname,'../node_modules/vue/dist/vue.esm.js')
  //   }
  // },
  plugins:defaultPlugin.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ])
});
module.exports = config;
