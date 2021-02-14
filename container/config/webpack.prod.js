const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('./../package.json');

const domain = "http://test-microfrontend.ugiispoyowidodo.com";

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                reactapp: `reactapp@${domain}/reactapp/remoteEntry.js`,
            },
            shared: packageJson.dependencies
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);