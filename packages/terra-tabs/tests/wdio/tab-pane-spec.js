/* global browser, Terra, before */
 describe('TabPane', () => {
   before(() => browser.setViewportSize(Terra.viewports('tiny')[0]));

   describe('Text Only', () => {
     beforeEach(() => browser.url('/#/raw/tests/tabs/tab-pane/text-only-tab-pane'));
     Terra.should.matchScreenshot();
     Terra.should.beAccessible();
     Terra.should.themeEachCustomProperty({
       '--terra-tabs-font-size': '30px',
       '--terra-tabs-line-height': '2',
       '--terra-tabs-text-only-padding': '50px',
     });
   });

   describe('Icon Only', () => {
     beforeEach(() => browser.url('/#/raw/tests/tabs/tab-pane/icon-only-tab-pane'));
     Terra.should.matchScreenshot();
     Terra.should.beAccessible();
     Terra.should.themeEachCustomProperty({
       '--terra-tabs-icon-only-padding': '50px',
     });
   });

   describe('Icon and Text', () => {
     beforeEach(() => browser.url('/#/raw/tests/tabs/tab-pane/icon-and-text-tab-pane'));
     Terra.should.matchScreenshot();
     Terra.should.beAccessible();
     Terra.should.themeEachCustomProperty({
       '--terra-tabs-padding': '50px',
     });
   });

   describe('Custom Display', () => {
     beforeEach(() => browser.url('/#/raw/tests/tabs/tab-pane/custom-display-tab-pane'));
     Terra.should.matchScreenshot();
     Terra.should.beAccessible();
   });

   describe('Long text', () => {
     beforeEach(() => browser.url('/#/raw/tests/tabs/tab-pane/long-text-tab-pane'));
     Terra.should.matchScreenshot({ selector: '#longText' });
     Terra.should.beAccessible();
   });
 });
