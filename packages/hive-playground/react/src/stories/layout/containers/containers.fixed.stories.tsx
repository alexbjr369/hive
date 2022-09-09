import { ContainerSizeAttribute } from '@alexbjr369/hive-common';
import { HvContainer } from '@alexbjr369/hive-react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

const { FIXED } = ContainerSizeAttribute;

export default {
  title: 'Layout/Containers',
  decorators: [withDesign],
} as ComponentMeta<typeof HvContainer>;

const Template: ComponentStory<typeof HvContainer> = () => (
  <>
    <HvContainer className="stories-container" size={FIXED}>
      &lt;HvContainer size="{FIXED}"&gt;&lt;/HvContainer&gt;
    </HvContainer>
  </>
);

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
