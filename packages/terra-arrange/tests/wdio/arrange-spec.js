/* global browser, Terra, before */
const viewports = Terra.viewports('tiny', 'medium');

describe('Arrange', () => {
  describe('Aligned All', () => {
    before(() => browser.url('/#/tests/arrange-tests/aligned-all-arrange'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Aligned All Fit End Fill', () => {
    before(() => browser.url('/#/tests/arrange-tests/aligned-all-arrange-fit-end-fill'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Aligned All Fit Start Fill', () => {
    before(() => browser.url('/#/tests/arrange-tests/aligned-all-arrange-fit-start-fill'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Aligned Individually Fit Start', () => {
    before(() => browser.url('/#/tests/arrange-tests/aligned-individually-fit-start'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Aligned Individually Fill', () => {
    before(() => browser.url('/#/tests/arrange-tests/aligned-individually-fill'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Aligned Individually Fit End', () => {
    before(() => browser.url('/#/tests/arrange-tests/aligned-individually-fit-end'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Aligned All Arrange Long Words', () => {
    before(() => browser.url('/#/tests/arrange-tests/aligned-all-arrange-long-words'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Aligned All Arrange Long Words', () => {
    before(() => browser.url('/#/tests/arrange-tests/aligned-all-arrange-long-words'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });
});
