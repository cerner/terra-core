describe('SectionHeader', () => {
  describe('Default Section Header', () => {
    before(() => browser.url('/#/raw/tests/terra-section-header/section-header/default-section-header'));

    Terra.it.validatesElement();
  });

  describe('Long Title Default Section Header', () => {
    before(() => browser.url('/#/raw/tests/terra-section-header/section-header/long-title-section-header'));

    Terra.it.validatesElement();
  });

  describe('Long Title Accordion Section Header', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-section-header/section-header/long-title-accordion-section-header');
      browser.moveToObject('#root', 0, 900); // move cursor to remove focus styles
    });

    Terra.it.validatesElement();

    describe('Hovered - Long Title Accordion Section Header', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-section-header/section-header/long-title-accordion-section-header');
        browser.moveToObject('.accordionContent');
      });

      Terra.it.validatesElement();
    });

    describe('Keyboard Focus - Long Title Accordion Section Header', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-section-header/section-header/long-title-accordion-section-header');
        browser.moveToObject('#root', 0, 900); // move cursor to remove focus styles
        browser.keys('Tab');
      });

      Terra.it.validatesElement();
    });

    describe('Active - Long Title Accordion Section Header', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-section-header/section-header/long-title-accordion-section-header');
        browser.moveToObject('.accordionContent');
        browser.buttonDown();
      });

      Terra.it.validatesElement();

      after(() => browser.buttonUp());
    });
  });

  describe('Closed Section Header', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-section-header/section-header/closed-section-header');
      browser.moveToObject('#root', 0, 900); // move cursor to remove focus styles
    });

    Terra.it.validatesElement();
  });

  describe('Open Section Header', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-section-header/section-header/open-section-header');
      browser.moveToObject('#root', 0, 900); // move cursor to remove focus styles
    });

    Terra.it.validatesElement();
  });

  describe('On Click Section Header', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-section-header/section-header/on-click-section-header');
      browser.moveToObject('#root', 0, 900); // move cursor to remove focus styles
    });

    Terra.it.validatesElement();
  });

  describe('Transparent Section Header', () => {
    before(() => browser.url('/#/raw/tests/terra-section-header/section-header/transparent-section-header'));

    Terra.it.validatesElement();
  });

  describe('Interactable Transparent Section Header', () => {
    before(() => browser.url('/#/raw/tests/terra-section-header/section-header/transparent-on-click-section-header'));

    describe('Hovered - Interactable Transparent Section Header', () => {
      it('hovers section header', () => {
        browser.moveToObject('[data-id="section-header"]');
      });

      Terra.it.validatesElement();
    });

    describe('Keyboard Focus - Interactable Transparent Section Header', () => {
      it('focuses section header', () => {
        browser.moveToObject('#root', 0, 900); // move cursor to remove focus styles
        browser.keys('Tab');
      });

      Terra.it.validatesElement();
    });

    describe('Active - Interactable Transparent Section Header', () => {
      it('clicks section header', () => {
        browser.moveToObject('[data-id="section-header"]');
        browser.buttonDown();
      });

      Terra.it.validatesElement();
    });
  });
});
