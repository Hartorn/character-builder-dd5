const webpackConfig = require('./webpack.config');
const serverLauncher = require('webpack-focus').serverLauncher;

const customConfig = {
    // proxy: { '*': '*' }
}

serverLauncher(webpackConfig, customConfig);
