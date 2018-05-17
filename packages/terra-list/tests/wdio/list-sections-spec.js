/* global browser, Terra */
const viewports = Terra.viewports('medium');

describe('List with Sections', () => {
  describe('Single Selectable List with Sections', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-list/list/single-select-list/single-select-sections'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Multi Selectable List with Sections', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-list/list/multi-select-list/multi-select-sections'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
