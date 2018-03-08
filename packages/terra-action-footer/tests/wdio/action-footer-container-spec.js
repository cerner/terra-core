/* global browser, Terra */
import { themeables, viewports } from './common';

describe('ActionFooterContainer', () => {
  describe('No Children', () => {
    beforeEach(() => browser.url('/#/tests/action-footer-container/no-children'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(themeables);
  });

  describe('With Children', () => {
    beforeEach(() => browser.url('/#/tests/action-footer-container/with-children'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(themeables);
  });
});
