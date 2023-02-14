Terra.describeViewports('Radio', ['medium'], () => {
  describe('Default', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/form-radio/radio/default-radio'));

    it('should display default Radio', () => {
      Terra.validates.element('default');
    });

    it('should display hover on Radio', () => {
      $('#default').scrollIntoView();
      $('#default').moveTo();

      Terra.validates.element('hover');
    });

    it('should display checked Radio', () => {
      $('[for="default"]').click();
      $('#site').click();

      Terra.validates.element('checked');
    });

    it('should display focus on Radio', () => {
      browser.keys(['Tab']);

      Terra.validates.element('focus');
    });
  });

  it('should display disabled Radio', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-radio/radio/disabled-radio');

    Terra.validates.element('disabled');
  });

  it('should display Radio with hidden label', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-radio/radio/hidden-radio');

    Terra.validates.element('hidden label');
  });
});
