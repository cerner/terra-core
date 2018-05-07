/* global browser, Terra, before */

describe('Spacer', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/spacer/default-spacer'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Spacer with small-2 margin', () => {
    before(() => browser.url('/#/raw/tests/spacer/spacer-small-2'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-spacer-small-minus-2': '39px',
      },
    });
  });

  describe('Spacer with small-1 margin', () => {
    before(() => browser.url('/#/raw/tests/spacer/spacer-small-1'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-spacer-small-minus-1': '36px',
      },
    });
  });

  describe('Spacer with small margin', () => {
    before(() => browser.url('/#/raw/tests/spacer/spacer-small'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-spacer-small': '33px',
      },
    });
  });

  describe('Spacer with medium margin', () => {
    before(() => browser.url('/#/raw/tests/spacer/spacer-medium'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-spacer-medium': '30px',
      },
    });
  });

  describe('Spacer with large margin', () => {
    before(() => browser.url('/#/raw/tests/spacer/spacer-large'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-spacer-large': '26px',
      },
    });
  });

  describe('Spacer with large+1 margin', () => {
    before(() => browser.url('/#/raw/tests/spacer/spacer-large-1'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-spacer-large-plus-1': '23px',
      },
    });
  });

  describe('Spacer with large+2 margin', () => {
    before(() => browser.url('/#/raw/tests/spacer/spacer-large-2'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-spacer-large-plus-2': '20px',
      },
    });
  });

  describe('Spacer with large+3 margin', () => {
    before(() => browser.url('/#/raw/tests/spacer/spacer-large-3'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-spacer-large-plus-3': '13px',
      },
    });
  });

  describe('Spacer with large+4 margin', () => {
    before(() => browser.url('/#/raw/tests/spacer/spacer-large-4'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-spacer-large-plus-4': '10px',
      },
    });
  });
});
