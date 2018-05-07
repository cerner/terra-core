/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'medium', 'large');

describe('Paginator', () => {
  describe('Paginator', () => {
    beforeEach(() => browser.url('/#/raw/tests/paginator/paginator'));

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
    beforeEach(() => browser.url('/#/raw/tests/paginator/paginator-no-pages'));

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

  describe('ProgressivePaginator', () => {
    beforeEach(() => browser.url('/#/raw/tests/paginator/progressive-paginator'));

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
});
