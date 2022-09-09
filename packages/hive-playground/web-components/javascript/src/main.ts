import './styles/hive-custom.scss';

import { defineCustomElements } from '@alexbjr369/hive-wc-core/loader';
defineCustomElements();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <hv-container size="fixed">hive</hv-container>
`;
