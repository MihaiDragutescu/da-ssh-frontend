const path = require('path');

module.exports = {
  webpack: function (config, env) {
    config = {
      ...config,
      resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          '@App': path.resolve(__dirname, 'src/'),
          '@Assets': path.resolve(__dirname, 'src/assets/'),
          '@Components': path.resolve(__dirname, 'src/components/'),
          '@Context': path.resolve(__dirname, 'src/context/'),
          '@Pages': path.resolve(__dirname, 'src/pages/'),
          '@Styles': path.resolve(__dirname, 'src/styles/'),
          '@Types': path.resolve(__dirname, 'src/types/'),
          '@Utils': path.resolve(__dirname, 'src/utils/'),
        },
      },
    };

    return config;
  },
};
