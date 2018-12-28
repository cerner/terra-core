const viewports = Terra.viewports('tiny');

describe('Select Field', () => {
  describe('should select an option by click', () => {
    before(() => browser.url('/#/raw/tests/terra-form-select/form-select/select-field'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });

    it('should open the dropdown by clicking the toggle', () => {
      browser.click('[id=select-field]:last-child');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '[id=root]' });

    it('should select the first option', () => {
      browser.click('[id=terra-select-option-xSmall]');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('selected-option', { viewports });
  });

  describe('should select an option by pressing enter', () => {
    before(() => browser.url('/#/raw/tests/terra-form-select/form-select/select-field'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });

    it('should open the dropdown by clicking the toggle', () => {
      browser.click('[id=select-field]:last-child');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '[id=root]' });

    it('should select the first option by pressing enter', () => {
      browser.keys('ArrowUp');
      browser.keys('Enter');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('selected-option', { viewports });
  });
});
