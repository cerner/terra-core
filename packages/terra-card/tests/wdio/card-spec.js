const viewports = Terra.viewports('tiny');

describe('Card', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-card/card/default-card'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Raised', () => {
    before(() => browser.url('/#/raw/tests/terra-card/card/raised-card'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Card Body Padding Horizontal', () => {
    before(() => browser.url('/#/raw/tests/terra-card/card/card-padding-horizontal'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Card Body Padding Vertical', () => {
    before(() => browser.url('/#/raw/tests/terra-card/card/card-padding-vertical'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Card Body Padded', () => {
    before(() => browser.url('/#/raw/tests/terra-card/card/card-padding'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Card Body Centered', () => {
    before(() => browser.url('/#/raw/tests/terra-card/card/card-content-center'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Card Visually Hidden Text', () => {
    before(() => browser.url('/#/raw/tests/terra-card/card/card-visually-hidden-text'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });
});
