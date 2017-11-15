// Dependencies
import path from 'path';

export default () => [
  'node_modules',
  path.resolve(__dirname, '../../src'),
  path.resolve(__dirname, '../../server')
];
