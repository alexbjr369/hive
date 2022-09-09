module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y', 'storybook-addon-designs'],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
