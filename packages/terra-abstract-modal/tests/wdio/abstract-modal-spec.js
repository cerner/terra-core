describe('Abstract Modal', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Append Class', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-append-class'));

    Terra.should.matchScreenshot({ selector: 'div[role="dialog"]' });
    Terra.should.beAccessible();
  });

  describe('Content Overflow', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-content-overflow'));
    const overflowModal = { height: 1684, width: 1870 };

    Terra.should.matchScreenshot({ viewports: [overflowModal], selector: 'div[role="dialog"]' });
    Terra.should.beAccessible({ viewports: [overflowModal] });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-abstract-modal-vertical-inset': '50px',
        '--terra-abstract-modal-horizontal-inset': '50px',
      },
      selector: 'div[role="dialog"]',
      viewports: [overflowModal],
    });
  });

  describe('Custom Props', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-custom-props'));
    it('checks for custom id prop', () => {
      expect(browser.getAttribute('div[role="dialog"]', 'id')).to.equal('custom-props');
    });
  });

  describe('Disable Close On Esc', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-disable-close-on-esc'));

    Terra.should.matchScreenshot('modal present', { selector: 'div[role="dialog"]' });

    it('attempts to close modal with ESC', () => {
      browser.keys('Escape');
    });

    Terra.should.matchScreenshot('modal present', { selector: 'div[role="dialog"]' });
    Terra.should.beAccessible();
  });

  describe('Modal has focus trap applied', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-disable-close-on-esc'));

    it('focuses on the first button', () => {
      browser.keys(['Tab']);
      browser.hasFocus('#focus-button');
    });

    Terra.should.matchScreenshot({ selector: 'div[role="dialog"]' });
    Terra.should.beAccessible();
  });

  describe('Disable Close On Outside Click', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-disable-close-on-outside-click'));

    Terra.should.matchScreenshot('modal present', { selector: 'div[role="dialog"]' });

    it('attempts to close modal with outside click', () => {
      browser.leftClick('button');
    });
    Terra.should.matchScreenshot('modal present', { selector: 'div[role="dialog"]' });
    Terra.should.beAccessible();
  });

  describe('Is Fullscreen', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-is-fullscreen'));

    Terra.should.matchScreenshot('modal present', { selector: 'div[role="dialog"]' });
    it('clicks outside to close modal', () => {
      browser.moveToObject('[class*="ModalOverlay"]', 235, 5)
        .leftClick();
    });
    Terra.should.matchScreenshot('modal closed');

    it('opens the modal', () => {
      browser.click('button');
    });
    Terra.should.matchScreenshot('modal present', { selector: 'div[role="dialog"]' });

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
    Terra.should.matchScreenshot({ selector: 'div[role="dialog"]' });

    it('closes the modal on ESC', () => {
      browser.keys('Escape');
    });
    Terra.should.matchScreenshot('modal closed, with focus');

    Terra.should.beAccessible();
  });

  describe('No Focusable Content', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-no-focusable-content'));

    Terra.should.matchScreenshot({ selector: 'div[role="dialog"]' });
    Terra.should.beAccessible();
  });

  describe('Custom Focusable Fallback', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-fallback-focus'));

    it('clicks to open modal', () => {
      browser.click('button');
    });

    Terra.should.matchScreenshot({ selector: 'div[role="dialog"]' });
  });

  describe('Override Role', () => {
    before(() => browser.url('/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-override-role'));

    Terra.should.matchScreenshot({ selector: 'div[role="alertdialog"]' });
    Terra.should.beAccessible();
  });
});
