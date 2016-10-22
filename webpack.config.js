const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const validate = require('webpack-validator');

const parts = require('./libs/parts');

const PATHS = {
  app: path.join(__dirname, 'app'),
  style: [
    path.join(__dirname, 'node_modules', 'purecss'),
    path.join(__dirname, 'app', 'main.css')
  ],
  build: path.join(__dirname, 'build')
};



const common = {

  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
  entry: {
    app: PATHS.app,
    style: PATHS.style,
    vendor: ['react']
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo'
    })
  ]
};


var config;

// Detect how npm is run and branch based on that
switch(process.env.npm_lifecycle_event) {
  case 'build':
    
    config = merge(
      common,
      {
        devtool: 'source-map',
          output: {
            path: PATHS.build,
            // Tweak this to match your GitHub project name
            publicPath: '/JumpingRock.github.io/',
            filename: '[name].[chunkhash].js',
            // This is used for require.ensure. The setup
            // will work without but this is useful to set.
            chunkFilename: '[chunkhash].js'
          }
      },

      parts.clean(PATHS.build),

      parts.setFreeVariable(
        'process.env.NODE_ENV',
        'production'
      ),

      parts.extractBundle({
        name: 'vendor',
        entries: ['react']
      }),

      parts.minify(),
      parts.extractCSS(PATHS.style),
      parts.purifyCSS([PATHS.app])

    );

    break;
  default:
    config = merge(
      common,
      {
        devtool: 'eval-source-map'
      },
      parts.setupCSS(PATHS.style),
      parts.devServer({
        // Customize host/port here if needed
        host: process.env.HOST,
        port: process.env.PORT
      })
    );

}

// Run validator in quiet mode to avoid output in stats
module.exports = validate(config, {
  quiet: true
});
