const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = {
  plugins: [new NodePolyfillPlugin()],
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: "production"
};
