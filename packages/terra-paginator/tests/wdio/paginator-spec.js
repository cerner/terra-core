Terra.describeViewports('Paginator', ['tiny', 'medium', 'large'], () => {
  describe('Paginator', () => {
    it('default', () => {
      browser.url('/raw/tests/terra-paginator/paginator/paginator');
      Terra.validates.element('default paginator');
    });
  });

  describe('PaginatorNoPages', () => {
    it('default', () => {
      browser.url('/raw/tests/terra-paginator/paginator/paginator-no-pages');
      Terra.validates.element('no pages');
    });
  });

  describe('ProgressivePaginator', () => {
    it('default', () => {
      browser.url('/raw/tests/terra-paginator/paginator/progressive-paginator');
      Terra.validates.element('progressive paginator');
    });
  });
});

Terra.describeViewports('Controlled Paginator', ['large'], () => {
  describe('Controlled Paginator', () => {
    it('displays initial selected page', () => {
      browser.url('/raw/tests/terra-paginator/paginator/controlled-paginator');
      $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // move cursor to remove focus styles
      Terra.validates.element('controlled 0');
    });

    it('should toggle page change when the props are updated', () => {
      $('#button-9').click();
      Terra.validates.element('controlled 1');
    });

    it('should toggle the pages when the right arrow is clicked', () => {
      $('[class*="next"]').click();
      Terra.validates.element('controlled 2');
    });

    it('should toggle the pages when the left arrow is clicked', () => {
      $('[class*="previous"]').click();
      Terra.validates.element('controlled 3');
    });
  });

  describe('Controlled Paginator without Total count', () => {
    it('displays initial selected page', () => {
      browser.url('/raw/tests/terra-paginator/paginator/controlled-paginator-no-pages');
      $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // move cursor to remove focus styles
      Terra.validates.element('controlled total count 0');
    });

    it('should toggle page change when the props are updated', () => {
      $('#button-9').click();
      Terra.validates.element('controlled total count 1');
    });

    it('should toggle the pages when the right arrow is clicked', () => {
      $('[class*="next"]').click();
      Terra.validates.element('controlled total count 2');
    });

    it('should toggle the pages when the left arrow is clicked', () => {
      $('[class*="previous"]').click();
      Terra.validates.element('controlled total count 3');
    });
  });

  describe('Controlled Progressive Paginator', () => {
    it('displays initial selected page', () => {
      browser.url('/raw/tests/terra-paginator/paginator/controlled-progressive-paginator');
      Terra.validates.element('controlled progressive 0');
    });

    it('should toggle page change when the props are updated', () => {
      $('#button-9').click();
      Terra.validates.element('controlled progressive 1');
    });

    it('should toggle the pages when the right arrow is clicked', () => {
      $('[class*="next"]').click();
      Terra.validates.element('controlled progressive 2');
    });

    it('should toggle the pages when the left arrow is clicked', () => {
      $('[class*="previous"]').click();
      Terra.validates.element('controlled progressive 3');
    });
  });

  describe('Controlled Progressive Paginator without total count', () => {
    it('displays the initial selected page', () => {
      browser.url('/raw/tests/terra-paginator/paginator/controlled-progressive-paginator-without-total-count');
      Terra.validates.element('controlled progressive no total count 0');
    });

    it('should toggle page change when the props are updated', () => {
      $('#button-9').click();
      Terra.validates.element('controlled progressive no total count 1');
    });

    it('should toggle the pages when the right arrow is clicked', () => {
      $('[class*="next"]').click();
      Terra.validates.element('controlled progressive no total count 2');
    });

    it('should toggle the pages when the left arrow is clicked', () => {
      $('[class*="previous"]').click();
      Terra.validates.element('controlled progressive no total count 3');
    });
  });

  describe('Progressive paginator without total count', () => {
    it('renders without total count', () => {
      browser.url('/raw/tests/terra-paginator/paginator/progressive-paginator-without-total-count');
      Terra.validates.element('progressive without total count');
    });
  });

  describe('Paginator without item count', () => {
    it('renders without item count', () => {
      browser.url('/raw/tests/terra-paginator/paginator/paginator-without-item-count');
      Terra.validates.element('progressive without total item count');
    });
  });

  describe('Paginator Button should not retain focused state once disabled using keyboard navigation', () => {
    before(() => browser.url('/raw/tests/terra-paginator/paginator/controlled-progressive-paginator'));

    it('should display previous button with no focus', () => {
      browser.keys(['Tab', 'Tab', 'Tab', 'Tab', 'Enter']); // This is to navigate to next button and press enter.
      browser.keys(['Shift', 'Tab', 'Shift', 'Enter']); // This is to navigate to previous button and press enter.
      browser.keys(['Tab', 'Enter']); // This is to navigate back to next button and press enter.
      Terra.validates.element('previous button is not focused');
    });
  });

  describe('Progressive Paginator with custom page label', () => {
    before(() => browser.url('/raw/tests/terra-paginator/paginator/progressive-paginator-with-custom-label'));

    it('should display progressive paginator with custom page label without total count', () => {
      Terra.validates.element('custom page label without total count');
    });

    it('should display progressive paginator with custom page label with total count', () => {
      $('#total-count-button').click();
      Terra.validates.element('custom page label with total count');
    });
  });
});
