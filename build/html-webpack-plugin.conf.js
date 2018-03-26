const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function getPath(filename) {
  return path.join('src/views', filename);
}

module.exports = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: getPath('index/index.html'),
    chunks: ['index']
  }),
  new HtmlWebpackPlugin({
    filename: 'swiper-slider.html',
    template: getPath('swiper-slider/index.html'),
    chunks: ['swiper-slider']
  })
]