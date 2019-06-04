const viewports = Terra.viewports('tiny', 'medium');

describe('Badge', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-badge/badge/badge-default'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports, selector: '#default-badge' });
  });

  describe('Intent', () => {
    before(() => browser.url('/#/raw/tests/terra-badge/badge/badge-intent'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Size', () => {
    before(() => browser.url('/#/raw/tests/terra-badge/badge/badge-size'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Icons', () => {
    before(() => browser.url('/#/raw/tests/terra-badge/badge/badge-icon'));
    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Visually Hidden Text', () => {
    before(() => browser.url('/#/raw/tests/terra-badge/badge/badge-visually-hidden-text'));
    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });
});
