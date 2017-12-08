/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'medium');

const shouldTheme = (customProperties) => {
  Object.entries(customProperties).forEach(([key, value]) => {
    it(`themed [${key}]`, () => {
      browser.setCSSCustomProps({ [key]: value });
      expect(browser.checkElement('[data-reactroot]')).to.matchReference();
    });
  });
};

describe('Badge', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/tests/badge-tests/default'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });

    shouldTheme({
      '--terra-badge-border-radius': '20px',
      '--terra-badge-display': 'block',
      '--terra-badge-font-weight': 'normal',
      '--terra-badge-line-height': '2em',
      '--terra-badge-padding-bottom': '50px',
      '--terra-badge-padding-top': '50px',
      '--terra-badge-padding-left': '50px',
      '--terra-badge-padding-right': '50px',
      '--terra-badge-text-transform': 'uppercase',
    });
  });

  describe('Intent', () => {
    beforeEach(() => browser.url('/#/tests/badge-tests/intent'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });

    shouldTheme({
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
    });
  });

  describe('Size', () => {
    beforeEach(() => browser.url('/#/tests/badge-tests/size'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });

    shouldTheme({
      '--terra-badge-font-size-tiny': '50px',
      '--terra-badge-font-size-small': '50px',
      '--terra-badge-font-size-medium': '50px',
      '--terra-badge-font-size-large': '50px',
      '--terra-badge-font-size-huge': '50px',
    });
  });

  describe('Icons', () => {
    beforeEach(() => browser.url('/#/tests/badge-tests/icon'));
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });

    shouldTheme({
      '--terra-badge-child-margin': '50px',
    });
  });
});
