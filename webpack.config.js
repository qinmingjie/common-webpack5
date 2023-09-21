const path = require('path');
const commonConfig = require('./config/common');
const prodConfig = require('./config/prod');
const devConfig = require('./config/dev');
const { merge } = require('webpack-merge');

module.exports = (env) => {
  const { development = false, production = false } = env;
  if (development) {
    return merge(commonConfig, devConfig);
  }
  if (production) {
    return merge(commonConfig, prodConfig);
  }
};
