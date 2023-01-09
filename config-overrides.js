const path = require("path");

module.exports = {
  webpack: function (config, env) {
    config = {
      ...config,
      resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
          "@App": path.resolve(__dirname, "src/"),
          "@Assets": path.resolve(__dirname, "src/assets/"),
          "@Components": path.resolve(__dirname, "src/components/"),
          "@Home": path.resolve(__dirname, "src/pages/Home/"),
          "@Styles": path.resolve(__dirname, "src/styles/"),
        },
      },
    };

    return config;
  },
};
