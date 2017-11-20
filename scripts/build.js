process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

process.on('unhandledRejection', err => {
  throw err;
});

const fs = require('fs');
const chalk = require('chalk');
const rimraf = require('rimraf')
const webpack = require('webpack');
const config = require('../config/webpack.config.prod');
const paths = require('../config/paths');

rimraf(paths.appBuild, () => {
  webpack(config, (err, stats) => {
    if(err){
      throw err;
    }
  
    console.log(
      chalk.green('Build assets generated')
    )
  });
});
