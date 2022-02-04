const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: { appendTsSuffixTo: [/\.vue$/] },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"],
    alias: {
      "@": path.resolve("resources/ts"),
    },
  },
};
