// Dependencies
import path from 'path';

export default type => type === 'server'
  ? path.relative(__dirname, '../../src/server')
  : path.relative(__dirname, '../../src/app');
