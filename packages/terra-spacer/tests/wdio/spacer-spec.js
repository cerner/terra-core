describe('Spacer', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-spacer/spacer/default-spacer'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Spacer with size small-2', () => {
    before(() => browser.url('/#/raw/tests/terra-spacer/spacer/spacer-small-2'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-spacer-small-minus-2-margin-top': '39px',
        '--terra-spacer-small-minus-2-margin-right': '39px',
        '--terra-spacer-small-minus-2-margin-bottom': '39px',
        '--terra-spacer-small-minus-2-margin-left': '39px',
        '--terra-spacer-small-minus-2-padding-top': '39px',
        '--terra-spacer-small-minus-2-padding-right': '39px',
        '--terra-spacer-small-minus-2-padding-bottom': '39px',
        '--terra-spacer-small-minus-2-padding-left': '39px',
      },
    });
  });

  describe('Spacer with size small-1', () => {
    before(() => browser.url('/#/raw/tests/terra-spacer/spacer/spacer-small-1'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-spacer-small-minus-1-margin-top': '36px',
        '--terra-spacer-small-minus-1-margin-right': '36px',
        '--terra-spacer-small-minus-1-margin-bottom': '36px',
        '--terra-spacer-small-minus-1-margin-left': '36px',
        '--terra-spacer-small-minus-1-padding-top': '36px',
        '--terra-spacer-small-minus-1-padding-right': '36px',
        '--terra-spacer-small-minus-1-padding-bottom': '36px',
        '--terra-spacer-small-minus-1-padding-left': '36px',
      },
    });
  });

  describe('Spacer with size small', () => {
    before(() => browser.url('/#/raw/tests/terra-spacer/spacer/spacer-small'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-spacer-small-margin-top': '33px',
        '--terra-spacer-small-margin-right': '33px',
        '--terra-spacer-small-margin-bottom': '33px',
        '--terra-spacer-small-margin-left': '33px',
        '--terra-spacer-small-padding-top': '33px',
        '--terra-spacer-small-padding-right': '33px',
        '--terra-spacer-small-padding-bottom': '33px',
        '--terra-spacer-small-padding-left': '33px',
      },
    });
  });

  describe('Spacer with size medium', () => {
    before(() => browser.url('/#/raw/tests/terra-spacer/spacer/spacer-medium'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-spacer-medium-margin-top': '30px',
        '--terra-spacer-medium-margin-right': '30px',
        '--terra-spacer-medium-margin-bottom': '30px',
        '--terra-spacer-medium-margin-left': '30px',
        '--terra-spacer-medium-padding-top': '30px',
        '--terra-spacer-medium-padding-right': '30px',
        '--terra-spacer-medium-padding-bottom': '30px',
        '--terra-spacer-medium-padding-left': '30px',
      },
    });
  });

  describe('Spacer with size large', () => {
    before(() => browser.url('/#/raw/tests/terra-spacer/spacer/spacer-large'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-spacer-large-margin-top': '26px',
        '--terra-spacer-large-margin-right': '26px',
        '--terra-spacer-large-margin-bottom': '26px',
        '--terra-spacer-large-margin-left': '26px',
        '--terra-spacer-large-padding-top': '26px',
        '--terra-spacer-large-padding-right': '26px',
        '--terra-spacer-large-padding-bottom': '26px',
        '--terra-spacer-large-padding-left': '26px',
      },
    });
  });

  describe('Spacer with size large+1', () => {
    before(() => browser.url('/#/raw/tests/terra-spacer/spacer/spacer-large-1'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-spacer-large-plus-1-margin-top': '23px',
        '--terra-spacer-large-plus-1-margin-right': '23px',
        '--terra-spacer-large-plus-1-margin-bottom': '23px',
        '--terra-spacer-large-plus-1-margin-left': '23px',
        '--terra-spacer-large-plus-1-padding-top': '23px',
        '--terra-spacer-large-plus-1-padding-right': '23px',
        '--terra-spacer-large-plus-1-padding-bottom': '23px',
        '--terra-spacer-large-plus-1-padding-left': '23px',
      },
    });
  });

  describe('Spacer with size large+2', () => {
    before(() => browser.url('/#/raw/tests/terra-spacer/spacer/spacer-large-2'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-spacer-large-plus-2-margin-top': '20px',
        '--terra-spacer-large-plus-2-margin-right': '20px',
        '--terra-spacer-large-plus-2-margin-bottom': '20px',
        '--terra-spacer-large-plus-2-margin-left': '20px',
        '--terra-spacer-large-plus-2-padding-top': '20px',
        '--terra-spacer-large-plus-2-padding-right': '20px',
        '--terra-spacer-large-plus-2-padding-bottom': '20px',
        '--terra-spacer-large-plus-2-padding-left': '20px',
      },
    });
  });

  describe('Spacer with size large+3', () => {
    before(() => browser.url('/#/raw/tests/terra-spacer/spacer/spacer-large-3'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-spacer-large-plus-3-margin-top': '13px',
        '--terra-spacer-large-plus-3-margin-right': '13px',
        '--terra-spacer-large-plus-3-margin-bottom': '13px',
        '--terra-spacer-large-plus-3-margin-left': '13px',
        '--terra-spacer-large-plus-3-padding-top': '13px',
        '--terra-spacer-large-plus-3-padding-right': '13px',
        '--terra-spacer-large-plus-3-padding-bottom': '13px',
        '--terra-spacer-large-plus-3-padding-left': '13px',
      },
    });
  });

  describe('Spacer with size large+4', () => {
    before(() => browser.url('/#/raw/tests/terra-spacer/spacer/spacer-large-4'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-spacer-large-plus-4-margin-top': '10px',
        '--terra-spacer-large-plus-4-margin-right': '10px',
        '--terra-spacer-large-plus-4-margin-bottom': '10px',
        '--terra-spacer-large-plus-4-margin-left': '10px',
        '--terra-spacer-large-plus-4-padding-top': '10px',
        '--terra-spacer-large-plus-4-padding-right': '10px',
        '--terra-spacer-large-plus-4-padding-bottom': '10px',
        '--terra-spacer-large-plus-4-padding-left': '10px',
      },
    });
  });
});
