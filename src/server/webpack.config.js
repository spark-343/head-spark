
var path = require('path');

module.exports = {
  entry: {
    server: path.join(__dirname, 'server.ts'),
  },
  output: {
    filename: path.join(__dirname, 'server.js')
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.less', '.css', '.html'],
    // modulesDirectories: [path.join(__dirname, '../../node_modules')],
    modules: [
        /*path.join(__dirname, '../../node_modules'),
        path.join(__dirname, '../../typings')*/
   ]
  },
  module: {
    loaders: [
    //   { test: /\.js$/, loader: 'raw-loader' },
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}
