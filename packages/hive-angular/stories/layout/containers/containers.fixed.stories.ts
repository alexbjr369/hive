import { ContainerSizeAttribute } from '@alexbjr369/hive-common';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { HvContainer } from 'projects/hive/src/lib/container/container.component';
import { withDesign } from 'storybook-addon-designs';

const { FIXED } = ContainerSizeAttribute;

export default {
  title: 'Layout/Containers',
  decorators: [withDesign],
  component: HvContainer,
} as Meta;

const Template: Story<HvContainer> = (args: HvContainer) => ({
  props: args,
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
