Terra.describeViewports('Text', ['huge'], () => {
  it('should display default text', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/text/default-text');
    Terra.validates.element('default text');
  });

  it('should display text with Color', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/text/text-color');
    Terra.validates.element('color text');
  });

  it('should display text with italics', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/text/text-italics');
    Terra.validates.element('italic text');
  });

  it('should display font size group 1', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/text/text-font-size-1');
    Terra.validates.element('font size group 1');
  });

  it('should display font size group 2', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/text/text-font-size-2');
    Terra.validates.element('font size group 2');
  });

  it('should display font size group 3', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/text/text-font-size-3');
    Terra.validates.element('font size group 3');
  });

  it('should display visually hidden text', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/text/text-visually-hidden');
    Terra.validates.element('visually hidden text');
  });

  it('should display with visual props', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/text/text-visual-props');
    Terra.validates.element('visual props');
  });

  it('should display with weight', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/text/text-weight');
    Terra.validates.element('weight text');
  });

  it('should calculate line-height on text font size when parent has a different font size.', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/text/text-line-height');
    Terra.validates.element('calculate line height');
  });

  it('should display with word wrapped', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/text/text-word-wrapped');
    Terra.validates.element('word wrapped text');
  });
});
