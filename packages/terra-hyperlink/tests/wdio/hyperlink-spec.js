Terra.describeViewports('Hyperlink', ['tiny'], () => {
  it('should display default Hyperlink', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/hyperlink/default-hyperlink');
    $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // move mouse to prevent hover styles

    Terra.validates.element('default');
  });

  it('should display disabled Hyperlink', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/hyperlink/disabled-hyperlink');

    Terra.validates.element('disabled');
  });

  it('should display audio Hyperlink', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/hyperlink/audio-hyperlink');

    Terra.validates.element('audio');
  });

  it('should display document Hyperlink', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/hyperlink/document-hyperlink');

    Terra.validates.element('document');
  });

  it('should display external Hyperlink', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/hyperlink/external-hyperlink');

    Terra.validates.element('external');
  });

  it('should display image Hyperlink', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/hyperlink/image-hyperlink');

    Terra.validates.element('image');
  });

  it('should display video Hyperlink', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/hyperlink/video-hyperlink');

    Terra.validates.element('video');
  });

  it('should display Hyperlink with icon non wrapping', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/hyperlink/icon-non-wrapping-hyperlink');

    Terra.validates.element('icon non wrapping');
  });

  it('should display scaled Hyperlink', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/hyperlink/scaled-hyperlink');

    Terra.validates.element('scaled');
  });

  it('should display hyperlink states', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/hyperlink/states-hyperlink');

    Terra.validates.element('states');
  });

  it('should display Hyperlink with hidden underline', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/hyperlink/underline-hidden-hyperlink');

    Terra.validates.element('hidden underline');
  });

  it('should display programmatic focus on hyperlink', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/hyperlink/programmatic-focus');
    $('#button1').click();

    Terra.validates.element('focused hyperlink');
  });
});
