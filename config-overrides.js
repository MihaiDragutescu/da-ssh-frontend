const path = require("path");

module.exports = {
  webpack: function (config, env) {
    config = {
      ...config,
      resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
          "@Styles": path.resolve(__dirname, "src/styles/"),
          "@App": path.resolve(__dirname, "src/"),
          "@Home": path.resolve(__dirname, "src/pages/Home/"),
          "@Components-ui": path.resolve(__dirname, "src/components/ui/"),
        },
      },
    };

    return config;
  },
};
