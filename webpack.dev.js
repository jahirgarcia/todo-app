const { mergeWithRules } = require('webpack-merge');
const { commonConfiguration, mergeRulesOptions } = require('./webpack.common');

module.exports = mergeWithRules(mergeRulesOptions)(commonConfiguration, {
  mode: 'development',
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss/,
        use: [
          'style-loader'
        ]
      }
    ]
  }
});
