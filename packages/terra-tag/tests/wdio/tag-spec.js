const viewports = Terra.viewports('tiny', 'medium', 'large');

describe('Tag', () => {
  describe('Default', () => {
    before(() => browser.setViewportSize(Terra.viewports('tiny')[0]));

    describe('Default Tag', () => {
      before(() => browser.url('/#/raw/tests/terra-tag/tag/default-tag'));

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot();
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
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
        },
      });
    });
  });

  describe('Default OnClick Tag', () => {
    before(() => browser.url('/#/raw/tests/terra-tag/tag/default-on-click-tag'));
    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Href Tag', () => {
    before(() => browser.url('/#/raw/tests/terra-tag/tag/href-tag'));
    Terra.it.matchesScreenshot();
  });

  describe('Icon and Text Tag', () => {
    before(() => browser.url('/#/raw/tests/terra-tag/tag/icon-and-text-tag'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-tag-icon-height': '5px',
        '--terra-tag-icon-width': '5px',
        '--terra-tag-icon-margin-right': '1px',
        '--terra-tag-icon-margin-top': '1px',
      },
    });
  });

  describe('Icon and Text Long Tag', () => {
    before(() => browser.url('/#/raw/tests/terra-tag/tag/long-text-tag'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Multiple Tags', () => {
    before(() => browser.url('/#/raw/tests/terra-tag/tag/multiple-tags'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('OnClick Tag', () => {
    before(() => browser.url('/#/raw/tests/terra-tag/tag/on-click-tag'));
    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-tag-interactive-color': 'purple',
        '--terra-tag-interactive-text-decoration': 'underline',
        '--terra-tag-interactive-background-color': 'yellow',
      },
    });

    describe('OnClick Tag - Keyboard focus', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-tag/tag/on-click-tag');
        browser.keys('Tab');
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot();
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-tag-focus-background-color': 'purple',
          '--terra-tag-focus-box-shadow': '4px 4px 4px 4px green',
          '--terra-tag-focus-border-color': 'yellow',
          '--terra-tag-focus-text-decoration': 'overline',
        },
      });
    });

    describe('OnClick Tag - Hover', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-tag/tag/on-click-tag');
        browser.moveToObject('button');
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot();
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-tag-hover-background-color': 'purple',
          '--terra-tag-hover-box-shadow': '4px 4px 4px 4px green',
          '--terra-tag-hover-text-decoration': 'overline',
          '--terra-tag-hover-color': 'yellow',
        },
      });
    });
  });
});
