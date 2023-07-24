module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
            '*.svg',
            '.png',
          ],
          alias: {
            '@assets': '.assets/',
            '@app': './app/',
            '@components': './app/components/',
            '@screens': './app/screens/',
            '@hooks': './app/hooks/',
            '@ui': './app/components/ui/',
            '@services': './src/services/',
            '@theme': './app/theme/',
            '@utils': './app/utils/',
          },
        },
      ],
    ],
  };
};
