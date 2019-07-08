const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/news.html',
            filename: 'news.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            },
            output: {
                filename: 'news.html',
                path: path.resolve(__dirname, 'dist')
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/news-landing.html',
            filename: 'news-landing.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            },
            output: {
                filename: 'news-landing.html',
                path: path.resolve(__dirname, 'dist')
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/news-article.html',
            filename: 'news-article.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            },
            output: {
                filename: 'news-article.html',
                path: path.resolve(__dirname, 'dist')
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    module: {
        rules: [
            {
                test: [/.css$|.scss$/],
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/'
                    }
                }]
            }
        ]
    }
};
