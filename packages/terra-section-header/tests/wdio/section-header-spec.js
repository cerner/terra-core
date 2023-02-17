Terra.describeViewports('SectionHeader', ['huge'], () => {
  it('should display default Section Header', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/section-header/default-section-header');

    Terra.validates.element('default');
  });

  it('should display long title Section Header', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/section-header/long-title-section-header');

    Terra.validates.element('default long title');
  });

  describe('Long Title Accordion', () => {
    before(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/section-header/long-title-accordion-section-header');
      $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // move cursor to remove focus styles
    });

    it('should display long title accordion Section Header', () => {
      Terra.validates.element('long title accordion default');
    });

    it('should display long title accordion Section Header with hover', () => {
      $('.accordionContent').moveTo();

      Terra.validates.element('long title accordion hover');
    });

    it('should display keyboard focused long title accordion Section Header', () => {
      $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // move cursor to remove focus styles
      browser.keys('Tab');

      Terra.validates.element('long title accordion keyboard focus');
    });

    it('should display active long title accordion Section Header', () => {
      $('.accordionContent').moveTo();
      browser.performActions([{
        type: 'pointer',
        id: 'pointer1',
        parameters: {
          pointerType: 'mouse',
        },
        actions: [{
          type: 'pointerDown',
          button: 0,
        }],
      }]);

      Terra.validates.element('long title accordion active');

      browser.performActions([{
        type: 'pointer',
        id: 'pointer1',
        parameters: {
          pointerType: 'mouse',
        },
        actions: [{
          type: 'pointerUp',
          button: 0,
        }],
      }]);
    });
  });

  it('should display closed Section Header', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/section-header/closed-section-header');
    $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // move cursor to remove focus styles

    Terra.validates.element('closed');
  });

  it('should display open Section Header', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/section-header/open-section-header');
    $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // move cursor to remove focus styles

    Terra.validates.element('open');
  });

  it('should display onClick Section Header', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/section-header/on-click-section-header');
    $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // move cursor to remove focus styles

    Terra.validates.element('onClick');
  });

  it('should display transparent Section Header', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/section-header/transparent-section-header');

    Terra.validates.element('transparent');
  });

  describe('Interactable Transparent Section Header', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/section-header/transparent-on-click-section-header'));

    it('should display hovered interactable transparent Section Header', () => {
      $('[data-id="section-header"]').moveTo();

      Terra.validates.element('interactable transparent hover');
    });

    it('should display keyboard focused interactable transparent Section Header', () => {
      $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // move cursor to remove focus styles
      browser.keys('Tab');

      Terra.validates.element('interactable transparent keyboard focus');
    });

    it('should display active interactable transparent Section Header', () => {
      $('[data-id="section-header"]').moveTo();
      browser.performActions([{
        type: 'pointer',
        id: 'pointer1',
        parameters: {
          pointerType: 'mouse',
        },
        actions: [{
          type: 'pointerDown',
          button: 0,
        }],
      }]);

      Terra.validates.element('interactable transparent active');
    });
  });
});
