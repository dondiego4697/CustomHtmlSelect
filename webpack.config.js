/**
 * Created by Denis on 06.03.2017.
 */
let debug = process.env.NODE_ENV !== 'production';
console.log(debug);
console.log(process.env.NODE_ENV);
let webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: debug ? 'inline-sourcemap' : '',
    entry: __dirname + '/main.js',
    output: {
        path: __dirname + '/dist/js',
        filename: debug ? 'customSelect.js' : 'customSelect.min.js',
        libraryTarget: 'var',
        library: 'CustomSelect'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: debug ? [] : [
/*        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),*/
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            minimize: debug,
            compress: {
                sequences: true,
                booleans: true,
                loops: true,
                unused: true,
                warnings: true,
                drop_console: false,
                unsafe: true
            }
        }),
    ]
};