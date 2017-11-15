// Dependencies
import webpackMerge from 'webpack-merge';

// Webpack Configuration
import commonConfig from 'webpack.config.common';
import { context, entry, externals, name, output, plugins, target } from './config';

// Type of Configuration
const type = 'clinet';

export default webpackMerge(commonConfig, {
  context: context(type),
  entry: entry(type),
  externals: externals(type),
  name: name(type),
  output: output(type),
  plugins: plugins(type),
  target: target(type)
});
