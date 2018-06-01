/* global browser, Terra, before */
const viewports = Terra.viewports('tiny', 'medium', 'large');

describe('Hyperlink', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/default-hyperlink'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Disabled', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/disabled-hyperlink'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-link-disabled-color': 'red',
    });
  });

  describe('Audio', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/audio-hyperlink'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-link-audio-icon': 'linear-gradient(red, orange)',
    });
  });

  describe('Document', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/document-hyperlink'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-link-document-icon': 'linear-gradient(red, orange)',
    });
  });

  describe('External', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/external-hyperlink'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-link-external-icon': 'linear-gradient(red, orange)',
    });
  });

  describe('Image', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/image-hyperlink'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-link-image-icon': 'linear-gradient(red, orange)',
    });
  });

  describe('Video', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/video-hyperlink'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-link-video-icon': 'linear-gradient(red, orange)',
    });
  });

  describe('Icon Non Wrapping', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/icon-non-wrapping-hyperlink'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Scaled', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/scaled-hyperlink'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('States', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/states-hyperlink'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-link-color': 'red',
        '--terra-link-underline': 'underline',
        '--terra-link-visted-color': 'orange',
        '--terra-link-hover-color': 'yellow',
        '--terra-link-hover-underline': 'dotted',
        '--terra-link-focus-background-color': 'green',
        '--terra-link-focus-border-radius': '0',
        '--terra-link-focus-box-shadow': '0 0 0 1px red, 0 0 0 3px green',
        '--terra-link-focus-color': 'purple',
        '--terra-link-focus-underline': 'overline',
        '--terra-link-active-color': 'pink',
        '--terra-link-disabled-color': 'blue',
      },
    });
  });

  describe('Underline Hidden', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/underline-hidden-hyperlink'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
