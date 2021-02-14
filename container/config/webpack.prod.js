const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('./../package.json');
const Dotenv = require('dotenv-webpack');

const domain = process.env.DOMAIN_PROD;

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
        }),
        new Dotenv({
            path: './../.env',
            safe: false,
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);