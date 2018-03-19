/* global browser, Terra, before */

describe('Large size squished slide panel', () => {
  before(() => browser.setViewportSize(Terra.viewports('large')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/slide-panel/slide-panel-squish-large');
  });

  Terra.should.matchScreenshot();
  Terra.should.beAccessible();
  Terra.should.themeEachCustomProperty({
    '--terra-slide-panel-panel-width-large-scalar': '0.8',
  });
});

describe('Toggle the slide panel and hidden styles', () => {
  before(() => browser.setViewportSize(Terra.viewports('large')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/slide-panel/slide-panel-toggle');
    browser.waitForExist('#test-slide [aria-hidden="true"]');
  });

  Terra.should.matchScreenshot({ selector: '#root' });
});

describe('Toggle the slide panel click', () => {
  before(() => browser.setViewportSize(Terra.viewports('large')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/slide-panel/slide-panel-toggle');
    browser.click('#test-toggle');
    browser.waitForExist('#test-slide [aria-hidden="false"]');
    browser.pause(150);
  });

  Terra.should.matchScreenshot({ selector: '#root' });
});

describe('Toggle the slide panel double click', () => {
  before(() => browser.setViewportSize(Terra.viewports('large')[0]));
  beforeEach(() => {
    browser.url('/#/raw/tests/slide-panel/slide-panel-toggle');
    browser.click('#test-toggle');
    browser.waitForExist('#test-slide [aria-hidden="false"]');
    browser.pause(150);
    browser.click('#test-toggle');
    browser.waitForExist('#test-slide [aria-hidden="true"]');
    browser.pause(150);
  });

  Terra.should.matchScreenshot({ selector: '#root' });
});
