/* global before, browser, Terra */

describe('Abstract Modal', () => {
  describe('Append Class', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-append-class');
      browser.setViewportSize(Terra.viewports('medium')[0]);
    });

    Terra.should.matchScreenshot({ selector: 'div[role=document]' });
    Terra.should.beAccessible();
  });

  describe('Content Overflow', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-content-overflow'));
    const overflowModal = { height: 1684, width: 1870 };

    Terra.should.matchScreenshot({ viewports: [overflowModal], selector: 'div[role=document]' });
    Terra.should.beAccessible({ viewports: [overflowModal] });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-abstract-modal-vertical-inset': '50px',
        '--terra-abstract-modal-horizontal-inset': '50px',
      },
      selector: 'div[role=document]',
      viewports: [overflowModal],
    });
  });

  describe('Custom Props', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-custom-props');
      browser.setViewportSize(Terra.viewports('medium')[0]);
    });

    Terra.should.matchScreenshot({ selector: 'div[role=document]' });
    Terra.should.beAccessible();
  });

  describe('Disable Close On Esc', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-disable-close-on-esc');
      browser.setViewportSize(Terra.viewports('medium')[0]);
    });

    Terra.should.matchScreenshot('modal present', { selector: 'div[role=document]' });

    it('attempts to close modal with ESC', () => {
      browser.keys('Escape');
    });

    Terra.should.matchScreenshot('modal present', { selector: 'div[role=document]' });
    Terra.should.beAccessible();
  });

  describe('Disable Close On Outside Click', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-disable-close-on-outside-click');
      browser.setViewportSize(Terra.viewports('medium')[0]);
    });

    Terra.should.matchScreenshot('modal present', { selector: 'div[role=document]' });

    it('attempts to close modal with outside click', () => {
      browser.leftClick('button');
    });
    Terra.should.matchScreenshot('modal present', { selector: 'div[role=document]' });
    Terra.should.beAccessible();
  });

  describe('Is Fullscreen', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-is-fullscreen');
      browser.setViewportSize(Terra.viewports('medium')[0]);
    });

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
    before(() => {
      browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-is-open');
      browser.setViewportSize(Terra.viewports('medium')[0]);
    });

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
    before(() => {
      browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-no-focusable-content');
      browser.setViewportSize(Terra.viewports('medium')[0]);
    });

    Terra.should.matchScreenshot({ selector: 'div[role=document]' });
    Terra.should.beAccessible();
  });

  describe('Override Role', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-override-role');
      browser.setViewportSize(Terra.viewports('medium')[0]);
    });

    Terra.should.matchScreenshot({ selector: 'div[role=button]' });
    Terra.should.beAccessible();
  });
});
