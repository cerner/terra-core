Terra.describeViewports('SectionHeader', ['huge'], () => {
  it('should display default Section Header', () => {
    browser.url('/raw/tests/terra-section-header/section-header/default-section-header');

    Terra.validates.element('default');
  });

  it('should display long title Section Header', () => {
    browser.url('/raw/tests/terra-section-header/section-header/long-title-section-header');

    Terra.validates.element('long title');
  });

  describe('Long Title Accordion', () => {
    before(() => {
      browser.url('/raw/tests/terra-section-header/section-header/long-title-accordion-section-header');
      browser.moveToObject('#root', 0, 700); // move cursor to remove focus styles
    });

    it('should display long title accordion Section Header', () => {
      Terra.validates.element('default');
    });

    it('should display long title accordion Section Header with hover', () => {
      browser.moveToObject('.accordionContent');

      Terra.validates.element('hover');
    });

    it('should display keyboard focused long title accordion Section Header', () => {
      browser.moveToObject('#root', 0, 700); // move cursor to remove focus styles
      browser.keys('Tab');

      Terra.validates.element('keyboard focus');
    });

    it('should display active long title accordion Section Header', () => {
      browser.moveToObject('.accordionContent');
      browser.buttonDown();

      Terra.validates.element('active');

      browser.buttonUp();
    });
  });

  it('should display closed Section Header', () => {
    browser.url('/raw/tests/terra-section-header/section-header/closed-section-header');
    browser.moveToObject('#root', 0, 700); // move cursor to remove focus styles

    Terra.validates.element('closed');
  });

  it('should display open Section Header', () => {
    browser.url('/raw/tests/terra-section-header/section-header/open-section-header');
    browser.moveToObject('#root', 0, 700); // move cursor to remove focus styles

    Terra.validates.element('open');
  });

  it('should display onClick Section Header', () => {
    browser.url('/raw/tests/terra-section-header/section-header/on-click-section-header');
    browser.moveToObject('#root', 0, 700); // move cursor to remove focus styles

    Terra.validates.element('onClick');
  });

  it('should display transparent Section Header', () => {
    browser.url('/raw/tests/terra-section-header/section-header/transparent-section-header');

    Terra.validates.element('transparent');
  });

  describe('Interactable Transparent Section Header', () => {
    before(() => browser.url('/raw/tests/terra-section-header/section-header/transparent-on-click-section-header'));

    it('should display hovered interactable transparent Section Header', () => {
      browser.moveToObject('[data-id="section-header"]');

      Terra.validates.element('hover');
    });

    it('should display keyboard focused interactable transparent Section Header', () => {
      browser.moveToObject('#root', 0, 700); // move cursor to remove focus styles
      browser.keys('Tab');

      Terra.validates.element('keyboard focus');
    });

    it('should display active interactable transparent Section Header', () => {
      browser.moveToObject('[data-id="section-header"]');
      browser.buttonDown();

      Terra.validates.element('active');
    });
  });
});
