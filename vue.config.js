const Path = require('path');

function resolve(dir) {
  return Path.join(__dirname, dir);
}

module.exports = {
  // webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
      extensions: ['.js', '.vue', '.json', '.scss'],
    },
  },
};
