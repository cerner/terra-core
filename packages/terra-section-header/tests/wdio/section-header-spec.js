describe('SectionHeader', () => {
  describe('Default Section Header', () => {
    before(() => browser.url('/#/raw/tests/terra-section-header/section-header/default-section-header'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Long Title Default Section Header', () => {
    before(() => browser.url('/#/raw/tests/terra-section-header/section-header/long-title-section-header'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Long Title Accordion Section Header', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-section-header/section-header/long-title-accordion-section-header');
      browser.moveToObject('#root', 0, 900); // move cursor to remove focus styles
    });

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();

    describe('Hovered - Long Title Accordion Section Header', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-section-header/section-header/long-title-accordion-section-header');
        browser.moveToObject('.accordionContent');
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot();
    });

    describe('Keyboard Focus - Long Title Accordion Section Header', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-section-header/section-header/long-title-accordion-section-header');
        browser.moveToObject('#root', 0, 900); // move cursor to remove focus styles
        browser.keys('Tab');
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot();
    });

    describe('Active - Long Title Accordion Section Header', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-section-header/section-header/long-title-accordion-section-header');
        browser.moveToObject('.accordionContent');
        browser.buttonDown();
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot();

      after(() => browser.buttonUp());
    });
  });

  describe('Closed Section Header', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-section-header/section-header/closed-section-header');
      browser.moveToObject('#root', 0, 900); // move cursor to remove focus styles
    });

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Open Section Header', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-section-header/section-header/open-section-header');
      browser.moveToObject('#root', 0, 900); // move cursor to remove focus styles
    });

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('On Click Section Header', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-section-header/section-header/on-click-section-header');
      browser.moveToObject('#root', 0, 900); // move cursor to remove focus styles
    });

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Transparent Section Header', () => {
    before(() => browser.url('/#/raw/tests/terra-section-header/section-header/transparent-section-header'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Interactable Transparent Section Header', () => {
    before(() => browser.url('/#/raw/tests/terra-section-header/section-header/transparent-on-click-section-header'));

    describe('Hovered - Interactable Transparent Section Header', () => {
      it('hovers section header', () => {
        browser.moveToObject('[data-id="section-header"]');
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot();
    });

    describe('Keyboard Focus - Interactable Transparent Section Header', () => {
      it('focuses section header', () => {
        browser.moveToObject('#root', 0, 900); // move cursor to remove focus styles
        browser.keys('Tab');
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot();
    });

    describe('Active - Interactable Transparent Section Header', () => {
      it('clicks section header', () => {
        browser.moveToObject('[data-id="section-header"]');
        browser.buttonDown();
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot();
    });
  });
});
