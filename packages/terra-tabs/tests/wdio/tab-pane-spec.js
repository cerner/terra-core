/* global browser, Terra, before */
 const shouldTheme = (customProperties) => {
   Object.entries(customProperties).forEach(([key, value]) => {
     it(`themed [${key}]`, () => {
       browser.setCSSCustomProps({ [key]: value });
       expect(browser.checkElement('[data-reactroot]')).to.matchReference();
     });
   });
 };

 describe('TabPane', () => {
   before(() => browser.setViewportSize(Terra.viewports('tiny')[0]));

   describe('Text Only', () => {
     beforeEach(() => browser.url('/#/tests/tab-pane-tests/text-only'));
     Terra.should.matchScreenshot();
     Terra.should.beAccessible();
     shouldTheme({
       '--terra-tabs-font-size': '30px',
       '--terra-tabs-line-height': '2',
       '--terra-tabs-text-only-padding': '50px',
     });
   });

   describe('Icon Only', () => {
     beforeEach(() => browser.url('/#/tests/tab-pane-tests/icon-only'));
     Terra.should.matchScreenshot();
     Terra.should.beAccessible();
     shouldTheme({
       '--terra-tabs-icon-only-padding': '50px',
     });
   });

   describe('Icon and Text', () => {
     beforeEach(() => browser.url('/#/tests/tab-pane-tests/icon-and-text'));
     Terra.should.matchScreenshot();
     Terra.should.beAccessible();
     shouldTheme({
       '--terra-tabs-padding': '50px',
     });
   });

   describe('Custom Display', () => {
     beforeEach(() => browser.url('/#/tests/tab-pane-tests/custom-display'));
     Terra.should.matchScreenshot();
     Terra.should.beAccessible();
   });

   describe('Long text', () => {
     beforeEach(() => browser.url('/#/tests/tab-pane-tests/long-text'));
     Terra.should.matchScreenshot();
     Terra.should.beAccessible();
   });
 });
