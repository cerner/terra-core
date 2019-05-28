describe('Overlay', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/overlay/default-overlay'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot({ selector: '#default-overlay' });
  });

  describe('Overlay container', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/overlay/container-overlay'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot({ selector: '#overlay-container' });
  });

  describe('Scrollable Full Screen Overlay', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/overlay/fullscreen-scrollable-overlay'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot({ selector: '#scrollable-overlay' });
  });

  describe('Scrollable relative container overlay', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-overlay/overlay/overlay/container-scrollable-overlay'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot({ selector: '#overlay-container' });
  });

  describe('Overlay on Request-Close', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-overlay/overlay/overlay/on-request-close-overlay');
    });

    describe('OnRequestClose- Full Screen Overlay', () => {
      Terra.it.matchesScreenshot('before');

      it('Clicks on the Full screen overlay button', () => {
        browser.click('#trigger_fullscreen');
      });

      it('Background does not scroll when a fullscreen Overlay is open', () => {
        expect(browser.getAttribute('html', 'style')).contains('overflow: hidden');
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot('after', { selector: '#terra-Overlay--fullscreen' });

      describe('Full Screen Overlay- Triggers an onRequestClose on escape keydown', () => {
        it('Escape key press', () => {
          browser.keys('Escape');
        });

        Terra.it.matchesScreenshot('before');
      });

      describe('Full Screen Overlay- Triggers an onRequestClose on click inside of the Overlay', () => {
        it('reopens the overlay', () => {
          browser.click('#trigger_fullscreen');
        });

        Terra.it.matchesScreenshot('after');

        it('Click inside of the overlay', () => {
          browser.click('#terra-Overlay--fullscreen');
        });

        Terra.it.matchesScreenshot('before');
      });
    });

    describe('OnRequestClose- Container Overlay', () => {
      Terra.it.matchesScreenshot('before');

      it('Clicks on Container Overlay', () => {
        browser.click('#trigger_container');
      });

      it('Container Overlay- Background can scroll when Overlay relative to container is open', () => {
        expect(browser.getAttribute('html', 'style')).contains('');
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot('after', { selector: '#terra-Overlay--container' });
    });

    describe('Container Overlay- Triggers an onRequestClose on escape keydown', () => {
      it('Escape key press', () => {
        browser.keys('Escape');
      });

      Terra.it.matchesScreenshot('before');
    });

    describe('Container Overlay-Triggers an onRequestClose on click inside of the Overlay', () => {
      it('reopens container overlay', () => {
        browser.click('#trigger_container');
      });

      Terra.it.matchesScreenshot('after', { selector: '#terra-Overlay--container' });

      it('Clicks on the inside of Overlay', () => {
        browser.click('#terra-Overlay--container');
      });

      Terra.it.matchesScreenshot('before');
    });
  });

  describe('Custom Content', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/overlay/custom-content-overlay'));

    describe('Full Screen Custom Content', () => {
      it('opens fullscreen', () => {
        browser.click('#trigger_fullscreen');
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot({ selector: '#terra-Overlay--fullscreen' });

      it('Custom Content under overlay is not clickable when Overlay is open', () => {
        expect(browser.click.bind(browser, '#random_button')).to.throw(Error);
      });

      it('waits for fullscreen overlay to close', () => {
        const shouldNotExist = true;
        browser.waitForExist('#terra-Overlay--fullscreen', 5000, shouldNotExist);
      });
    });

    describe('Container Custom Content', () => {
      it('opens relative overlay', () => {
        browser.click('#trigger_container');
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot({ selector: '#custom-content-example' });
    });

    describe('Custom Content under overlay container is clickable when overlaycontainer is open', () => {
      it('clicks content on the page', () => {
        browser.click('#random_button');
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot({ selector: '#custom-content-example' });
    });
  });

  describe('Overlay unmounted', () => {
    it('Background scrolling is restored after overlay is unmounted', () => {
      browser.url('/#/raw/tests/terra-overlay/overlay/overlay/removed-overlay');
      browser.click('#fullscreen_overlay');
      expect(browser.getAttribute('html', 'style')).to.not.include('overflow: hidden');
    });
  });

  describe('Light Themed', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/overlay/light-overlay'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot({ selector: '#light-overlay' });
  });

  describe('Dark Themed', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/overlay/dark-overlay'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot({ selector: '#dark-overlay' });
  });

  describe('Clear Themed', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/overlay/clear-overlay'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot({ selector: '#clear-overlay' });
  });
});
