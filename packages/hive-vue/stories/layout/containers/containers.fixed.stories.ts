import { ContainerSizeAttribute } from '@alexbjr369/hive-common';
import { withDesign } from 'storybook-addon-designs';
import HvContainer from '../../../src/components/Container.vue';

const { FIXED } = ContainerSizeAttribute;

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
    <hv-container class="stories-container" size=${FIXED}>
      &lt;hv-container size="${FIXED}"&gt;&lt;/hv-container&gt;
    </hv-container>
  `,
});

export const Fixed = Template.bind({});
Fixed.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/1qFtanhiPCXP6zQRw3fgWn/?node-id=113%3A921',
  },
};
Fixed.argTypes = {
  size: {
    description: 'Defines the component size.',
    table: {
      type: { summary: FIXED },
      defaultValue: { summary: 'undefined' },
    },
  },
};
