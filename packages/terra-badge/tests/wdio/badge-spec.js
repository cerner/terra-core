Terra.describeViewports('Badge', ['tiny', 'medium'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-badge/badge/badge-default'));

    Terra.it.validatesElement({ selector: '#default-badge' });
  });

  describe('Intent', () => {
    before(() => browser.url('/#/raw/tests/terra-badge/badge/badge-intent'));

    Terra.it.validatesElement();
  });

  describe('Size', () => {
    before(() => browser.url('/#/raw/tests/terra-badge/badge/badge-size'));

    Terra.it.validatesElement();
  });

  describe('Icons', () => {
    before(() => browser.url('/#/raw/tests/terra-badge/badge/badge-icon'));
    Terra.it.validatesElement();
  });

  describe('Visually Hidden Text', () => {
    before(() => browser.url('/#/raw/tests/terra-badge/badge/badge-visually-hidden-text'));
    Terra.it.validatesElement();
  });
});
