import { angularOutputTarget } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'hive',
  plugins: [sass()],
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@alexbjr369/hive-wc-core',
      proxiesFile: '../hive-wc-react/src/components/proxies.ts',
      includeDefineCustomElements: true,
    }),
    vueOutputTarget({
      componentCorePackage: '@alexbjr369/hive-wc-core',
      proxiesFile: '../hive-wc-vue/src/components/proxies.ts',
      includeDefineCustomElements: true,
    }),
    angularOutputTarget({
      componentCorePackage: '@alexbjr369/hive-wc-core',
      directivesArrayFile: '../hive-wc-angular/src/components/index.ts',
      directivesProxyFile: '../hive-wc-angular/src/components/proxies.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
};
