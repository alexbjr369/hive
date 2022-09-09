import { ContainerSizeAttribute } from '@alexbjr369/hive-common';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Layout/Containers',
  decorators: [withDesign],
};

const Template = ({ size }) => {
  const label = (size) => {
    if (size) return ` size="${size}"`;

    return '';
  };

  return `
    <hv-container class="stories-container" size=${size}>
      &lt;hv-container${label(size)}&gt;&lt;/hv-container&gt;
    </hv-container>
  `;
};

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
