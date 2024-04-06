module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@app': './src',
          '@components': './src/components',
          '@constants': './src/constants',
          '@theme': './src/theme',
          '@json': './src/json',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
