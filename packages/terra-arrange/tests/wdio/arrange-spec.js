Terra.describeViewports('Arrange', ['tiny', 'medium'], () => {
  describe('Aligned All', () => {
    before(() => browser.url('/#/raw/tests/terra-arrange/arrange/aligned-all-arrange'));
    Terra.it.validatesElement();
  });

  describe('Aligned All Fit End Fill', () => {
    before(() => browser.url('/#/raw/tests/terra-arrange/arrange/aligned-fit-end-fill-arrange'));
    Terra.it.validatesElement();
  });

  describe('Aligned All Fit Start Fill', () => {
    before(() => browser.url('/#/raw/tests/terra-arrange/arrange/aligned-fit-start-fill-arrange'));
    Terra.it.validatesElement();
  });

  describe('Aligned Individually Fit Start', () => {
    before(() => browser.url('/#/raw/tests/terra-arrange/arrange/individually-aligned-fit-start'));
    Terra.it.validatesElement();
  });

  describe('Aligned Individually Fill', () => {
    before(() => browser.url('/#/raw/tests/terra-arrange/arrange/individually-aligned-fill'));
    Terra.it.validatesElement();
  });

  describe('Aligned Individually Fit End', () => {
    before(() => browser.url('/#/raw/tests/terra-arrange/arrange/individually-aligned-fit-end'));
    Terra.it.validatesElement();
  });

  describe('Aligned All Arrange Long Words', () => {
    before(() => browser.url('/#/raw/tests/terra-arrange/arrange/aligned-all-long-words'));
    Terra.it.validatesElement();
  });

  describe('Align stretch with 20% max-widths on containers using attribute props', () => {
    before(() => browser.url('/#/raw/tests/terra-arrange/arrange/aligned-stretch-max-width'));
    Terra.it.validatesElement();
  });
});
