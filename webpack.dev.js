const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map", // NOTE: need strong source mapping in development
  devServer: {
    static: "./dist",
  },
});