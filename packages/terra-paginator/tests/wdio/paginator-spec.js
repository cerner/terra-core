Terra.describeViewports('Paginator', ['tiny', 'medium', 'large'], () => {
  describe('Paginator', () => {
    before(() => browser.url('/#/raw/tests/terra-paginator/paginator/paginator'));

    Terra.it.validatesElement();
  });

  describe('PaginatorNoPages', () => {
    before(() => browser.url('/#/raw/tests/terra-paginator/paginator/paginator-no-pages'));

    Terra.it.validatesElement();
  });

  describe('ProgressivePaginator', () => {
    before(() => browser.url('/#/raw/tests/terra-paginator/paginator/progressive-paginator'));

    Terra.it.validatesElement();
  });
});

Terra.describeViewports('Controlled Paginator', ['large'], () => {
  describe('Controlled Paginator', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-paginator/paginator/controlled-paginator');
      browser.moveToObject('#root', 0, 900); // move cursor to remove focus styles
    });

    Terra.it.validatesElement('0');

    it('should toggle page change when the props are updated', () => {
      browser.click('#button-9');
    });

    Terra.it.matchesScreenshot('1');

    it('should toggle the pages when the right arrow is clicked', () => {
      browser.click('[class*="next"]');
    });

    Terra.it.matchesScreenshot('2');

    it('should toggle the pages when the left arrow is clicked', () => {
      browser.click('[class*="previous"]');
    });

    Terra.it.matchesScreenshot('3');
  });

  describe('Controlled Progressive Paginator', () => {
    before(() => browser.url('/#/raw/tests/terra-paginator/paginator/controlled-progressive-paginator'));

    Terra.it.validatesElement('0');

    it('should toggle page change when the props are updated', () => {
      browser.click('#button-9');
    });

    Terra.it.matchesScreenshot('1');

    it('should toggle the pages when the right arrow is clicked', () => {
      browser.click('[class*="next"]');
    });

    Terra.it.matchesScreenshot('2');

    it('should toggle the pages when the left arrow is clicked', () => {
      browser.click('[class*="previous"]');
    });

    Terra.it.matchesScreenshot('3');
  });
});
