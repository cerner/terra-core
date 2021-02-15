Terra.describeViewports('Card', ['tiny'], () => {
  it('displays default Card', () => {
    browser.url('/raw/tests/terra-card/card/default-card');

    Terra.validates.element('default card');
  });

  it('displays raised Card', () => {
    browser.url('/raw/tests/terra-card/card/raised-card');

    Terra.validates.element('raised card');
  });

  it('displays Card with body padding horizontal', () => {
    browser.url('/raw/tests/terra-card/card/card-padding-horizontal');

    Terra.validates.element('body padding horizontal');
  });

  it('displays Card with body padding vertical', () => {
    browser.url('/raw/tests/terra-card/card/card-padding-vertical');

    Terra.validates.element('body padding vertical');
  });

  it('displays Card with body padded', () => {
    browser.url('/raw/tests/terra-card/card/card-padding');

    Terra.validates.element('body padded');
  });

  it('displays Card with body centered', () => {
    browser.url('/raw/tests/terra-card/card/card-content-center');

    Terra.validates.element('body centered');
  });

  it('displays Card with visually hidden text', () => {
    browser.url('/raw/tests/terra-card/card/card-visually-hidden-text');

    Terra.validates.element('visually hidden text');
  });
});
