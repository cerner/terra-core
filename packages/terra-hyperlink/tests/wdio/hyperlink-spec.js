describe('Hyperlink', () => {
  before(() => {
    browser.setViewportSize(Terra.viewports('tiny')[0]);
  });

  describe('Default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-hyperlink/hyperlink/default-hyperlink');
      browser.moveToObject('#root', 0, 900); // move mouse to prevent hover styles
    });

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Disabled', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/disabled-hyperlink'));

    // See https://github.com/cerner/terra-core/pull/1562#discussion_r193008539 for more info why this rule is disabled here.
    const rules = {
      'color-contrast': { enabled: false },
    };

    Terra.it.isAccessible({ rules });
    Terra.it.matchesScreenshot();
  });

  describe('Audio', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/audio-hyperlink'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Document', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/document-hyperlink'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('External', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/external-hyperlink'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Image', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/image-hyperlink'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Video', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/video-hyperlink'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Icon Non Wrapping', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/icon-non-wrapping-hyperlink'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Scaled', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/scaled-hyperlink'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('States', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/states-hyperlink'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Underline Hidden', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/underline-hidden-hyperlink'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });
});
