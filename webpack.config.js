/* eslint-env node */
/* eslint no-console: 0 */
const path = require('path');
const browsersList = require('browserslist');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


const {version, deployPath, deployUrl, nodeEnv} = require('./build/config');

// Enable CSP
// By default, we have this enabled for both development and production
// If you want to turn this off, please set enableCSP to false
const enableCSP = true;


module.exports = ()=> {
  const isProduction = (nodeEnv === 'production');
  const appUrl = deployUrl;
  const last2Versions = browsersList('last 2 versions, not IE < 11');

  console.log(`
    Running webpack with config from '.build/confing.json':
    NODE_ENV=${nodeEnv}
    version=${version}
    app-url=${appUrl}
    __LAST_2_BROWSER_VERSIONS__=${last2Versions}
  `);


  return {
    mode: isProduction ? 'production' : 'development',
    entry: {
      app: ['@babel/polyfill', 'whatwg-fetch', './src/index.js']
    },

    output: {
      path: path.join(__dirname, 'build', 'pkg'),
      filename: '[name]-[contenthash].js'
      // devtoolModuleFilenameTemplate: 'merc:///[resource-path]'
    },

    optimization: {
      minimize: isProduction,
      minimizer: isProduction ? [
        new UglifyJsPlugin({
          cache: false,
          parallel: true,
          sourceMap: false,
          uglifyOptions: {
            ecma: 6,
            // NOTE: important to make sure that uglify outputs to ecma 5
            // as its the latest ecma supported by IE11 as ecma script 5
            // does not output object shorthand (unsupported in IE11), ecam 6+
            // will output object shorthand
            output: {
              ecma: 5
            },
            comments: false,
            mangle: true,
            toplevel: false,
            compress: {inline: false}
          }
        })
      ] : [],
      runtimeChunk: {
        name: 'manifest'
      },
      splitChunks: {
        chunks: 'async',
        name: false,
        cacheGroups: {
          default: false,
          react: {
            test: /[\\/]node_modules[\\/]react/,
            name: 'react',
            chunks: 'all'
          }
        }
      }
    },

    plugins: [
      new webpack.DefinePlugin({
        // used by react to switch on/off dev warnings
        'process.env': {
          NODE_ENV: `"${nodeEnv}"`
        },
        __LAST_2_BROWSER_VERSIONS__: JSON.stringify(last2Versions)
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: {
          removeComments: isProduction,
          collapseWhitespace: isProduction
        },
        favicon: './src/favicon.png',
        buildCommit: version,
        deployPath,
        appUrl,
        filename: 'index.html',
        // NOTE: dont forget to include all cache groups here..
        chunks: ['manifest', 'react', 'app'],
        chunksSortMode: 'manual',
        cache: false,
        enableCSP
      }),
      new CopyWebpackPlugin([{from: 'src/favicon.png'}]),
      new MiniCssExtractPlugin({chunkFilename: '[name]-[contenthash].css'})
    ],

    module: {
      rules: [{
        test: /(\.css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: !isProduction,
              minimize: isProduction,
              importLoaders: true,
              localIdentName: '[name]_[local]_[hash:base64:5]',
              camelCase: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: ()=> [
                require('postcss-nested')({ /* options */ }),
                require('autoprefixer')
              ],
              sourceMap: !isProduction
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|ico|gif)$/,
        loader: 'url-loader?limit=1'
      }, {
        test: /\.jsx?$/,
        include: [
          ...(
            isProduction ? [
              // the following modules are compiled for latest node version of
              // node or ES6 and may need some transcompilation for production,
              // for dev we don't need it.
              path.resolve(__dirname, 'node_modules/refocus')
            ] : []
          ),
          path.resolve(__dirname, 'src')
        ],
        loader: 'babel-loader',
        options: {
          // making sure babel gets the right environment and thus
          // picks up the correct config.
          envName: nodeEnv
        }
      }]
    },
    devtool: isProduction
      ? '#nosources-source-map'
      : '#cheap-module-source-map',
    devServer: {
      port: 8080,
      host: '0.0.0.0',
      inline: true,
      stats: 'minimal',
      contentBase: './build',
      publicPath: `/${deployPath}/`,
      historyApiFallback: {
        index: `/${deployPath}/`
      }
    }
  };
};
