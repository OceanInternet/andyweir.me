const babelOptions = {
    presets: ['babel-preset-gatsby'],
    plugins:['@babel/plugin-proposal-export-default-from']
};

module.exports = require('babel-jest').createTransformer(babelOptions);
