/* global browser, Terra */
import { themeables, viewports } from './common';

describe('CenteredActionFooter', () => {
  describe('Empty', () => {
    beforeEach(() => browser.url('/#/tests/centered-action-footer/empty'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(themeables);
  });

  describe('Multiple Actions', () => {
    beforeEach(() => browser.url('/#/tests/centered-action-footer/multiple-actions'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(themeables);
  });

  describe('Single Action', () => {
    beforeEach(() => browser.url('/#/tests/centered-action-footer/single-action'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
