const merge = require('webpack-merge')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
   mode: 'development',

   devtool: 'cheap-module-eval-source-map',
   
   plugins: [
      new webpack.SourceMapDevToolPlugin({
         filename: "[file].map"
      }),
   ],

    devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    overlay: {
        warnings: true,
        errors: true
    },
    port: 8081,
  }
})

module.exports = new Promise((resolve) => {
    resolve(devWebpackConfig)
})