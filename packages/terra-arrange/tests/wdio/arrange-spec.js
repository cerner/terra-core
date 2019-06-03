const viewports = Terra.viewports('tiny', 'medium');

describe('Arrange', () => {
  describe('Aligned All', () => {
    before(() => browser.url('/#/raw/tests/terra-arrange/arrange/aligned-all-arrange'));
    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('Aligned All Fit End Fill', () => {
    before(() => browser.url('/#/raw/tests/terra-arrange/arrange/aligned-fit-end-fill-arrange'));
    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('Aligned All Fit Start Fill', () => {
    before(() => browser.url('/#/raw/tests/terra-arrange/arrange/aligned-fit-start-fill-arrange'));
    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('Aligned Individually Fit Start', () => {
    before(() => browser.url('/#/raw/tests/terra-arrange/arrange/individually-aligned-fit-start'));
    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('Aligned Individually Fill', () => {
    before(() => browser.url('/#/raw/tests/terra-arrange/arrange/individually-aligned-fill'));
    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('Aligned Individually Fit End', () => {
    before(() => browser.url('/#/raw/tests/terra-arrange/arrange/individually-aligned-fit-end'));
    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('Aligned All Arrange Long Words', () => {
    before(() => browser.url('/#/raw/tests/terra-arrange/arrange/aligned-all-long-words'));
    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('Align stretch with 20% max-widths on containers using attribute props', () => {
    before(() => browser.url('/#/raw/tests/terra-arrange/arrange/aligned-stretch-max-width'));
    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });
});
