/* global browser, Terra, before */
 describe('TabPane', () => {
   before(() => browser.setViewportSize(Terra.viewports('tiny')[0]));

   describe('Text Only', () => {
     beforeEach(() => browser.url('/#/tests/tab-pane-tests/text-only'));
     Terra.should.matchScreenshot();
     Terra.should.beAccessible();
     Terra.should.themeEachCustomProperty({
       '--terra-tabs-font-size': '30px',
       '--terra-tabs-line-height': '2',
       '--terra-tabs-text-only-padding': '50px',
     });
   });

   describe('Icon Only', () => {
     beforeEach(() => browser.url('/#/tests/tab-pane-tests/icon-only'));
     Terra.should.matchScreenshot();
     Terra.should.beAccessible();
     Terra.should.themeEachCustomProperty({
       '--terra-tabs-icon-only-padding': '50px',
     });
   });

   describe('Icon and Text', () => {
     beforeEach(() => browser.url('/#/tests/tab-pane-tests/icon-and-text'));
     Terra.should.matchScreenshot();
     Terra.should.beAccessible();
     Terra.should.themeEachCustomProperty({
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
