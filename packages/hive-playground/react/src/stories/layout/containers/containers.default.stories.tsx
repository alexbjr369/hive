import { HvContainer } from '@alexbjr369/hive-react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Layout/Containers',
  decorators: [withDesign],
} as ComponentMeta<typeof HvContainer>;

const Template: ComponentStory<typeof HvContainer> = () => (
  <>
    <HvContainer className="stories-container">&lt;HvContainer&gt;&lt;/HvContainer&gt;</HvContainer>
  </>
);

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
