Terra.describeViewports('Card', ['tiny'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-card/card/default-card'));

    Terra.it.validatesElement();
  });

  describe('Raised', () => {
    before(() => browser.url('/#/raw/tests/terra-card/card/raised-card'));

    Terra.it.validatesElement();
  });

  describe('Card Body Padding Horizontal', () => {
    before(() => browser.url('/#/raw/tests/terra-card/card/card-padding-horizontal'));

    Terra.it.validatesElement();
  });

  describe('Card Body Padding Vertical', () => {
    before(() => browser.url('/#/raw/tests/terra-card/card/card-padding-vertical'));

    Terra.it.validatesElement();
  });

  describe('Card Body Padded', () => {
    before(() => browser.url('/#/raw/tests/terra-card/card/card-padding'));

    Terra.it.validatesElement();
  });

  describe('Card Body Centered', () => {
    before(() => browser.url('/#/raw/tests/terra-card/card/card-content-center'));

    Terra.it.validatesElement();
  });

  describe('Card Visually Hidden Text', () => {
    before(() => browser.url('/#/raw/tests/terra-card/card/card-visually-hidden-text'));

    Terra.it.validatesElement();
  });
});
