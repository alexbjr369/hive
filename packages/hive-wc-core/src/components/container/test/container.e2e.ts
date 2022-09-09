import { newE2EPage } from '@stencil/core/testing';

describe('hv-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hv-container></hv-container>');

    const element = await page.find('hv-container');
    expect(element).toHaveClass('hydrated');
  });
});
