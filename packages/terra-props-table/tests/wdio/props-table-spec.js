const viewports = Terra.viewports('medium', 'large');

describe('Props Table', () => {
  describe('Default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-props-table/props-table-test/mock-props-table');
      browser.setViewportSize(Terra.viewports('medium')[0]);
    });

    Terra.should.matchScreenshot('should display a string prop', { selector: '#PropsTable > tbody > tr:nth-child(1)' });

    Terra.should.matchScreenshot('should display a number prop', { selector: '#PropsTable > tbody > tr:nth-child(2)' });

    Terra.should.matchScreenshot('should display a boolean prop', { selector: '#PropsTable > tbody > tr:nth-child(3)' });

    Terra.should.matchScreenshot('should display an element prop', { selector: '#PropsTable > tbody > tr:nth-child(4)' });

    // Need to manually scroll down so screenshots of the remaining rows can be taken
    it('needs to scroll down', () => {
      browser.click('td=arrayOfShapes');
    });

    Terra.should.matchScreenshot('should display a node prop', { selector: '#PropsTable > tbody > tr:nth-child(5)' });

    Terra.should.matchScreenshot('should display an array prop', { selector: '#PropsTable > tbody > tr:nth-child(6)' });

    Terra.should.matchScreenshot('should display a default arrayOf prop', { selector: '#PropsTable > tbody > tr:nth-child(7)' });

    it('needs to scroll down even more', () => {
      browser.click('[data-terra-bottom-scroll-marker]');
    });

    Terra.should.matchScreenshot('should display an arrayOf(shapes) prop', { selector: '#PropsTable > tbody > tr:nth-child(8)' });

    Terra.should.matchScreenshot('should display a oneOfType prop', { selector: '#PropsTable > tbody > tr:nth-child(9)' });

    Terra.should.matchScreenshot('should display a shape prop', { selector: '#PropsTable > tbody > tr:nth-child(10)' });

    Terra.should.beAccessible({ viewports });
  });

  describe('Private Props', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-props-table/props-table-test/mock-private-props-table');
      browser.setViewportSize(Terra.viewports('medium')[0]);
    });

    Terra.should.matchScreenshot('should not render private prop information', { selector: '#PrivatePropsTable' });
  });

  describe('With Title', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-props-table/props-table-test/mock-props-table-with-title');
      browser.setViewportSize(Terra.viewports('medium')[0]);
    });

    Terra.should.matchScreenshot('should display the title', { selector: '[class*="props-table-markdown"] > h2' });

    Terra.should.beAccessible({ viewports });
  });
});
