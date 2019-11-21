const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    publicPath: './'
  }
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
});
