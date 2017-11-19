const chalk = require('chalk');
const detect = require('detect-port');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const paths = require('../config/paths');
const webpackConfig = require('../config/webpack.config.dev');

const compiler = Webpack(webpackConfig);

function clearConsole() {
  return process.stdout.write('\033c');
}

compiler.plugin('done', (stats) => {
  clearConsole();
  console.log('Server running');

})

const DEFAULT_PORT = process.env.PORT || 3000;


/**
 * 
 * @param {String} host 
 * @param {Number} port 
 * @param {String} protocol 
 */
function runDevServer(host, port, protocol = 'http') {
  const devServer = new WebpackDevServer(compiler, {
    /**
     * It will still show compile warnings and errors with this setting.
     * @see {@link https://webpack.js.org/configuration/dev-server/#devserver-clientloglevel}
     */
    clientLogLevel: 'none',
    contentBase: paths.appPublic,
    // Enable hot reload
    hot: true,
    // Open the bvrowser
    open: true,
    watchOptions: {
      ignored: /node_modules/,
    },
  });

  devServer.listen(port, (err, res) => {
    if(err) {
      return console.log(err);
    }

    console.log(chalk.cyan('Starting the development server...'));
  })
}
  


detect(DEFAULT_PORT).then(port => {
  if (DEFAULT_PORT !== port) {
    console.log(`
      Something is already running on port ${DEFAULT_PORT}.
      \n\nThe server will run on port ${port} instead.
    `);    
  }

  var host = process.env.HOST || 'localhost';
  
  runDevServer(host, port);
});
