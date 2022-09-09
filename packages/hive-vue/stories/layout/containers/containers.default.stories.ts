import { withDesign } from 'storybook-addon-designs';
import HvContainer from '../../../src/components/Container.vue';

export default {
  title: 'Layout/Containers',
  decorators: [withDesign],
};

const Template = (args) => ({
  components: { HvContainer },
  setup() {
    return { args };
  },
  template: `
    <hv-container class="stories-container">
      &lt;hv-container&gt;&lt;/hv-container&gt;
    </hv-container>
  `,
});

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/1qFtanhiPCXP6zQRw3fgWn/?node-id=113%3A741',
  },
};
Default.argTypes = {
  ['Default container']: {
    description: '100% wide at all breakpoints.',
  },
};
