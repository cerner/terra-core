describe('Hyperlink', () => {
  before(() => {
    browser.setViewportSize(Terra.viewports('tiny')[0]);
  });

  describe('Default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-hyperlink/hyperlink/default-hyperlink');
      browser.moveToObject('#root', 0, 900); // move mouse to prevent hover styles    
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Disabled', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/disabled-hyperlink'));

    // See https://github.com/cerner/terra-core/pull/1562#discussion_r193008539 for more info why this rule is disabled here.
    const rules = {
      'color-contrast': { enabled: false },
    };

    Terra.should.beAccessible({ rules });
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-hyperlink-disabled-color': 'red',
        '--terra-hyperlink-disabled-text-decoration': 'underline',
      },
    });
  });

  describe('Audio', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/audio-hyperlink'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-hyperlink-audio-after-background-image': 'linear-gradient(red, orange)',
      },
    });
  });

  describe('Document', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/document-hyperlink'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-hyperlink-document-after-background-image': 'linear-gradient(red, orange)',
      },
    });
  });

  describe('External', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/external-hyperlink'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-hyperlink-external-after-background-image': 'linear-gradient(red, orange)',
      },
    });
  });

  describe('Image', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/image-hyperlink'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-hyperlink-image-after-background-image': 'linear-gradient(red, orange)',
      },
    });
  });

  describe('Video', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/video-hyperlink'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-hyperlink-video-after-background-image': 'linear-gradient(red, orange)',
      },
    });
  });

  describe('Icon Non Wrapping', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/icon-non-wrapping-hyperlink'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Scaled', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/scaled-hyperlink'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('States', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/states-hyperlink'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-hyperlink-color': 'red',
        '--terra-hyperlink-text-decoration': 'underline',
        '--terra-hyperlink-visited-color': 'orange',
        '--terra-hyperlink-hover-color': 'yellow',
        '--terra-hyperlink-hover-text-decoration': 'dotted',
        '--terra-hyperlink-focus-background-color': 'green',
        '--terra-hyperlink-focus-border-radius': '0',
        '--terra-hyperlink-focus-box-shadow': '0 0 0 1px red, 0 0 0 3px green',
        '--terra-hyperlink-focus-color': 'purple',
        '--terra-hyperlink-focus-text-decoration': 'overline',
        '--terra-hyperlink-active-color': 'pink',
        '--terra-hyperlink-disabled-color': 'blue',
      },
    });
  });

  describe('Underline Hidden', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/hyperlink/underline-hidden-hyperlink'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });
});
