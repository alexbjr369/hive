import { ContainerSizeAttribute } from '@alexbjr369/hive-wc-core';
import { HvContainer } from '@alexbjr369/hive-wc-react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Layout/Containers',
  decorators: [withDesign],
} as ComponentMeta<typeof HvContainer>;

const Template: ComponentStory<typeof HvContainer> = ({ size }) => {
  const label = (size: string | undefined) => {
    if (size) return ` size="${size}"`;

    return '';
  };

  return (
    <>
      <HvContainer className="stories-container" size={size}>
        &lt;HvContainer{label(size)}&gt;&lt;/HvContainer&gt;
      </HvContainer>
    </>
  );
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
    options: [...Object.values(ContainerSizeAttribute).filter((item) => item !== ContainerSizeAttribute.FIXED), 'custom'],
    control: { type: 'select' },
    description: 'Defines the component size.',
    table: {
      type: {
        summary: `${Object.values(ContainerSizeAttribute)
          .filter((item) => item !== ContainerSizeAttribute.FIXED)
          .join(' |')} | custom | string`,
      },
      defaultValue: { summary: 'undefined' },
    },
  },
};
