Terra.describeViewports('Header', ['tiny', 'medium', 'large'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-header/header/default-header'));

    Terra.it.validatesElement();
  });

  describe('Start', () => {
    before(() => browser.url('/#/raw/tests/terra-header/header/start-header'));

    Terra.it.validatesElement();
  });

  describe('End', () => {
    before(() => browser.url('/#/raw/tests/terra-header/header/end-header'));

    Terra.it.validatesElement();
  });

  describe('Start and End', () => {
    before(() => browser.url('/#/raw/tests/terra-header/header/start-and-end-header'));

    Terra.it.validatesElement();
  });

  describe('Children', () => {
    before(() => browser.url('/#/raw/tests/terra-header/header/children-header'));

    Terra.it.validatesElement();
  });
});
