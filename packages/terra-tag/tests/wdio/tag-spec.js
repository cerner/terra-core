/* global before, browser, Terra */
const viewports = Terra.viewports('tiny', 'medium', 'large');

describe('Tag', () => {
  describe('Default', () => {
    before(() => browser.setViewportSize(Terra.viewports('tiny')[0]));

    describe('Default Tag', () => {
      beforeEach(() => browser.url('/#/tests/tag-tests/default-tag'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
      Terra.should.themeEachCustomProperty({
        '--terra-tag-font-size': '25px',
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
      });
    });

    describe('Default - Keyboard focus', () => {
      beforeEach(() => {
        browser.url('/#/tests/tag-tests/default-tag');
        browser.keys('Tab');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
      Terra.should.themeEachCustomProperty({
        '--terra-tag-focus-background-color': 'purple',
        '--terra-tag-focus-box-shadow': '4px 4px 4px 4px green',
        '--terra-tag-focused-border-color': 'yellow',
        '--terra-tag-focused-text-decoration': 'overline',
      });
    });

    describe('Default - Hover', () => {
      beforeEach(() => {
        browser.url('/#/tests/tag-tests/default-tag');
        browser.moveToObject('button');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
      Terra.should.themeEachCustomProperty({
        '--terra-tag-hover-background-color': 'purple',
        '--terra-tag-hover-box-shadow': '4px 4px 4px 4px green',
        '--terra-tag-hover-text-decoration': 'overline',
      });
    });

    describe('Default - Normal Theme', () => {
      beforeEach(() => {
        browser.url('/#/tests/tag-tests/default-tag');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
      Terra.should.themeEachCustomProperty({
        '--terra-tag-normal-theme-background-color': 'green',
        '--terra-tag-normal-theme-border-color': 'yellow',
        '--terra-tag-normal-theme-box-shadow': '0 0 10px 10px blue',
      });
    });
  });

  describe('Href Tag', () => {
    before(() => browser.url('/#/tests/tag-tests/href-tag'));
    Terra.should.matchScreenshot();
  });

  describe('Icon and Text Tag', () => {
    beforeEach(() => browser.url('/#/tests/tag-tests/icon-and-text-tag'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeEachCustomProperty({
      '--terra-tag-icon-height': '5px',
      '--terra-tag-icon-width': '5px',
      '--terra-tag-icon-margin-right': '1px',
      '--terra-tag-icon-margin-top': '1px',
    });
  });

  describe('Icon and Text long Tag', () => {
    beforeEach(() => browser.url('/#/tests/tag-tests/icon-and-long-text-tag'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Multiple Tags', () => {
    beforeEach(() => browser.url('/#/tests/tag-tests/multiple-tags'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
