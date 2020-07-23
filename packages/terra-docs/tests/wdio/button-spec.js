Terra.describeViewports('Button', ['medium'], () => {
  describe('Default Button', () => {
    it('checks accessibility', () => {
      browser.url('/raw/tests/terra-docs/docs/button');
      browser.moveToObject('#root', 700, 700);
      Terra.validates.element('checks accessibility-default', { selector: '#site' });
    });

    it('checks keyboard focus', () => {
      browser.url('/raw/tests/terra-docs/docs/button');
      browser.keys('Tab');
      Terra.validates.element('Checks keyboard focus', { selector: '#site' });
      browser.keys('Space');
      Terra.validates.element('Checks keyboard focus - Space', { selector: '#site' });
      browser.keys('Enter');
      Terra.validates.element('Checks keyboard focus - Enter', { selector: '#site' });
    });

    it('checks mouse interactions', () => {
      browser.url('/raw/tests/terra-docs/docs/button');
      browser.moveToObject('#button');
      Terra.validates.element('checks mouse interactions - hover', { selector: '#site' });
      browser.buttonDown();
      Terra.validates.element('checks mouse interactions - active', { selector: '#site' });
    });
  });
});
