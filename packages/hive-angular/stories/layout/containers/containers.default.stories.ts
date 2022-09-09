import { Meta, Story } from '@storybook/angular/types-6-0';
import { HvContainer } from 'projects/hive/src/lib/container/container.component';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Layout/Containers',
  decorators: [withDesign],
  component: HvContainer,
} as Meta;

const Template: Story<HvContainer> = (args: HvContainer) => ({
  props: args,
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
  size: {
    description: '100% wide at all breakpoints.',
  },
};
