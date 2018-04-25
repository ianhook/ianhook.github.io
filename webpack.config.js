const path = require('path');

const config = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { test: /\.jsx?$/, use: 'babel-loader' },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};

module.exports = config;
