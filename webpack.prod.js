const { mergeWithRules } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { commonConfiguration, mergeRulesOptions } = require('./webpack.common');

module.exports = mergeWithRules(mergeRulesOptions)(commonConfiguration, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss/,
        use: [
          MiniCssExtractPlugin.loader
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
});
