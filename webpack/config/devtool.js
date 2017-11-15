// Environment
const isDevelopment = process.env.NODE_ENV !== 'production';

export default () => isDevelopment
  ? 'eval-source-map'
  : 'eval';
