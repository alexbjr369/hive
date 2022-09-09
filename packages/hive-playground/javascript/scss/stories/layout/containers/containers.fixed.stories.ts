import { ContainerDefaultClass, ContainerFixedClass } from '@alexbjr369/hive-common';
import { withDesign } from 'storybook-addon-designs';

const { FIXED } = ContainerFixedClass;
const { DEFAULT } = ContainerDefaultClass;

export default {
  title: 'Layout/Containers',
  decorators: [withDesign],
};

const Template = () => {
  return `
    <div class="hv-container ${FIXED.slice(1)} stories-container">
      &lt;div class="${`${DEFAULT.slice(1)} ${FIXED.slice(1)}`}"&gt;&lt;/div&gt;
    </div>
  `;
};

export const Fixed = Template.bind({});
Fixed.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/1qFtanhiPCXP6zQRw3fgWn/?node-id=113%3A921',
  },
};
Fixed.argTypes = {
  ['Fixed container']: {
    description: 'Width changes at each breakpoint.',
    table: {
      type: { summary: [FIXED] },
      defaultValue: { summary: DEFAULT },
    },
  },
};
