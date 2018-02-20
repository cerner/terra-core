/* global  browser,Terra */
const viewports = Terra.viewports('tiny', 'medium');

describe('Popup', () => {
  describe('Arrow Popup', () => {
    beforeEach(() => browser.url('/#/tests/popup-tests/arrow'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty('#root', {
      '--terra-popup-content-inner-box-shadow': '10px 10px 36px blue',
      '--terra-popup-content-inner-background-color': 'yellow',
      '--terra-popup-content-inner-border': '10px dashed black',
    });
  });

  describe('Bounded Popup', () => {
    beforeEach(() => browser.url('/#/tests/popup-tests/bounded'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty('#root', {
      '--terra-popup-content-header-border-bottom': '15px double red',
      '--terra-popup-content-close-icon': 'green',
    });
  });
});
