export const config = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: { disable: true },
  layout: 'fullscreen',
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      xs: {
        name: 'xs',
        styles: {
          width: '320px',
          height: '100%',
        },
      },
      sm: {
        name: 'sm',
        styles: {
          width: '576px',
          height: '100%',
        },
      },
      md: {
        name: 'md',
        styles: {
          width: '768px',
          height: '100%',
        },
      },
      lg: {
        name: 'lg',
        styles: {
          width: '992px',
          height: '100%',
        },
      },
      xl: {
        name: 'xl',
        styles: {
          width: '1200px',
          height: '100%',
        },
      },
      xl: {
        name: 'xxl',
        styles: {
          width: '1400px',
          height: '100%',
        },
      },
    },
  },
};
