Terra.describeViewports('Hyperlink', ['tiny'], () => {
  describe('Default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-hyperlink/hyperlink/default-hyperlink');
      browser.moveToObject('#root', 0, 900); // move mouse to prevent hover styles
    });

    Terra.it.validatesElement();
  });

  describe('Disabled', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/disabled-hyperlink'));

    Terra.it.validatesElement();
  });

  describe('Audio', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/audio-hyperlink'));

    Terra.it.validatesElement();
  });

  describe('Document', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/document-hyperlink'));

    Terra.it.validatesElement();
  });

  describe('External', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/external-hyperlink'));

    Terra.it.validatesElement();
  });

  describe('Image', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/image-hyperlink'));

    Terra.it.validatesElement();
  });

  describe('Video', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/video-hyperlink'));

    Terra.it.validatesElement();
  });

  describe('Icon Non Wrapping', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/icon-non-wrapping-hyperlink'));

    Terra.it.validatesElement();
  });

  describe('Scaled', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/scaled-hyperlink'));

    Terra.it.validatesElement();
  });

  describe('States', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/states-hyperlink'));

    Terra.it.validatesElement();
  });

  describe('Underline Hidden', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/underline-hidden-hyperlink'));

    Terra.it.validatesElement();
  });
});
