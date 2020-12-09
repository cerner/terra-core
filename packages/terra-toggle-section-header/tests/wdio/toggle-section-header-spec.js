Terra.describeViewports('ToggleSectionHeader', ['huge'], () => {
  describe('Default', () => {
    it('displays a closed toggle', () => {
      browser.url('/raw/tests/terra-toggle-section-header/toggle-section-header/default-toggle-section-header');
      browser.moveToObject('#root'); // move to prevent hover styles
      Terra.validates.element('closed');
    });

    it('validates hover styles', () => {
      browser.moveToObject('#root', 0, 0); // move to cause hover styles
      Terra.validates.element('hover');
    });

    it('opens the toggle', () => {
      browser.leftClick('#root', 0, 0);
      Terra.validates.element('open');
    });
  });

  describe('Transparent', () => {
    it('displays a closed toggle', () => {
      browser.url('/raw/tests/terra-toggle-section-header/toggle-section-header/transparent-toggle-section-header');
      Terra.validates.element('closed');
    });

    it('validates hover styles', () => {
      browser.moveToObject('#root', 0, 0); // move to cause hover styles
      Terra.validates.element('hover');
    });

    it('opens the toggle', () => {
      browser.leftClick('#root', 0, 0);
      Terra.validates.element('open');
    });
  });

  describe('Programmatic Toggle', () => {
    it('displays a closed toggle', () => {
      browser.url('/raw/tests/terra-toggle-section-header/toggle-section-header/programmatic-toggle');
      Terra.validates.element('closed');
    });

    it('Toggles on button click', () => {
      browser.click('#toggle');
      Terra.validates.element('programmatically toggles the toggle-section-header');
    });
  });
});
