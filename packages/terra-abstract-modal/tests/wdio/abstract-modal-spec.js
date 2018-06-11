/* global before, browser, Terra */

describe('Abstract Modal', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Append Class', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-append-class'));

    Terra.should.matchScreenshot({ selector: 'div[role=document]' });
    Terra.should.beAccessible();
  });

  describe('Content Overflow', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-content-overflow'));

    Terra.should.matchScreenshot({ selector: 'div[role=document]' });
    Terra.should.beAccessible();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-abstract-modal-vertical-inset': '50px',
        '--terra-abstract-modal-horizontal-inset': '50px',
      },
      selector: 'div[role=document]',
    });
  });

  describe('Custom Props', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-custom-props'));

    Terra.should.matchScreenshot({ selector: 'div[role=document]' });
    Terra.should.beAccessible();
  });

  describe('Disable Close On Esc', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-disable-close-on-esc'));

    Terra.should.matchScreenshot('modal present', { selector: 'div[role=document]' });

    it('attempts to close modal with ESC', () => {
      browser.keys('Escape');
    });

    Terra.should.matchScreenshot('modal present', { selector: 'div[role=document]' });
    Terra.should.beAccessible();
  });

  describe('Disable Close On Outside Click', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-disable-close-on-outside-click'));

    Terra.should.matchScreenshot('modal present', { selector: 'div[role=document]' });

    it('attempts to close modal with outside click', () => {
      browser.leftClick('button');
    });
    Terra.should.matchScreenshot('modal present', { selector: 'div[role=document]' });
    Terra.should.beAccessible();
  });

  describe('Is Fullscreen', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-is-fullscreen'));

    Terra.should.matchScreenshot('modal present', { selector: 'div[role=document]' });
    it('clicks outside to close modal', () => {
      browser.moveToObject('[class*="ModalOverlay"]', 235, 5)
      .leftClick();
    });
    Terra.should.matchScreenshot('modal closed');

    it('opens the modal', () => {
      browser.click('button');
    });
    Terra.should.matchScreenshot('modal present', { selector: 'div[role=document]' });

    it('closes modal on ESC', () => {
      browser.keys('Escape');
    });
    Terra.should.matchScreenshot('modal closed, with focus');
    Terra.should.beAccessible();
  });

  describe('Is Open', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-is-open'));

    Terra.should.matchScreenshot('modal closed');
    it('clicks to open modal', () => {
      browser.click('button');
    });
    Terra.should.matchScreenshot({ selector: 'div[role=document]' });

    it('closes the modal on ESC', () => {
      browser.keys('Escape');
    });
    Terra.should.matchScreenshot('modal closed, with focus');

    Terra.should.beAccessible();
  });

  describe('No Focusable Content', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-no-focusable-content'));

    Terra.should.matchScreenshot({ selector: 'div[role=document]' });
    Terra.should.beAccessible();
  });

  describe('Override Role', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-override-role'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });
});
