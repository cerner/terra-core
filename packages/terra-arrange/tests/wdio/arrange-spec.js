const viewports = Terra.viewports('tiny', 'medium');

describe('Arrange', () => {
  describe('Aligned All', () => {
    before(() => browser.url('/#/raw/tests/terra-arrange/arrange/aligned-all-arrange'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Aligned All Fit End Fill', () => {
    before(() => browser.url('/#/raw/tests/terra-arrange/arrange/aligned-fit-end-fill-arrange'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Aligned All Fit Start Fill', () => {
    before(() => browser.url('/#/raw/tests/terra-arrange/arrange/aligned-fit-start-fill-arrange'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Aligned Individually Fit Start', () => {
    before(() => browser.url('/#/raw/tests/terra-arrange/arrange/individually-aligned-fit-start'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Aligned Individually Fill', () => {
    before(() => browser.url('/#/raw/tests/terra-arrange/arrange/individually-aligned-fill'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Aligned Individually Fit End', () => {
    before(() => browser.url('/#/raw/tests/terra-arrange/arrange/individually-aligned-fit-end'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Aligned All Arrange Long Words', () => {
    before(() => browser.url('/#/raw/tests/terra-arrange/arrange/aligned-all-long-words'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Align stretch with 20% max-widths on containers using attribute props', () => {
    before(() => browser.url('/#/raw/tests/terra-arrange/arrange/aligned-stretch-max-width'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });
});
