const chalk = require('chalk');
const detect = require('detect-port');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const paths = require('../config/paths');
const webpackConfig = require('../config/webpack.config.dev');

function clearConsole() {
  process.stdout.write(
    process.platform === 'win32' ? '\x1Bc' : '\x1B[2J\x1B[3J\x1B[H'
  );
}

function setupCompiler(port) {
  const compiler = Webpack(webpackConfig);
  compiler.plugin('done', stats => {
    clearConsole();

    if(stats.compilation.errors.length > 0) {
      console.log(stats.compilation.errors);
      return;
    }
    
    console.log(chalk.cyan('Server running on port:'), chalk.green(port));
  });

  compiler.plugin('invalid', () => {
    clearConsole();
    console.log('Compiling...');
  });

  return compiler;
}

const DEFAULT_PORT = process.env.PORT || 3000;

/**
 * 
 * @param {String} host 
 * @param {Number} port 
 * @param {String} protocol 
 */
function runDevServer(host, port, protocol = 'http') {
  const compiler = setupCompiler(port);
  const devServer = new WebpackDevServer(compiler, {
    /**
     * It will still show compile warnings and errors with this setting.
     * @see {@link https://webpack.js.org/configuration/dev-server/#devserver-clientloglevel}
     */
    clientLogLevel: 'none',
    contentBase: paths.appPublic,
    // Enable hot reload
    hot: true,
    // Open the browser
    open: true,
    quiet: true,
    publicPath: webpackConfig.output.publicPath,
    watchContentBase: true,
    watchOptions: {
      ignored: /node_modules/,
    },
  });

  devServer.listen(port, (err, res) => {
    if (err) {
      return console.log(err);
    }

    console.log(chalk.cyan('Starting the development server...'));
  });
}

detect(DEFAULT_PORT).then(port => {
  if (DEFAULT_PORT !== port) {
    console.log(
      `Something is already running on port ${DEFAULT_PORT}.
      The server will run on port ${port} instead.`
    );
  }

  const host = process.env.HOST || 'localhost';
  runDevServer(host, port);
});
