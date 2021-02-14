const { merge } = require('webpack-merge');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('./../package.json');
const commonConfig = require('./webpack.common');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './../../container/dist/reactapp'),
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'reactapp',
            filename: 'remoteEntry.js',
            exposes: {
                './ReactApp': './src/bootstrap'
            },
            shared: packageJson.dependencies
        })
    ]
};


module.exports = merge(commonConfig, prodConfig);
