const { defineConfig } = require("@vue/cli-service");
// 引入插件
const NodePolyfillWebpackPlugin = require("node-polyfill-webpack-plugin");
// vant
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new NodePolyfillWebpackPlugin(),
      ComponentsPlugin({ resolvers: [VantResolver()]}),
    ],
  },
});
