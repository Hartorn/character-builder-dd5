const baseConfig = require('webpack-focus/config/default');
const envParser = require('webpack-focus/webpack-utilities/env-parser');

const myConfig = baseConfig(process.env, {});
myConfig.addAlias('focus-core', './node_modules/focus-core');
myConfig.addAlias('focus-components', './node_modules/focus-components');
myConfig.addAlias('react', './node_modules/react');
myConfig.addAlias('react-dom', './node_modules/react-dom');
myConfig.addAlias('moment', './node_modules/moment');
myConfig.addAlias('numeral', './node_modules/numeral');
myConfig.addAlias('material-design-lite', './node_modules/material-design-lite');


// Do your own modification

// Add externals, alias, defined variable, plugin, loader, change filename, change HTML template,  ...
// See https://github.com/KleeGroup/webpack-focus/blob/webpack2/src/webpack-utilities/config-builder.js
// Or see base config https://github.com/KleeGroup/webpack-focus/blob/webpack2/src/config/base.js

/*
myConfig.addExternal('__API_ROOT__', '__API_ROOT__');
// Add alias with relative path
myConfig.addAlias('focus-core', '../focus-core');
// Or not
myConfig.addAlias('truc', 'C:/bla/truc', false);

myConfig.addDefinedVariable('__DEV__', parsedEnv.DEV ? 'true' : 'false');

// Add plugin or loader directly, or using a function, so the resolution is done when calling toWebpackConfig
// For example, the DefinePlugin is given as a function, so variable can be added easily
myConfig.addPlugin(10, () => new webpack.DefinePlugin(myConfig.getDefinedVariables()));

myConfig.addComplexLoader(20, {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
            presets: ['babel-preset-focus']
        }
});
*/
const buildConfig = myConfig.toWebpackConfig(envParser(process.env));
buildConfig.module.rules[buildConfig.module.rules.length -1].options.limit = 10000;
module.exports = buildConfig;