const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const open = require('opn');
const config = require('./webpack/webpack.dev-connected');
const templates = require('./templates');

templates(config[0].output.path, '/dist/dev/'); // instead of fsExtra copying

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  inline: true,
  contentBase: config[0].output.path,
  publicPath: config[0].output.publicPath,
  stats: {
    colors: true,
  },
});

// this middleware serves data and assets from the src root, and
// routes all other requests to index.html so you can directly browse to routes within your app
server.use('/', (req, res, next) => {
  if (req.url.indexOf('/assets/') === 0) {
    res.sendFile(path.join(process.cwd(), req.url));
  } else {
    res.sendFile(path.join(process.cwd(), `${config[0].output.publicPath}index.html`));
  }
});

const options = {
  host: 'localhost',
  port: 3001,
  scheme: 'http',
  uri() { return `${this.scheme}://${this.host}:${this.port}`; },
};

server.listen(options.port, options.host, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Starting webpack dev server at ${options.uri()}`);
  open(options.uri()).catch(err1 => console.error(err1));
});
