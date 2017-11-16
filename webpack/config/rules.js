// Dependencies
import ExtractTextPlugin from 'extract-text-webpack-plugin';

// Environment
const isDevelopment = process.env.NODE_ENV !== 'production';

export default type => {
  const rules = [
    {
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    },
    {// JSON
      test: /\.json$/,
      use: 'json-loader'
    },
    {//-- GZIP
      test: /\.gzip?$/,
      enforce: 'pre',
      use: [
        {//-- GZIP-LOADER
          loader: 'gzip-loader'
        }
      ]
    },
    {//-- (PNG || JPG)
      test: /\.(png|jpg|gif)?$/,
      use: [
        {//-- FILE-LOADER
          loader: 'file-loader',
          options: {//-- Configuracion del LOADER
            name: '[name].[ext]',//-- Nombre del Archivo Generado
            context: 'this.options.context',//-- Contexto de Archivo Personalizado
            //publicPath: path.resolve(__dirname, '/'),//--Ruta pública personalizada
            //outputPath: path.resolve(__dirname, '/'),//-- Ruta de salida personalizada
            useRelativePath: false,//-- Generar una URL relativa al contexto para cada archivo
            emitFile: true//-- Emitir un archivo para paquetes del lado del servidor
          }
        }
      ]
    },
    {//-- SVG
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {//-- URL-LOADER
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'image/svg+xml',
            fallback: 'responsive-loader'
          }
        }
      ]
    }
  ];

  if (!isDevelopment || type === 'server') {
    rules.push({
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              import: true,
              localIdentName: '[name]__[local]',
              minimize: true,
              modules: true,
              root: '.',
              sourceMap: true,
              url: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      })
    });
  } else {
    rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader',
          options: {
            sourceMap: false
          }
        },
        {
          loader: 'css-loader',
          options: {
            import: true,
            localIdentName: '[name]__[local]',
            minimize: false,
            modules: true,
            root: '.',
            sourceMap: false,
            url: true
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: false
          }
        }
      ]
    });
  }

  return rules;
};

