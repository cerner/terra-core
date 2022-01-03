Terra.describeViewports('Spacer', ['medium'], () => {
  it('should display default Spacer', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/spacer/default-spacer');

    Terra.validates.element('default');
  });

  it('should display Spacer with size small-2', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/spacer/spacer-small-2');

    Terra.validates.element('size small-2');
  });

  it('should display Spacer with size small-1', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/spacer/spacer-small-1');

    Terra.validates.element('size small-1');
  });

  it('should display Spacer with size small', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/spacer/spacer-small');

    Terra.validates.element('size small');
  });

  it('should display Spacer with size medium', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/spacer/spacer-medium');

    Terra.validates.element('size medium');
  });

  it('should display Spacer with size large', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/spacer/spacer-large');

    Terra.validates.element('size large');
  });

  it('should display Spacer with size large+1', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/spacer/spacer-large-1');

    Terra.validates.element('size large+1');
  });

  it('should display Spacer with size large+2', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/spacer/spacer-large-2');

    Terra.validates.element('size large+2');
  });

  it('should display Spacer with size large+3', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/spacer/spacer-large-3');

    Terra.validates.element('size large+3');
  });

  it('should display Spacer with size large+4', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/spacer/spacer-large-4');

    Terra.validates.element('size large+4');
  });
});
