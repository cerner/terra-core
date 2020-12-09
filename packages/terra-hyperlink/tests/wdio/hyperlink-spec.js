Terra.describeViewports('Hyperlink', ['tiny'], () => {
  it('should display default Hyperlink', () => {
    browser.url('/raw/tests/terra-hyperlink/hyperlink/default-hyperlink');
    browser.moveToObject('#root', 0, 700); // move mouse to prevent hover styles

    Terra.validates.element('default');
  });

  it('should display disabled Hyperlink', () => {
    browser.url('/raw/tests/terra-hyperlink/hyperlink/disabled-hyperlink');

    Terra.validates.element('disabled');
  });

  it('should display audio Hyperlink', () => {
    browser.url('/raw/tests/terra-hyperlink/hyperlink/audio-hyperlink');

    Terra.validates.element('audio');
  });

  it('should display document Hyperlink', () => {
    browser.url('/raw/tests/terra-hyperlink/hyperlink/document-hyperlink');

    Terra.validates.element('document');
  });

  it('should display external Hyperlink', () => {
    browser.url('/raw/tests/terra-hyperlink/hyperlink/external-hyperlink');

    Terra.validates.element('external');
  });

  it('should display image Hyperlink', () => {
    browser.url('/raw/tests/terra-hyperlink/hyperlink/image-hyperlink');

    Terra.validates.element('image');
  });

  it('should display video Hyperlink', () => {
    browser.url('/raw/tests/terra-hyperlink/hyperlink/video-hyperlink');

    Terra.validates.element('video');
  });

  it('should display Hyperlink with icon non wrapping', () => {
    browser.url('/raw/tests/terra-hyperlink/hyperlink/icon-non-wrapping-hyperlink');

    Terra.validates.element('icon non wrapping');
  });

  it('should display scaled Hyperlink', () => {
    browser.url('/raw/tests/terra-hyperlink/hyperlink/scaled-hyperlink');

    Terra.validates.element('scaled');
  });

  it('should display hyperlink states', () => {
    browser.url('/raw/tests/terra-hyperlink/hyperlink/states-hyperlink');

    Terra.validates.element('states');
  });

  it('should display Hyperlink with hidden underline', () => {
    browser.url('/raw/tests/terra-hyperlink/hyperlink/underline-hidden-hyperlink');

    Terra.validates.element('hidden underline');
  });
});
