const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: false,
  output: {
    clean: true
  },
  optimization: {
    chunkIds: 'deterministic',
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false, // 配置是否将注释单独提取到一个文件中
        exclude: [/node_modules/]
      })
    ],
    splitChunks: {
      // 什么情况导入的模块进行分包，async异步导入，initial同步导入，all全部
      chunks: 'all',
      // 生成分包的最小大小,默认20000字节，就是说分包每个包最小要20000字节20kb
      minSize: 20000,
      minChunks: 2,
      cacheGroups: {
        // node_modules中的分包
        nodeVendors: {
          test: /[\\/]node_modules[\\/]/,
          filename: '[name]_vendors.js',
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          filename: '[id]_default.js'
        }
      }
    }
  },
  performance: {
    hints: false // 资源超过250kb时是否提示
  }
};
