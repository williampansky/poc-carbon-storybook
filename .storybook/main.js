module.exports = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-docs/preset',
    // {
    //   name: '@storybook/addon-docs',
    //   options: {
    //     configureJSX: true,
    //     babelOptions: {},
    //     sourceLoaderOptions: null,
    //   },
    // },
    '@storybook/addon-events',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-options',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport'
  ],
  stories: ['../src/**/*.stories.js'],
};