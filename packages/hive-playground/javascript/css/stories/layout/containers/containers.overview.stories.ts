import { ContainerDefaultClass, ContainerFixedClass, ContainerResponsiveClasses } from '@alexbjr369/hive-common';
import { withDesign } from 'storybook-addon-designs';

const { FIXED } = ContainerFixedClass;
const { DEFAULT } = ContainerDefaultClass;

export default {
  title: 'Layout/Containers',
  decorators: [withDesign],
};

const Template = () => {
  return `
    <div class="hv-container hv-container_fixed stories-container">container fixed: width changes at each breakpoint</div>
    <div class="hv-container hv-container_sm stories-container">container sm: 100% wide until small breakpoint</div>
    <div class="hv-container hv-container_md stories-container">container md: 100% wide until medium breakpoint</div>
    <div class="hv-container hv-container_lg stories-container">container lg: 100% wide until large breakpoint</div>
    <div class="hv-container hv-container_xl stories-container">container xl: 100% wide until extra large breakpoint</div>
    <div class="hv-container hv-container_xxl stories-container">container xxl: 100% wide until extra extra large breakpoint</div>
    <div class="hv-container stories-container">container: 100% wide at all breakpoints</div>
  `;
};

export const Overview = Template.bind({});
Overview.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/1qFtanhiPCXP6zQRw3fgWn/?node-id=35%3A3',
  },
};
Overview.argTypes = {
  ['Containers']: {
    description: 'Containers are the most basic building block in hive, they align the content within a given viewport.',
    table: {
      type: {
        summary: [`${DEFAULT} | ${Object.values(ContainerResponsiveClasses).join(' |')} | ${FIXED} | string`],
      },
      defaultValue: { summary: DEFAULT },
    },
  },
};
