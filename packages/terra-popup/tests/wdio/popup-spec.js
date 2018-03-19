/* global  browser, before, Terra */
const viewports = Terra.viewports('tiny', 'medium');

describe('Popup', () => {
  describe('Arrow Popup', () => {
    beforeEach(() => browser.url('/#/raw/tests/popup/arrow-popup'));

    Terra.should.beAccessible({ viewports });
    Terra.should.themeEachCustomProperty('#root', {
      '--terra-popup-content-inner-box-shadow': '10px 10px 36px blue',
      '--terra-popup-content-inner-background-color': 'yellow',
      '--terra-popup-content-inner-border': '10px dashed black',
    });
  });

  describe('Bounded Popup', () => {
    beforeEach(() => browser.url('/#/raw/tests/popup/bounded-popup'));

    // Remove when #1353 is resolved
    const rules = { 'button-name': { enabled: false } };

    Terra.should.beAccessible({ viewports, rules });
    Terra.should.themeEachCustomProperty({
      '--terra-popup-content-header-border-bottom': '15px double red',
      '--terra-popup-content-close-icon': 'green',
    });
  });

  Terra.viewports('tiny', 'medium').forEach((viewport) => {
    describe('Arrow Popup viewports', () => {
      before(() => {
        browser.url('/#/raw/tests/popup/arrow-popup-closed');
        browser.setViewportSize(viewport);
        browser.click('#arrow-button');
      });

      Terra.should.matchScreenshot('#root');
    });
  });

  Terra.viewports('tiny', 'medium').forEach((viewport) => {
    describe('Bounded Popup viewports', () => {
      before(() => {
        browser.url('/#/raw/tests/popup/bounded-popup-closed');
        browser.setViewportSize(viewport);
        browser.click('#bounded-button');
      });

      Terra.should.matchScreenshot('#root');
    });
  });
});
