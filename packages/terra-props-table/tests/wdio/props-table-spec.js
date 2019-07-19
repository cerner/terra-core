Terra.describeViewports('Props Table', ['medium'], () => {
  describe('Default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-props-table/props-table-test/mock-props-table');
    });

    Terra.it.validatesElement('should display a string prop', { selector: '#PropsTable > tbody > tr:nth-child(1)' });

    Terra.it.matchesScreenshot('should display a number prop', { selector: '#PropsTable > tbody > tr:nth-child(2)' });

    Terra.it.matchesScreenshot('should display a boolean prop', { selector: '#PropsTable > tbody > tr:nth-child(3)' });

    Terra.it.matchesScreenshot('should display an element prop', { selector: '#PropsTable > tbody > tr:nth-child(4)' });

    // Need to manually scroll down so screenshots of the remaining rows can be taken
    it('needs to scroll down', () => {
      browser.click('td=arrayOfShapes');
    });

    Terra.it.matchesScreenshot('should display a node prop', { selector: '#PropsTable > tbody > tr:nth-child(5)' });

    Terra.it.matchesScreenshot('should display an array prop', { selector: '#PropsTable > tbody > tr:nth-child(6)' });

    Terra.it.matchesScreenshot('should display a default arrayOf prop', { selector: '#PropsTable > tbody > tr:nth-child(7)' });

    it('needs to scroll down even more', () => {
      browser.click('[data-terra-bottom-scroll-marker]');
    });

    Terra.it.matchesScreenshot('should display an arrayOf(shapes) prop', { selector: '#PropsTable > tbody > tr:nth-child(8)' });

    Terra.it.matchesScreenshot('should display a oneOfType prop', { selector: '#PropsTable > tbody > tr:nth-child(9)' });

    Terra.it.matchesScreenshot('should display a shape prop', { selector: '#PropsTable > tbody > tr:nth-child(10)' });
  });

  describe('Private Props', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-props-table/props-table-test/mock-private-props-table');
    });

    Terra.it.validatesElement('should not render private prop information', { selector: '#PrivatePropsTable' });
  });

  describe('With Title', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-props-table/props-table-test/mock-props-table-with-title');
    });

    Terra.it.validatesElement('should display the title', { selector: '[class*="props-table-markdown"] > h2' });
  });
});
