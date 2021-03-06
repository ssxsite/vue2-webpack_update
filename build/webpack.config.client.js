const path = require('path');
const merge = require('webpack-merge');
const ExtractPlugin = require('extract-text-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const baseConfig = require('./webpack.config.base.js');


const isDev = process.env.NODE_ENV === 'development';
const devServer = {
        port: '8888',
        host: '0.0.0.0',
        overlay: {  // webpack编译出现错误，则显示到网页上
            errors: true,
        },
        // open: true,
  historyApiFallback:{//router mode:history的时候一定要配置这个
          index:'/index.html'
  },

        // 不刷新热加载数据
        hot: true
    };
const defaultPlugin = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: isDev ? '"development"' : '"production"'
        }
    }),
    new HTMLPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
];



let config

if (isDev) {
    config = merge(baseConfig,{
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
        plugins:defaultPlugin.concat([
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ])
    });
} else {
    // 生成坏境的配置
    config = merge(baseConfig,{
        entry:{
            app: path.join(__dirname, '../client/index.js'),
            vendor: ['vue']
        },
        output:{
            filename:'[name].[chunkhash:8].js',
        },
        module:{
            rules:[
                {
                    test: /\.css$/,
                    use: ExtractPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            'css-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    })
                },
                {
                    test: /\.scss$/,
                    use: ExtractPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                          'css-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                          'sass-loader',
                        ]
                    })
                },
              {
                test: /\.less$/,
                loader: 'less-loader' // compiles Less to CSS
              }
            ]
        },
        plugins:defaultPlugin.concat([
            new ExtractPlugin('styles.[contentHash:8].css')
        ]),
      optimization:{
        splitChunks: {
          cacheGroups: {                  // 这里开始设置缓存的 chunks
            commons: {
              chunks: 'initial',      // 必须三选一： "initial" | "all" | "async"(默认就是异步)
              minSize: 0,             // 最小尺寸，默认0,
              minChunks: 2,           // 最小 chunk ，默认1
              maxInitialRequests: 5   // 最大初始化请求书，默认1
            },
            vendor: {
              test: /node_modules/,   // 正则规则验证，如果符合就提取 chunk
              chunks: 'initial',      // 必须三选一： "initial" | "all" | "async"(默认就是异步)
              name: 'vendor',         // 要缓存的 分隔出来的 chunk 名称
              priority: 10,           // 缓存组优先级
              enforce: true
            }
          }
        },
        runtimeChunk: true
      }
    });
}
module.exports = config
