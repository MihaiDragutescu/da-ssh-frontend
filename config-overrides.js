const path = require("path");

module.exports = {
  webpack: function (config, env) {
    config = {
      ...config,
      resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
          "@App": path.resolve(__dirname, "src/"),
          "@Components-ui": path.resolve(__dirname, "src/components/ui/"),
          "@Fonts": path.resolve(__dirname, "src/assets/fonts/"),
          "@Home": path.resolve(__dirname, "src/pages/Home/"),
          "@Images": path.resolve(__dirname, "src/assets/images/"),
          "@Styles": path.resolve(__dirname, "src/styles/"),
        },
      },
    };

    return config;
  },
};
