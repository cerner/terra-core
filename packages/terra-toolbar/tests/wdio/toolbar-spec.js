Terra.describeViewports('Toolbar', ['tiny'], () => {
  it('displays a default toolbar', () => {
    browser.url('/raw/tests/terra-toolbar/toolbar/default-toolbar');
    Terra.validates.element('default');
  });

  it('displays a start aligned toolbar', () => {
    browser.url('/raw/tests/terra-toolbar/toolbar/start-align-toolbar');
    Terra.validates.element('start align');
  });

  it('displays a end aligned toolbar', () => {
    browser.url('/raw/tests/terra-toolbar/toolbar/end-align-toolbar');
    Terra.validates.element('end align');
  });

  it('displays a center aligned toolbar', () => {
    browser.url('/raw/tests/terra-toolbar/toolbar/center-align-toolbar');
    Terra.validates.element('center align');
  });

  describe('Conditional Toolbar', () => {
    it('displays two buttons', () => {
      browser.url('/raw/tests/terra-toolbar/toolbar/conditional-toolbar');
      Terra.validates.element('both buttons');
    });
    it('displays one buttons', () => {
      $('#button-2').click();
      Terra.validates.element('conditional render');
    });
  });
});

Terra.describeViewports('Toolbar', ['tiny', 'medium', 'large'], () => {
  it('displays a toolbar with Long Content', () => {
    browser.url('/raw/tests/terra-toolbar/toolbar/long-button-toolbar');
    Terra.validates.element('long content');
  });
});
