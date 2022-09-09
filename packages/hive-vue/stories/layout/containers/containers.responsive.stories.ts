import { ContainerSizeAttribute } from '@alexbjr369/hive-common';
import { withDesign } from 'storybook-addon-designs';
import HvContainer from '../../../src/components/Container.vue';

export default {
  title: 'Layout/Containers',
  decorators: [withDesign],
};

const label = (size: string | undefined) => {
  if (size) return ` size="${size}"`;

  return '';
};

const Template = (args) => ({
  components: { HvContainer },
  setup() {
    return { args };
  },
  template: `
    <hv-container class="stories-container" size=${args.size}>
      &lt;hv-container${label(args.size)}&gt;&lt;/hv-container&gt;
    </hv-container>
  `,
});

export const Responsive = Template.bind({});
Responsive.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/1qFtanhiPCXP6zQRw3fgWn/?node-id=113%3A852',
  },
};
Responsive.argTypes = {
  size: {
    options: Object.values(ContainerSizeAttribute).filter((item) => item !== ContainerSizeAttribute.FIXED),
    control: { type: 'select' },
    description: 'Defines the component size.',
    table: {
      type: {
        summary: `${Object.values(ContainerSizeAttribute)
          .filter((item) => item !== ContainerSizeAttribute.FIXED)
          .join(' |')} | string`,
      },
      defaultValue: { summary: 'undefined' },
    },
  },
};
