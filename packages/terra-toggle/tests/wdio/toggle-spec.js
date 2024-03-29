Terra.describeViewports('Toggle', ['medium'], () => {
  it('should expand the toggle', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/toggle/default-toggle');
    $('#trigger-toggle').click();
    Terra.validates.element('expanded toggle');
  });

  it('should display a closed toggle', () => {
    $('#trigger-toggle').click();
    Terra.validates.element('closed toggle');
  });

  it('should display an opened toggle', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/toggle/open-toggle');
    $('#root').moveTo({ xOffset: 0, yOffset: 0 });
    Terra.validates.element('opened toggle');
  });

  it('should disable focusable elements when closed', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/toggle/animated-toggle');
    expect($('#toggle').getCSSProperty('visibility').value).toBe('hidden');
  });

  it('should enable focusable elements when opened', () => {
    $('#trigger-toggle').click();
    const element = $('#toggle');
    element.waitForDisplayed();
    expect(element.getCSSProperty('visibility').value).toBe('visible');
  });
});
