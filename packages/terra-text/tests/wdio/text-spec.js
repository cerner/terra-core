Terra.describeViewports('Text', ['huge'], () => {
  it('displays Default text', () => {
    browser.url('/raw/tests/terra-text/text/default-text');
    Terra.validates.element('default');
  });

  it('displays text with Color', () => {
    browser.url('/raw/tests/terra-text/text/text-color');
    Terra.validates.element('color');
  });

  it('displays text with Italics', () => {
    browser.url('/raw/tests/terra-text/text/text-italics');
    Terra.validates.element('italics');
  });

  it('displays Font Size Group 1', () => {
    browser.url('/raw/tests/terra-text/text/text-font-size-1');
    Terra.validates.element('font size group 1');
  });

  it('Font Size Group 2', () => {
    browser.url('/raw/tests/terra-text/text/text-font-size-2');
    Terra.validates.element('font size group 2');
  });

  it('displays Font Size Group 3', () => {
    browser.url('/raw/tests/terra-text/text/text-font-size-3');
    Terra.validates.element('font size group 3');
  });

  it('displays Visually Hidden text', () => {
    browser.url('/raw/tests/terra-text/text/text-visually-hidden');
    Terra.validates.element('visually hidden');
  });

  it('displays with Visual Props', () => {
    browser.url('/raw/tests/terra-text/text/text-visual-props');
    Terra.validates.element('visual props');
  });

  it('displays with Weight', () => {
    browser.url('/raw/tests/terra-text/text/text-weight');
    Terra.validates.element('weight');
  });

  it('should calculate Line-height on text font size when parent has a different font size.', () => {
    browser.url('/raw/tests/terra-text/text/text-line-height');
    Terra.validates.element('calculate line height');
  });

  it('displays with Word Wrapped', () => {
    browser.url('/raw/tests/terra-text/text/text-word-wrapped');
    Terra.validates.element('word wrapped');
  });
});
