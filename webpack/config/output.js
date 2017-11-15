// Dependencies
import path from 'path';

export default type => {
  if (type === 'server') {
    return {
      filename: 'server.js',
      path: path.resolve(__dirname, '../../dist'),
      libraryTarget: 'commontjs2'
    };

    return {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, '../../public'),
      publicPath: '/app/'
    };
  }
}
