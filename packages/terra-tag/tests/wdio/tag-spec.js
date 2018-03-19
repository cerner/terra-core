/* global before, browser, Terra */
const viewports = Terra.viewports('tiny', 'medium', 'large');

describe('Tag', () => {
  describe('Default', () => {
    before(() => browser.setViewportSize(Terra.viewports('tiny')[0]));

    describe('Default Tag', () => {
      beforeEach(() => browser.url('/#/raw/tests/tag/default-tag'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
      Terra.should.themeEachCustomProperty({
        '--terra-tag-font-size': '25px',
        '--terra-tag-color': 'red',
        '--terra-tag-font-weight': '700',
        '--terra-tag-padding-top': '1px',
        '--terra-tag-padding-bottom': '1px',
        '--terra-tag-padding-left': '1px',
        '--terra-tag-padding-right': '1px',
        '--terra-tag-border-style': 'dashed',
        '--terra-tag-line-height': '20px',
        '--terra-tag-margin-top': '1px',
        '--terra-tag-margin-bottom': '1px',
        '--terra-tag-margin-left': '1px',
        '--terra-tag-margin-right': '1px',
        '--terra-tag-text-decoration': 'underline',
        '--terra-tag-background-color': 'green',
        '--terra-tag-border-color': 'yellow',
        '--terra-tag-box-shadow': '0 0 10px 10px blue',
      });
    });
  });

  describe('Default OnClick Tag', () => {
    before(() => browser.url('/#/raw/tests/tag/default-on-click-tag'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Href Tag', () => {
    before(() => browser.url('/#/raw/tests/tag/href-tag'));
    Terra.should.matchScreenshot();
  });

  describe('Icon and Text Tag', () => {
    beforeEach(() => browser.url('/#/raw/tests/tag/icon-and-text-tag'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeEachCustomProperty({
      '--terra-tag-icon-height': '5px',
      '--terra-tag-icon-width': '5px',
      '--terra-tag-icon-margin-right': '1px',
      '--terra-tag-icon-margin-top': '1px',
    });
  });

  describe('Icon and Text Long Tag', () => {
    beforeEach(() => browser.url('/#/raw/tests/tag/long-text-tag'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Multiple Tags', () => {
    beforeEach(() => browser.url('/#/raw/tests/tag/multiple-tags'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('OnClick Tag', () => {
    before(() => browser.url('/#/raw/tests/tag/on-click-tag'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeEachCustomProperty({
      '--terra-tag-interactive-color': 'purple',
      '--terra-tag-interactive-text-decoration': 'underline',
      '--terra-tag-interactive-background-color': 'yellow',
    });

    describe('OnClick Tag - Keyboard focus', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/tag/on-click-tag');
        browser.keys('Tab');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
      Terra.should.themeEachCustomProperty({
        '--terra-tag-focus-background-color': 'purple',
        '--terra-tag-focus-box-shadow': '4px 4px 4px 4px green',
        '--terra-tag-focus-border-color': 'yellow',
        '--terra-tag-focus-text-decoration': 'overline',
      });
    });

    describe('OnClick Tag - Hover', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/tag/on-click-tag');
        browser.moveToObject('button');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
      Terra.should.themeEachCustomProperty({
        '--terra-tag-hover-background-color': 'purple',
        '--terra-tag-hover-box-shadow': '4px 4px 4px 4px green',
        '--terra-tag-hover-text-decoration': 'overline',
        '--terra-tag-hover-color': 'yellow',
      });
    });
  });
});
