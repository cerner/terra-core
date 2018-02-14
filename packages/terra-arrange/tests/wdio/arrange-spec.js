/* global browser, Terra, before */
const viewports = Terra.viewports('tiny', 'medium');

describe('Arrange', () => {
  describe('Aligned All', () => {
    before(() => browser.url('/#/raw/tests/arrange/aligned-all-arrange'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Aligned All Fit End Fill', () => {
    before(() => browser.url('/#/raw/tests/arrange/aligned-fit-end-fill-arrange'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Aligned All Fit Start Fill', () => {
    before(() => browser.url('/#/raw/tests/arrange/aligned-fit-start-fill-arrange'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Aligned Individually Fit Start', () => {
    before(() => browser.url('/#/raw/tests/arrange/individually-aligned-fit-start'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Aligned Individually Fill', () => {
    before(() => browser.url('/#/raw/tests/arrange/individually-aligned-fill'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Aligned Individually Fit End', () => {
    before(() => browser.url('/#/raw/tests/arrange/individually-aligned-fit-end'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Aligned All Arrange Long Words', () => {
    before(() => browser.url('/#/raw/tests/arrange/aligned-all-long-words'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });
});
