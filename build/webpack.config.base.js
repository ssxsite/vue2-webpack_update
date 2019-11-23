const path = require('path');
const vueLoader = require('./vue-loader.config')
const isDev = process.env.NODE_ENV === 'development'

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

function vui(dir){
  return resolve('../web_vui_oa/' + dir);
}

function resource(dir){
  return vui('src/' + dir);
}

const config = {
    target: 'web',
    entry: path.join(__dirname, '../client/index.js'),   // 输入：项目主文件（入口文件）
    output: {       // 输出
        filename: 'build.[hash:8].js',  // 输出的文件名
        path: path.join(__dirname, '../dist')  // 输出路径,__dirname就是当前目录
    },
  resolve: {
    extensions: ['.js','.vue','.json'],
    alias: {
      'vue$':'vue/dist/vue.esm.js',
      '@': '../client',
      'base':'../client/base',
      'components' : resource('components')
    }
  },
  module: {       // 配置加载资源
        rules: [    // 规则
          // {
          //   test: /\.(vue|js|jsx)$/,
          //   loader: 'eslint-loader',
          //   exclude: /node_modules/,
          //   enforce: "pre"
          // },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoader(isDev)
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude:/node_modules/
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg|eot|woff|woff2|ttf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,  // 文件小于1024字节，转换成base64编码，写入文件里面
                            name: 'resources/[path][name]-[hash:8].[ext]'
                        }
                    },
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      mozjpeg: {
                        progressive: true,
                        quality: 65
                      },
                      // optipng.enabled: false will disable optipng
                      optipng: {
                        enabled: false
                      },
                      pngquant: {
                        quality: '65-90',
                        speed: 4
                      },
                      gifsicle: {
                        interlaced: false
                      },
                      // the webp option will enable WEBP
                      webp: {
                        quality: 75
                      }
                    }
                  }
                ]
            }
        ]
    }

};

module.exports = config
