const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const PATHS = {
   // Path to main app dir
   src: path.join(__dirname, './src'),
   // Path to Output dir
   dist: path.join(__dirname, './dist'),
 }

module.exports = {
   externals: {
      paths: PATHS
   },

   entry: {
      app: [PATHS.src + '/main.js']
   },

   output: {
      filename: `js/[name].[hash].js`,
      path: PATHS.dist,
      publicPath: ''
   },

   optimization: {
      splitChunks: {
         cacheGroups: {
            vendor: {
               name: 'vendors',
               test: /node_modules/,
               chunks: 'all',
               enforce: true
            }
         }
      }
   },

   resolve: {
      alias: {
         '@': 'src',
         'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: ['*', '.js', '.vue', '.json']
    },

   module: {
      rules: [

         {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules'
         },
         {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
               loader: {
                 scss: 'vue-style-loader!css-loader!sass-loader'
               }
             }
         },
         {
            test: /\.scss$/,
            use: [
               MiniCssExtractPlugin.loader,
               {
                  loader: 'css-loader',
                  options: { sourceMap: true }
               },
               'postcss-loader',
               {
                  loader: 'sass-loader',
                  options: { sourceMap: true }
               },
            ],
         },
         {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
               name: '[name].[ext]',
            },
         },
         {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader',
            options: {
               name: '[name].[ext]',
            },
         }
      ]
   },

   plugins: [
      new VueLoaderPlugin(),

      new MiniCssExtractPlugin({
         filename: `css/[name].[hash].css`
      }),

      new CopyWebpackPlugin([
         {from: PATHS.src + '/assets/img', to: 'img'},
         {from: PATHS.src + '/assets/fonts', to: 'fonts'},
         {from: PATHS.src + '/static', to: ''},
      ]),

      new HtmlWebpackPlugin({
         hash: false,
         template: PATHS.src + '/index.html',
         filename: 'index.html'
      })
   ]
}
