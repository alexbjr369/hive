import { ContainerDefaultClass, ContainerResponsiveClasses } from '@alexbjr369/hive-common';
import { withDesign } from 'storybook-addon-designs';

const { DEFAULT } = ContainerDefaultClass;

export default {
  title: 'Layout/Containers',
  decorators: [withDesign],
};

const Template = ({ 'Responsive containers': breakpoint }) => {
  const label = (breakpoint) => {
    if (breakpoint) return ` ${breakpoint.slice(1)}`;

    return '';
  };

  return `
    <div class="hv-container ${breakpoint ? breakpoint.slice(1) : ''} stories-container">
      &lt;div class="${`hv-container${label(breakpoint)}`}"&gt;&lt;/div&gt;
    </div>
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
  ['Responsive containers']: {
    options: [...Object.values(ContainerResponsiveClasses), '.hv-container_custom'],
    control: { type: 'select' },
    description: '100% wide until given breakpoint.',
    table: {
      type: { summary: `${Object.values(ContainerResponsiveClasses).join(' |')} | .hv-container_custom | string` },
      defaultValue: { summary: DEFAULT },
    },
  },
};
