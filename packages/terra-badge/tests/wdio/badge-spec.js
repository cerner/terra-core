Terra.describeViewports('Badge', ['tiny', 'medium'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-badge/badge/badge-default'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot({ selector: '#default-badge' });
  });

  describe('Intent', () => {
    before(() => browser.url('/#/raw/tests/terra-badge/badge/badge-intent'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Size', () => {
    before(() => browser.url('/#/raw/tests/terra-badge/badge/badge-size'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Icons', () => {
    before(() => browser.url('/#/raw/tests/terra-badge/badge/badge-icon'));
    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Visually Hidden Text', () => {
    before(() => browser.url('/#/raw/tests/terra-badge/badge/badge-visually-hidden-text'));
    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });
});
