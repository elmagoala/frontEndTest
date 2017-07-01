var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

//-- Get npm lifecycle event to identify the environment
var ENV = process.env.npm_lifecycle_event;
var isProd = ENV === 'build';

var plugins = [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/public/index.html',
        inject: 'body'
    }),
    new ExtractTextPlugin({
        filename: isProd ? 'css/[name].[contenthash].css' : 'css/[name].css',
        allChunks: true
    }),
];

if (isProd) {
    plugins.push(
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: {
                safe: true,
                discardComments: {
                    removeAll: true
                }
            }
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new CopyWebpackPlugin([{
            from: __dirname + '/src/public'
        }])
    );
}

module.exports = {
    entry: {
        app: './src/app/index.js'
    },
    output: { //<script src="/js/app.bundle.js">
        path: path.join(__dirname, 'dist'),
        filename: isProd ? 'js/[name].[hash].js' : 'js/[name].bundle.js',
        publicPath: '/'
    },
    devtool: isProd ? 'source-map' : 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            }
        ]
    },
    plugins: plugins,
    devServer: {
        contentBase: './src/public'
    }
};