Terra.describeViewports('Button', ['medium'], () => {
  describe('Default Button', () => {
    it('is valid', () => {
      browser.url('/raw/tests/cerner-terra-docs/docs/button');
      $('#root').moveTo({ xOffset: 700, yOffset: 700 });
      Terra.validates.element('is valid-default', { selector: '#site' });
    });

    it('checks keyboard focus', () => {
      browser.url('/raw/tests/cerner-terra-docs/docs/button');
      browser.keys('Tab');
      Terra.validates.element('Checks keyboard focus', { selector: '#site' });
      browser.keys('Space');
      Terra.validates.element('Checks keyboard focus - Space', { selector: '#site' });
      browser.keys('Enter');
      Terra.validates.element('Checks keyboard focus - Enter', { selector: '#site' });
    });

    it('checks mouse interactions', () => {
      browser.url('/raw/tests/cerner-terra-docs/docs/button');
      $('#button').moveTo();
      Terra.validates.element('checks mouse interactions - hover', { selector: '#site' });
      browser.performActions([{
        type: 'pointer',
        id: 'pointer1',
        parameters: {
          pointerType: 'mouse',
        },
        actions: [{
          type: 'pointerDown',
          button: 0,
        }],
      }]);

      Terra.validates.element('checks mouse interactions - active', { selector: '#site' });
    });
  });
});
