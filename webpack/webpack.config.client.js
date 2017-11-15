// Dependencies
import webpackMerge from 'webpack-merge';

// Webpack Configuration
import commonConfig from 'webpack.config.common';
import { context, devtool, entry, name, output, plugins, target } from './config';

// Type of Configuration
const type = 'clinet';

export default webpackMerge(commonConfig, {
  context: context(type),
  devtool: devtool(type),
  entry: entry(type),
  name: name(type),
  output: output(type),
  plugins: plugins(type),
  target: target(type)
});
