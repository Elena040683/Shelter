const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    // Откуда файлы берем
    // main: path.resolve(__dirname, './src/index.js'),
    slider: path.resolve(__dirname, './src/pages/slider/app-slider.js'),
    pagination: path.resolve(__dirname, './src/pages/pagination/app-pagination.js'),
  },

  output: {
    // Куда выгружаем переработанные вебпаком файлы
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  
   plugins: [
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/slider/slider.html'),
      filename: 'slider.html',
      chunks: ['common', 'slider'],
     }),
     new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/pagination/pagination.html'),
      filename: 'pagination.html',
      chunks: ['common', 'slider'],
     }),
    //  new HtmlWebpackPlugin({
    //    title: 'My App',
    //    template: path.resolve(__dirname, './src/template.html'),
    //    filename: 'index.html',
    //    inject: 'body',
    //  }),
      new webpack.HotModuleReplacementPlugin(),
   ],

   module: {
     rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: ['babel-loader'],
      },
       {
         test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
         type: 'asset/resource',
       },
       {
         test: /\.(woff(2)?|eot|tif|otf|svg|)$/,
         type: 'asset/inline',
       },
       {
         test: /\.(scss|css)$/,
         use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        },

     ],
  },

   mode: "development",
    //  devServer: {
    //    historyApiFallback: true,
    //    contentBase: path.resolve(__dirname, 'dist'),
    //    open: true,
    //    compress: true,
    //    hot: true,
    //    port: 3000,
    //  },
     devServer: {
      static: path.resolve(__dirname, 'src'),
      port: 8080,
      open: true,
      hot: true
  }
}