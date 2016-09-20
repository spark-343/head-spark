
var path = require('path');

module.exports = {
  entry: {
    'dist/main': path.join(__dirname, 'app/main.ts'),
    'dist/vendor': path.join(__dirname, 'vendor.ts')
  },
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.less', '.css', '.html'],
    // modulesDirectories: [path.join(__dirname, '../../node_modules')],
    modules: [
        path.join(__dirname, '../../node_modules'),
        path.join(__dirname, '../../typings')
   ]
  },
  module: {
    loaders: [
    //   { test: /\.js$/, loader: 'raw-loader' },
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.less$/, loader: 'raw-loader!less-loader' },
      { test: /\.html$/, loader: 'html-loader' }

    ]
  }
}
