// Dependencies
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import {
  isDesktop,
  isBot,
  isCurl,
  isMobile,
  isPlayStation
} from "../shared/utils/device";
import morgan from 'morgan';
import open from 'open';
import path from 'path';
import serveFavicon from 'serve-favicon';
import remotedev from 'remotedev-server';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
// Router
import routes from './routes';

// API
import api from './api';

// Webpack Configuration
import webpackConfig from '../../webpack.config';

// Client Render
import clientRender from './clientRender';

// Environment
const isDevelopment = process.env.NODE_ENV !== 'production';
// Deployment
const isDeployment = process.env.DEPLOYMENT === 'true';
// Analyzer
const isAnalyzer = process.env.ANALIZER === 'true';

// Express app
const app = express();
// Webpack Compiler
const compiler = webpack(webpackConfig);
// Server Port
const port = isDeployment ? 80 : process.env.NODE_PORT || 3000;

// Causes problems with REACT-REDUX. only use for files that do not use REACT-REDUX.
// GZip Compression just for Production
// if (!isDevelopment) {
//   app.get(/vendor\.bundle\.js$/, (req, res, next) => {
//     req.url = `${req.url}.gz`;
//     res.set('Content-Encoding', 'gzip');
//     next();
//   });
// }

// Remote Redux Dev Tools

remotedev({
  hostname: 'localhost',
  port: 8000
});

app
  // Favicon Middlewares
  .use(serveFavicon(path.join(__dirname, '../../public/images/logo/logo.ico')))
  // Headers & Bodies Parsers Middlewares
  .use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
  .use(bodyParser.json()) // parse application/json
  // Morgan Middlewares
  .use(morgan('dev'))
  // Cookies Middlewares
  .use(cookieParser())
  // Public Static
  .use(express.static(path.join(__dirname, '../../public')))

  .use('/', (req, res, next) => {
    // Bots Detection
    req.isBot = isBot(req.headers["user-agent"]);
    // Curl Detection
    req.isCurl = isCurl(req.headers["user-agent"]);
    // Device Detection
    req.isMobile = isMobile(req.headers["user-agent"]);
    // Desktop Detection
    req.isDesktop = isDesktop(req.headers["user-agent"]);
    // Desktop Detection
    req.isPlayStation = isPlayStation(req.headers["user-agent"]);
    return next(); // Next Middleware
  });

// Only Middlewares for Development Mode
if (isDevelopment) {
  app
    // Hot Module Replacement
    .use(webpackDevMiddleware(compiler))
    .use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')));
}

// Client Side Rendering
app.use(clientRender()); // If a robot makes the request, the clientRender () function will return the next () method.

// Only Middlewares for Production Mode
if (!isDevelopment) {
  try { // Server Side Rendering
    const serverRender = require('../../dist/server.js').default;
    app.use(serverRender());
  } catch (err) {
    throw err;
  }
}

// For Server Side Rendering on Developmnent Mode
app.use(webpackHotServerMiddleware(compiler));


// Listening
app.listen(port, err => {
  if (!err && !isAnalyzer) {
    // open(`http://localhost:${port}`);
    setTimeout(() => {
      console.log(`


    =========================================================================================================================
    |·─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─·─··─·|
    |·─ Aplicación corriendo en: ==>  http://localhost:${port}  <== Abrir enlace con (Ctrl + Clic) en Windows, Linux, MAC ─·|
    |·─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─··─·─··─·|
    =========================================================================================================================


`);
    }, 12000);
  }
});
