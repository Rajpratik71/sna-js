const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const distDir = path.resolve(__dirname, 'dist');
const publicDir = path.resolve(__dirname, 'public');
const srcDir = path.resolve(__dirname, 'src');

module.exports = {
  devServer: {
    contentBase: publicDir,
    publicPath: '/tool_files/',
  },
  entry: {
    'd3js-linkedin': `${srcDir}/d3js-linkedin.js`,
    'socilab-linkedin': `${srcDir}/socilab-linkedin.js`,
    'sna-js': `${srcDir}/sna-js.js`,
  },
  mode: process.env.NODE_ENV || 'development',
  output: {
    filename: '[name].js',
    path: `${distDir}/tool_files/`
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      { 
        context: 'public/',
        from: `${publicDir}/**/*`, 
        to: distDir,
        force: true,
      },
    ]),
  ],
};
