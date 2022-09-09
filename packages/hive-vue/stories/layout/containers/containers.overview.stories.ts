import { ContainerSizeAttribute } from '@alexbjr369/hive-common';
import { withDesign } from 'storybook-addon-designs';
import HvContainer from '../../../src/components/Container.vue';

const { SM, MD, LG, XL, XXL, FIXED } = ContainerSizeAttribute;

export default {
  title: 'Layout/Containers',
  decorators: [withDesign],
};

const Template = (args) => ({
  components: { HvContainer },
  setup() {
    return { args };
  },
  template: `
    <hv-container class="stories-container" size=${FIXED}>container ${FIXED}: width changes at each breakpoint</hv-container>
    <hv-container class="stories-container" size=${SM}>container ${SM}: 100% wide until small breakpoint</hv-container>
    <hv-container class="stories-container" size=${MD}>container ${MD}: 100% wide until medium breakpoint</hv-container>
    <hv-container class="stories-container" size=${LG}>container ${LG}: 100% wide until large breakpoint</hv-container>
    <hv-container class="stories-container" size=${XL}>container ${XL}: 100% wide until extra large breakpoint</hv-container>
    <hv-container class="stories-container" size=${XXL}>container ${XXL}: 100% wide until extra extra large breakpoint</hv-container>
    <hv-container class="stories-container">container: 100% wide at all breakpoints</hv-container>
  `,
});

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
      type: { summary: [`${Object.values(ContainerSizeAttribute).join(' |')} | string`] },
      defaultValue: { summary: 'undefined' },
    },
  },
};
