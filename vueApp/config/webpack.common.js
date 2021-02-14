const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
    },
    resolve: {
        extensions: ['.js', '.vue'],
    },
    module: {
        rules: [
        {
            test: /\.vue$/,
            use: 'vue-loader',
        },
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime'],
            },
            },
        },
        ],
  },
  plugins: [new VueLoaderPlugin()],
};