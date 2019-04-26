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

  describe('Size', () => {
    before(() => browser.url('/#/raw/tests/terra-badge/badge/badge-size'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-badge-tiny-font-size': '50px',
        '--terra-badge-small-font-size': '50px',
        '--terra-badge-medium-font-size': '50px',
        '--terra-badge-large-font-size': '50px',
        '--terra-badge-huge-font-size': '50px',
      },
    });
  });

  describe('Icons', () => {
    before(() => browser.url('/#/raw/tests/terra-badge/badge/badge-icon'));
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-badge-child-margin-right': '50px',
    });
  });

  describe('Visually Hidden Text', () => {
    before(() => browser.url('/#/raw/tests/terra-badge/badge/badge-visually-hidden-text'));
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
