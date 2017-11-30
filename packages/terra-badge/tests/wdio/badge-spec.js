/* global browser, describe, it, expect, before, Terra */
const viewports = Terra.viewports('tiny', 'medium');

describe('Badge', () => {
  describe('Default', () => {
    before(() => browser.url('/#/tests/badge-tests/default'));
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Intent', () => {
    before(() => browser.url('/#/tests/badge-tests/intent'));
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Size', () => {
    before(() => browser.url('/#/tests/badge-tests/intent'));
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Icons', () => {
    before(() => browser.url('/#/tests/badge-tests/icon'));
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
