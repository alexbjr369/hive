import { ContainerDefaultClass } from '@alexbjr369/hive-common';
import { withDesign } from 'storybook-addon-designs';

const { DEFAULT } = ContainerDefaultClass;

export default {
  title: 'Layout/Containers',
  decorators: [withDesign],
};

const Template = () => {
  return `
    <div class="${DEFAULT.slice(1)} stories-container">
      &lt;div class="${DEFAULT.slice(1)}"&gt;&lt;/div&gt;
    </div>
  `;
};

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
    table: {
      type: { summary: [DEFAULT] },
      defaultValue: { summary: DEFAULT },
    },
  },
};
