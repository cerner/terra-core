Terra.describeViewports('Heading', ['medium'], () => {
  it('should display default Heading', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/heading/default-heading');

    Terra.validates.element('default');
  });

  it('should display Heading with color', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/heading/heading-color');

    Terra.validates.element('color');
  });

  it('should display Heading in italics', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/heading/heading-italics');

    Terra.validates.element('italics');
  });

  it('should display Heading levels', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/heading/heading-levels');

    Terra.validates.element('levels');
  });

  it('should display Heading sizes', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/heading/heading-size');

    Terra.validates.element('sizes');
  });

  it('should display visually hidden Heading', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/heading/heading-visually-hidden');

    Terra.validates.element('visually hidden');
  });

  it('should display Heading with all visual props set', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/heading/heading-visual-props');

    Terra.validates.element('visual props');
  });

  it('should display Heading weight', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/heading/heading-weight');

    Terra.validates.element('weight');
  });
});
