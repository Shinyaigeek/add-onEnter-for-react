var path = require('path');
module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
        {
            test: /\.js(x?)$/,
            // loader: 'babel?stage=0',
            loader:'babel-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.ts(x?)$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.css$/,
            use: ["style-loader","css-loader"]
        }
    ]
},
  externals: {
    'react': 'commonjs react' 
  },

  resolve: {
    modules: ["node_modules"],
    extensions: ['.js', '.jsx','.ts','.tsx']
},
};