/* global  browser,Terra */
const viewports = Terra.viewports('tiny', 'medium');

describe('Popup', () => {
  describe('Arrow Popup', () => {
    beforeEach(() => browser.url('/#/tests/popup-tests/arrow'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-popup-content-rounded-corners-border-radius': '20px',
      '--terra-popup-content-inner-box-shadow': '10px 10px 36px blue',
      '--terra-popup-content-inner-background-color': 'yellow',
    });
  });
});
