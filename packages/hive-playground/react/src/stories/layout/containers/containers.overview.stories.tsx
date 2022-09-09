import { ContainerSizeAttribute } from '@alexbjr369/hive-common';
import { HvContainer } from '@alexbjr369/hive-react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

const { SM, MD, LG, XL, XXL, FIXED } = ContainerSizeAttribute;

export default {
  title: 'Layout/Containers',
  decorators: [withDesign],
} as ComponentMeta<typeof HvContainer>;

const Template: ComponentStory<typeof HvContainer> = () => (
  <>
    <HvContainer className="stories-container" size={FIXED}>
      container {FIXED}: width changes at each breakpoint
    </HvContainer>
    <HvContainer className="stories-container" size={SM}>
      container {SM}: 100% wide until small breakpoint
    </HvContainer>
    <HvContainer className="stories-container" size={MD}>
      container {MD}: 100% wide until medium breakpoint
    </HvContainer>
    <HvContainer className="stories-container" size={LG}>
      container {LG}: 100% wide until large breakpoint
    </HvContainer>
    <HvContainer className="stories-container" size={XL}>
      container {XL}: 100% wide until extra large breakpoint
    </HvContainer>
    <HvContainer className="stories-container" size={XXL}>
      container {XXL}: 100% wide until extra extra large breakpoint
    </HvContainer>
    <HvContainer className="stories-container" size="custom">
      container custom: 100% wide until custom breakpoint
    </HvContainer>
    <HvContainer className="stories-container">container: 100% wide at all breakpoints</HvContainer>
  </>
);

export const Overview = Template.bind({});
Overview.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/1qFtanhiPCXP6zQRw3fgWn/?node-id=35%3A3',
  },
};
Overview.argTypes = {
  size: {
    description: 'Defines the component size.',
    table: {
      type: { summary: [`${Object.values(ContainerSizeAttribute).join(' |')} | custom | string`] },
      defaultValue: { summary: 'undefined' },
    },
  },
};
