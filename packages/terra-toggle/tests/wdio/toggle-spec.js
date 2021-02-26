Terra.describeViewports('Toggle', ['medium'], () => {
  it('should display a closed toggle', () => {
    browser.url('/raw/tests/terra-toggle/toggle/default-toggle');
    Terra.validates.element('closed toggle');
  });

  it('should expand the toggle', () => {
    $('#trigger-toggle').click();
    Terra.validates.element('expanded toggle');
  });

  it('should display an opened toggle', () => {
    browser.url('/raw/tests/terra-toggle/toggle/open-toggle');
    $('#root').moveTo({ xOffset: 0, yOffset: 0 });
    Terra.validates.element('opened toggle');
  });

  it('should disable focusable elements when closed', () => {
    browser.url('/raw/tests/terra-toggle/toggle/animated-toggle');
    expect($('#toggle').getCSSProperty('visibility').value).toBe('hidden');
  });

  it('should enable focusable elements when opened', () => {
    $('#trigger-toggle').click();
    const element = $('#toggle');
    element.waitForDisplayed();
    expect(element.getCSSProperty('visibility').value).toBe('visible');
  });
});
