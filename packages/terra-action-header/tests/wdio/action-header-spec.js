Terra.describeViewports('ActionHeader', ['tiny', 'medium', 'large'], () => {
  it('displays default ActionHeader', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/action-header/default-action-header');

    Terra.validates.element('default');
  });

  it('displays ActionHeader with back', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/action-header/back-action-header');

    Terra.validates.element('back');
  });

  it('displays ActionHeader with back and close', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/action-header/back-close-action-header');

    Terra.validates.element('back close');
  });

  it('displays ActionHeader with close', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/action-header/close-action-header');

    Terra.validates.element('close');
  });

  it('displays ActionHeader with minimize custom button', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/action-header/minimize-custom-button-action-header');

    Terra.validates.element('minimize custom button');
  });

  it('displays ActionHeader with maximize close', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/action-header/maximize-close-action-header');

    Terra.validates.element('maximize close');
  });

  it('displays ActionHeader with back close previous next', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/action-header/back-close-previous-next-action-header');

    Terra.validates.element('back close previous next');
  });

  it('displays ActionHeader with next enabled previous disabled', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/action-header/next-enabled-previous-disabled-action-header');

    Terra.validates.element('next enabled previous disabled');
  });

  it('displays ActionHeader with previous enabled next disabled', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/action-header/previous-enabled-next-disabled-action-header');

    Terra.validates.element('previous enabled next disabled');
  });

  it('displays ActionHeader with wrapped title', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/action-header/wrapped-title-action-header');

    Terra.validates.element('wrapped title');
  });

  it('displays ActionHeader with end element only', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/action-header/end-element-action-header');

    Terra.validates.element('end element only');
  });
});
