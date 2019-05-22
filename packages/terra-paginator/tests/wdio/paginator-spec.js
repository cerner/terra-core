const viewports = Terra.viewports('tiny', 'medium', 'large');

describe('Paginator', () => {
  describe('Paginator', () => {
    before(() => browser.url('/#/raw/tests/terra-paginator/paginator/paginator'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-paginator-nav-link-color': 'red',
        '--terra-paginator-nav-link-hover-color': '#001F67',
        '--terra-paginator-nav-link-disabled-color': 'purple',
        '--terra-paginator-nav-link-margin-left': '0.5px',
        '--terra-paginator-nav-link-margin-right': '0.5px',
        '--terra-paginator-nav-link-min-width': '2rem',
        '--terra-paginator-nav-link-padding': '2px',
      },
    });
  });

  describe('PaginatorNoPages', () => {
    before(() => browser.url('/#/raw/tests/terra-paginator/paginator/paginator-no-pages'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-paginator-nav-link-color': 'red',
        '--terra-paginator-nav-link-hover-color': '#001F67',
        '--terra-paginator-nav-link-disabled-color': 'purple',
        '--terra-paginator-nav-link-margin-left': '0.5px',
        '--terra-paginator-nav-link-margin-right': '0.5px',
        '--terra-paginator-nav-link-min-width': '2rem',
        '--terra-paginator-nav-link-padding': '2px',
      },
    });
  });

  describe('ProgressivePaginator', () => {
    before(() => browser.url('/#/raw/tests/terra-paginator/paginator/progressive-paginator'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-paginator-nav-link-color': 'red',
        '--terra-paginator-nav-link-hover-color': '#001F67',
        '--terra-paginator-nav-link-disabled-color': 'purple',
        '--terra-paginator-nav-link-margin-left': '0.5px',
        '--terra-paginator-nav-link-margin-right': '0.5px',
        '--terra-paginator-progressive-nav-link-previous-margin-left': '0.5px',
        '--terra-paginator-progressive-nav-link-previous-margin-right': '0.5px',
        '--terra-paginator-progressive-nav-link-next-margin-left': '0.5px',
        '--terra-paginator-progressive-nav-link-next-margin-right': '0.5px',
        '--terra-paginator-nav-link-min-width': '2rem',
        '--terra-paginator-nav-link-padding': '2px',
      },
    });
  });

  describe('Controlled Paginator', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-paginator/paginator/controlled-paginator');
      browser.moveToObject('#root', 0, 900); // move cursor to remove focus styles
    });

    Terra.should.matchScreenshot('0');

    it('should toggle page change when the props are updated', () => {
      browser.click('#button-9');
    });

    Terra.should.matchScreenshot('1');

    it('should toggle the pages when the right arrow is clicked', () => {
      browser.click('[aria-label="next"]');
    });

    Terra.should.matchScreenshot('2');

    it('should toggle the pages when the left arrow is clicked', () => {
      browser.click('[aria-label="previous"]');
    });

    Terra.should.matchScreenshot('3');
  });

  describe('Controlled Progressive Paginator', () => {
    before(() => browser.url('/#/raw/tests/terra-paginator/paginator/controlled-progressive-paginator'));

    Terra.should.matchScreenshot('0');

    it('should toggle page change when the props are updated', () => {
      browser.click('#button-9');
    });

    Terra.should.matchScreenshot('1');

    it('should toggle the pages when the right arrow is clicked', () => {
      browser.click('[aria-label="next"]');
    });

    Terra.should.matchScreenshot('2');

    it('should toggle the pages when the left arrow is clicked', () => {
      browser.click('[aria-label="previous"]');
    });

    Terra.should.matchScreenshot('3');
  });
});
