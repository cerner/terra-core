/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'medium', 'large');

describe('Paginator', () => {
  describe('Paginator', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-paginator/paginator/paginator'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-paginator-nav-link-foreground-color': 'red',
        '--terra-paginator-nav-link-foreground-color-hover': '#001F67',
        '--terra-paginator-nav-link-foreground-color-disabled': 'purple',
        '--terra-paginator-nav-link-margin-left': '0.5px',
        '--terra-paginator-nav-link-margin-right': '0.5px',
        '--terra-paginator-nav-link-min-width': '2rem',
        '--terra-paginator-nav-link-padding': '2px',
      },
    });
  });

  describe('PaginatorNoPages', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-paginator/paginator/paginator-no-pages'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-paginator-nav-link-foreground-color': 'red',
        '--terra-paginator-nav-link-foreground-color-hover': '#001F67',
        '--terra-paginator-nav-link-foreground-color-disabled': 'purple',
        '--terra-paginator-nav-link-margin-left': '0.5px',
        '--terra-paginator-nav-link-margin-right': '0.5px',
        '--terra-paginator-nav-link-min-width': '2rem',
        '--terra-paginator-nav-link-padding': '2px',
      },
    });
  });

  describe('Paginator Update with Props', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-paginator/paginator/controlled-paginator')

      browser.click('#total-count-1000');
      browser.click('#page-count-50');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('ProgressivePaginator', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-paginator/paginator/progressive-paginator'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-paginator-nav-link-foreground-color': 'red',
        '--terra-paginator-nav-link-foreground-color-hover': '#001F67',
        '--terra-paginator-nav-link-foreground-color-disabled': 'purple',
        '--terra-paginator-nav-link-margin-left': '0.5px',
        '--terra-paginator-nav-link-margin-right': '0.5px',
        '--terra-paginator-nav-link-min-width': '2rem',
        '--terra-paginator-nav-link-padding': '2px',
      },
    });
  });

  describe('Progressive Paginator Update with Props', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-paginator/paginator/controlled-progressive-paginator')

      browser.click('#total-count-1000');
      browser.click('#page-count-50');
    });

    Terra.should.matchScreenshot({ viewports });
  });
});
