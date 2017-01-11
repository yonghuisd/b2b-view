var webpack = require('webpack');
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var extractCSS = new ExtractTextPlugin('css/common.[chunkhash:8].css');
var extractLESS = new ExtractTextPlugin('css/[name].[chunkhash:8].css');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var clean = new CleanWebpackPlugin(["dev"], {
    root: path.join(__dirname,"./public/"),
    verbose: true,
    dry: false
});
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));
var test = './src/apps/test/app.jsx';
var root = './src/apps/test/root.jsx';
module.exports = {
    devtool: 'false',
    entry: {
        test: [test],
        root:[root]
    },
    output: {
        path: path.resolve(__dirname, './public/dev'),
        filename:'[name].[chunkhash:8].js',
        chunkFilename:'[name].[chunkhash:8].js',
        publicPath:"/dev/"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude:/node_modules/,
                loader: 'babel?presets=es2015'
            },
            {
                test: /jquery/, 
                loader: 'expose?jquery!expose?$!expose?jQuery'
            },
            {
                test:/\.css$/,
                loader:extractCSS.extract("style-loader", "css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:8]",{publicPath:"../"})
            },
            {test:/\.less$/, loader:extractLESS.extract("style-loader", "css-loader!less-loader")},
            // { test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:8]&sourceMap!postcss-loader?browsers=last 2 version!less?outputStyle=expanded&sourceMap=true&sourceMapContents=true') },
            {
                test: /\.(eot|woff|svg|ttf|woff2|appcache)(\?|$)/,
                loader: 'file-loader?name=[name].[ext]'
            },
            
            {
                test: /\.jsx$/,
                loader: 'babel',
                query: {
                    plugins: ["transform-decorators-legacy"],
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {
                test:/\.html$/,
                loader:'html-loader'
            },
            { test: webpackIsomorphicToolsPlugin.regular_expression('images'), loader: 'url-loader?limit=10240' }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'react.[hash:8].js'),
        extractCSS,
        extractLESS,
        new HtmlWebpackPlugin({
            filename:__dirname+"/public/dev/test.html",
            template:__dirname+"/src/apps/test/test.html",
            chunks:["vendor","test"],
            inject:true
        }),
        clean,
        new CopyWebpackPlugin([
            { from: './src/lib/',to:"lib"}
        ]),
        new webpack.NoErrorsPlugin(),
        webpackIsomorphicToolsPlugin.development(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ],
    resolve: {
        modulesDirectories: [
            'src',
            'node_modules'
        ],
        extensions: ['', '.js', '.jsx','.json'] //后缀名自动补全
    }
};