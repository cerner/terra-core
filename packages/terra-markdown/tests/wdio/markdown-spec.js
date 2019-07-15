Terra.describeViewports('Markdown', ['large'], () => {
  describe('css', () => {
    before(() => browser.url('/#/raw/tests/terra-markdown/markdown/css'));

    Terra.it.validatesElement();
  });

  describe('diff', () => {
    before(() => browser.url('/#/raw/tests/terra-markdown/markdown/diff'));

    Terra.it.validatesElement();
  });

  describe('html', () => {
    before(() => browser.url('/#/raw/tests/terra-markdown/markdown/html'));

    Terra.it.validatesElement();
  });

  describe('javascript', () => {
    before(() => browser.url('/#/raw/tests/terra-markdown/markdown/javascript'));

    Terra.it.validatesElement();
  });

  describe('jsx', () => {
    before(() => browser.url('/#/raw/tests/terra-markdown/markdown/jsx'));

    Terra.it.validatesElement();
  });

  describe('noformat', () => {
    before(() => browser.url('/#/raw/tests/terra-markdown/markdown/noformat'));

    Terra.it.validatesElement();
  });

  describe('scss', () => {
    before(() => browser.url('/#/raw/tests/terra-markdown/markdown/scss'));

    Terra.it.validatesElement();
  });

  describe('Block Quote', () => {
    before(() => browser.url('/#/raw/tests/terra-markdown/markdown/blockquote'));

    Terra.it.validatesElement();
  });
});
