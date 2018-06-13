/* global browser, Terra */

describe('List with Sections', () => {
  describe('Single Selectable List with Sections', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-list/list/single-select-list/single-select-sections'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-list-section-header-padding-end': '100px',
        '--terra-list-section-header-padding-start': '100px',
        '--terra-list-section-header-background': 'blue',
        '--terra-list-section-header-border-bottom': '10px dashed blue',
        '--terra-list-section-header-border-left': '10px dashed blue',
        '--terra-list-section-header-border-right': '10px dashed blue',
        '--terra-list-section-header-border-top': '10px dashed blue',
        '--terra-list-section-header-box-shadow': 'inset 5px 5px 5px blue',
        '--terra-list-section-header-color': 'blue',
        '--terra-list-section-header-line-height': '50px',
        '--terra-list-section-header-padding-bottom': '100px',
        '--terra-list-section-header-padding-top': '100px',
        '--terra-list-section-header-font-weight': '700',
        '--terra-list-section-header-text-transform': 'uppercase',
        '--terra-list-section-header-font-size': '10rem',
      },
    });
  });

  describe('Multi Selectable List with Sections', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-list/list/multi-select-list/multi-select-sections'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();

    Terra.should.themeCombinationOfCustomProperties({
          testName: 'themed',
          properties: {
            '--terra-list-section-header-padding-end': '100px',
            '--terra-list-section-header-padding-start': '100px',
            '--terra-list-section-header-background': 'blue',
            '--terra-list-section-header-border-bottom': '10px dashed blue',
            '--terra-list-section-header-border-left': '10px dashed blue',
            '--terra-list-section-header-border-right': '10px dashed blue',
            '--terra-list-section-header-border-top': '10px dashed blue',
            '--terra-list-section-header-box-shadow': 'inset 5px 5px 5px blue',
            '--terra-list-section-header-color': 'blue',
            '--terra-list-section-header-line-height': '50px',
            '--terra-list-section-header-padding-bottom': '100px',
            '--terra-list-section-header-padding-top': '100px',
            '--terra-list-section-header-font-weight': '700',
            '--terra-list-section-header-text-transform': 'uppercase',
            '--terra-list-section-header-font-size': '10rem',
        },
      });
    });
});
