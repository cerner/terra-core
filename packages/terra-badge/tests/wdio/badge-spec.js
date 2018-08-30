/* global before, browser, Terra */
const viewports = Terra.viewports('tiny', 'medium');

describe('Badge', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-badge/badge/badge-default'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports, selector: '#default-badge' });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#default-badge',
      properties: {
        '--terra-badge-border': 'solid 1px rgba(89, 159, 253, 0.4)',
        '--terra-badge-border-radius': '20px',
        '--terra-badge-display': 'block',
        '--terra-badge-font-weight': 'normal',
        '--terra-badge-line-height': '2em',
        '--terra-badge-padding-bottom': '50px',
        '--terra-badge-padding-top': '50px',
        '--terra-badge-padding-left': '50px',
        '--terra-badge-padding-right': '50px',
        '--terra-badge-text-transform': 'uppercase',
      },
    });
  });

  describe('Intent', () => {
    before(() => browser.url('/#/raw/tests/terra-badge/badge/badge-intent'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-badge-background-color-default': 'pink',
        '--terra-badge-background-color-primary': 'pink',
        '--terra-badge-background-color-secondary': 'pink',
        '--terra-badge-background-color-positive': 'pink',
        '--terra-badge-background-color-negative': 'pink',
        '--terra-badge-background-color-warning': 'pink',
        '--terra-badge-background-color-info': 'pink',
        '--terra-badge-color-default': 'pink',
        '--terra-badge-color-primary': 'pink',
        '--terra-badge-color-secondary': 'pink',
        '--terra-badge-color-positive': 'pink',
        '--terra-badge-color-negative': 'pink',
        '--terra-badge-color-warning': 'pink',
        '--terra-badge-color-info': 'pink',
      },
    });
  });

  describe('Intent Background Image', () => {
    before(() => browser.url('/#/raw/tests/terra-badge/badge/badge-intent'));
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-badge-background-color-default': 'none',
        '--terra-badge-background-image-default': 'linear-gradient(to bottom, #ff9b00, #ff7e00)',
        '--terra-badge-background-color-primary': 'none',
        '--terra-badge-background-image-primary': 'linear-gradient(to bottom, #ff9b00, #ff7e00)',
        '--terra-badge-background-color-secondary': 'none',
        '--terra-badge-background-image-secondary': 'linear-gradient(to bottom, #ff9b00, #ff7e00)',
        '--terra-badge-background-color-positive': 'none',
        '--terra-badge-background-image-positive': 'linear-gradient(to bottom, #ff9b00, #ff7e00)',
        '--terra-badge-background-color-negative': 'none',
        '--terra-badge-background-image-negative': 'linear-gradient(to bottom, #ff9b00, #ff7e00)',
        '--terra-badge-background-color-warning': 'none',
        '--terra-badge-background-image-warning': 'linear-gradient(to bottom, #ff9b00, #ff7e00)',
        '--terra-badge-background-color-info': 'none',
        '--terra-badge-background-image-info': 'linear-gradient(to bottom, #ff9b00, #ff7e00)',
      },
    });
  });

  describe('Size', () => {
    before(() => browser.url('/#/raw/tests/terra-badge/badge/badge-size'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-badge-font-size-tiny': '50px',
        '--terra-badge-font-size-small': '50px',
        '--terra-badge-font-size-medium': '50px',
        '--terra-badge-font-size-large': '50px',
        '--terra-badge-font-size-huge': '50px',
      },
    });
  });

  describe('Icons', () => {
    before(() => browser.url('/#/raw/tests/terra-badge/badge/badge-icon'));
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-badge-child-margin': '50px',
    });
  });
});
