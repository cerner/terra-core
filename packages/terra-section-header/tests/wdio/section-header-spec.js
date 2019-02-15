describe('SectionHeader', () => {
  describe('Default Section Header', () => {
    before(() => browser.url('/#/raw/tests/terra-section-header/section-header/default-section-header'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-section-header-padding-end': '100px',
        '--terra-section-header-padding-start': '100px',
        '--terra-section-header-background': 'blue',
        '--terra-section-header-border-bottom': '10px dashed blue',
        '--terra-section-header-border-left': '10px dashed blue',
        '--terra-section-header-border-right': '10px dashed blue',
        '--terra-section-header-border-top': '10px dashed blue',
        '--terra-section-header-box-shadow': 'inset 5px 5px 5px blue',
        '--terra-section-header-color': 'blue',
        '--terra-section-header-line-height': '50px',
        '--terra-section-header-padding-bottom': '100px',
        '--terra-section-header-padding-top': '100px',
        '--terra-section-header-font-weight': '700',
        '--terra-section-header-text-transform': 'uppercase',
        '--terra-section-header-font-size': '10rem',
      },
    });
  });

  describe('Long Title Default Section Header', () => {
    before(() => browser.url('/#/raw/tests/terra-section-header/section-header/long-title-section-header'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Long Title Accordion Section Header', () => {
    before(() => browser.url('/#/raw/tests/terra-section-header/section-header/long-title-accordion-section-header'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-section-header-accordion-padding-start': '100px',
        '--terra-section-header-accordion-icon-margin-start': '100px',
        '--terra-section-header-accordion-icon-margin-end': '100px',
        '--terra-section-header-accordion-icon-padding-start': '100px',
        '--terra-section-header-accordion-icon-padding-end': '100px',
        '--terra-section-header-accordion-icon-padding-bottom': '100px',
        '--terra-section-header-accordion-icon-padding-top': '100px',
        '--terra-section-header-accordion-icon-background': 'rgb(0, 0, 100)',
      },
    });

    describe('Hovered - Long Title Accordion Section Header', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-section-header/section-header/long-title-accordion-section-header');
        browser.moveToObject('.accordionContent');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-section-header-hover-background': 'red',
          '--terra-section-header-hover-border-bottom': '10px dashed red',
          '--terra-section-header-hover-border-left': '10px dashed red',
          '--terra-section-header-hover-border-right': '10px dashed red',
          '--terra-section-header-hover-border-top': '10px dashed red',
          '--terra-section-header-hover-box-shadow': 'inset 5px 5px 5px red',
          '--terra-section-header-hover-color': 'red',
        },
      });
    });

    describe('Keyboard Focus - Long Title Accordion Section Header', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-section-header/section-header/long-title-accordion-section-header');
        browser.keys('Tab');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-section-header-focus-background': 'green',
          '--terra-section-header-focus-border-bottom': '10px dashed green',
          '--terra-section-header-focus-border-left': '10px dashed green',
          '--terra-section-header-focus-border-right': '10px dashed green',
          '--terra-section-header-focus-border-top': '10px dashed green',
          '--terra-section-header-focus-box-shadow': 'inset 5px 5px 5px green',
          '--terra-section-header-focus-color': 'green',
        },
      });
    });

    describe('Active - Long Title Accordion Section Header', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-section-header/section-header/long-title-accordion-section-header');
        browser.moveToObject('.accordionContent');
        browser.buttonDown();
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-section-header-active-background': 'purple',
          '--terra-section-header-active-border-bottom': '10px dashed purple',
          '--terra-section-header-active-border-left': '10px dashed purple',
          '--terra-section-header-active-border-right': '10px dashed purple',
          '--terra-section-header-active-border-top': '10px dashed purple',
          '--terra-section-header-active-box-shadow': 'inset 5px 5px 5px purple',
          '--terra-section-header-active-color': 'purple',
        },
      });
    });
  });

  describe('Closed Section Header', () => {
    before(() => browser.url('/#/raw/tests/terra-section-header/section-header/closed-section-header'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Open Section Header', () => {
    before(() => browser.url('/#/raw/tests/terra-section-header/section-header/open-section-header'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('On Click Section Header', () => {
    before(() => browser.url('/#/raw/tests/terra-section-header/section-header/on-click-section-header'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Transparent Section Header', () => {
    before(() => browser.url('/#/raw/tests/terra-section-header/section-header/transparent-section-header'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();

    describe('Hovered - Interactable Transparent Section Header', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-section-header/section-header/transparent-on-click-section-header');
        browser.moveToObject('[data-id="section-header"]');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-section-header-transparent-hover-background': 'red',
          '--terra-section-header-transparent-hover-border-bottom': '10px dashed red',
          '--terra-section-header-transparent-hover-border-left': '10px dashed red',
          '--terra-section-header-transparent-hover-border-right': '10px dashed red',
          '--terra-section-header-transparent-hover-border-top': '10px dashed red',
          '--terra-section-header-transparent-hover-box-shadow': 'inset 5px 5px 5px red',
          '--terra-section-header-transparent-hover-color': 'red',
        },
      });
    });

    describe('Keyboard Focus - Interactable Transparent Section Header', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-section-header/section-header/transparent-on-click-section-header');
        browser.keys('Tab');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-section-header-transparent-focus-background': 'green',
          '--terra-section-header-transparent-focus-border-bottom': '10px dashed green',
          '--terra-section-header-transparent-focus-border-left': '10px dashed green',
          '--terra-section-header-transparent-focus-border-right': '10px dashed green',
          '--terra-section-header-transparent-focus-border-top': '10px dashed green',
          '--terra-section-header-transparent-focus-box-shadow': 'inset 5px 5px 5px green',
          '--terra-section-header-transparent-focus-color': 'green',
        },
      });
    });

    describe('Active - Interactable Transparent Section Header', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-section-header/section-header/transparent-on-click-section-header');
        browser.moveToObject('[data-id="section-header"]');
        browser.buttonDown();
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-section-header-transparent-active-background': 'purple',
          '--terra-section-header-transparent-active-border-bottom': '10px dashed purple',
          '--terra-section-header-transparent-active-border-left': '10px dashed purple',
          '--terra-section-header-transparent-active-border-right': '10px dashed purple',
          '--terra-section-header-transparent-active-border-top': '10px dashed purple',
          '--terra-section-header-transparent-active-box-shadow': 'inset 5px 5px 5px purple',
          '--terra-section-header-transparent-active-color': 'purple',
        },
      });
    });
  });
});
