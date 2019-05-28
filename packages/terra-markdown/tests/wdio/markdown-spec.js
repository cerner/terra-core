describe('Markdown', () => {
  before(() => browser.setViewportSize({ width: 1000, height: 10000, name: 'large' }));
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-markdown/markdown/markdown'));

    Terra.should.validateElement({ selector: '#root' });
  });

  describe('css', () => {
    before(() => browser.url('/#/raw/tests/terra-markdown/markdown/css'));

    Terra.should.validateElement();
  });

  describe('diff', () => {
    before(() => browser.url('/#/raw/tests/terra-markdown/markdown/diff'));

    Terra.should.validateElement();
  });

  describe('html', () => {
    before(() => browser.url('/#/raw/tests/terra-markdown/markdown/html'));

    Terra.should.validateElement();
  });

  describe('javascript', () => {
    before(() => browser.url('/#/raw/tests/terra-markdown/markdown/javascript'));

    Terra.should.validateElement();
  });

  describe('jsx', () => {
    before(() => browser.url('/#/raw/tests/terra-markdown/markdown/jsx'));

    Terra.should.validateElement();
  });

  describe('noformat', () => {
    before(() => browser.url('/#/raw/tests/terra-markdown/markdown/noformat'));

    Terra.should.validateElement();
  });

  describe('scss', () => {
    before(() => browser.url('/#/raw/tests/terra-markdown/markdown/scss'));

    Terra.should.validateElement();
  });

  describe('Block Quote', () => {
    before(() => browser.url('/#/raw/tests/terra-markdown/markdown/blockquote'));

    Terra.should.validateElement();
  });
});
