import { newSpecPage } from '@stencil/core/testing';
import { Container } from '../container';

describe('hv-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Container],
      html: `<hv-container></hv-container>`,
    });
    expect(page.root).toEqualHtml(`
      <hv-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hv-container>
    `);
  });
});
