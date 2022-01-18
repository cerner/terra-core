Terra.describeViewports('ToggleSectionHeader', ['huge'], () => {
  describe('Default', () => {
    it('should display a closed toggle', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/toggle-section-header/default-toggle-section-header');
      $('#root').moveTo(); // move to prevent hover styles
      Terra.validates.element('closed toggle');
    });

    it('should validate hover styles', () => {
      $('#root').moveTo({ xOffset: 0, yOffset: 0 }); // move to cause hover styles
      Terra.validates.element('hover toggle');
    });

    it('should open the toggle', () => {
      $('#root').click({ x: 0, y: 0 });
      Terra.validates.element('opened toggle');
    });
  });

  describe('Transparent', () => {
    it('should display a closed toggle', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/toggle-section-header/transparent-toggle-section-header');
      Terra.validates.element('closed transparent toggle');
    });

    it('should validate hover styles', () => {
      $('#root').moveTo({ xOffset: 0, yOffset: 0 }); // move to cause hover styles
      Terra.validates.element('hover transparent toggle');
    });

    it('should open the toggle', () => {
      $('#root').click({ x: 0, y: 0 });
      Terra.validates.element('opened transparent toggle');
    });
  });

  describe('Programmatic Toggle', () => {
    it('should display a closed toggle', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/toggle-section-header/programmatic-toggle');
      Terra.validates.element('closed programmatic toggle');
    });

    it('should toggle on button click', () => {
      $('#toggle').click();
      Terra.validates.element('programmatically toggles toggle-section-header');
    });
  });
});
