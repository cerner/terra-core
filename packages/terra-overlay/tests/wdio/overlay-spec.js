describe('Overlay', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/overlay/default-overlay'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#default-overlay' });
  });

  describe('Overlay container', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/overlay/container-overlay'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#overlay-container' });
  });

  describe('Scrollable Full Screen Overlay', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/overlay/fullscreen-scrollable-overlay'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#scrollable-overlay' });
  });

  describe('Scrollable relative container overlay', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-overlay/overlay/overlay/container-scrollable-overlay'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#overlay-container' });
  });

  describe('Overlay on Request-Close', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-overlay/overlay/overlay/on-request-close-overlay');
    });

    describe('OnRequestClose- Full Screen Overlay', () => {
      Terra.should.matchScreenshot('before');

      it('Clicks on the Full screen overlay button', () => {
        browser.click('#trigger_fullscreen');
      });

      it('Background does not scroll when a fullscreen Overlay is open', () => {
        expect(browser.getAttribute('html', 'style')).contains('overflow: hidden');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('after', { selector: '#terra-Overlay--fullscreen' });

      describe('Full Screen Overlay- Triggers an onRequestClose on escape keydown', () => {
        it('Escape key press', () => {
          browser.keys('Escape');
        });

        Terra.should.matchScreenshot('before');
      });

      describe('Full Screen Overlay- Triggers an onRequestClose on click inside of the Overlay', () => {
        it('reopens the overlay', () => {
          browser.click('#trigger_fullscreen');
        });

        Terra.should.matchScreenshot('after');

        it('Click inside of the overlay', () => {
          browser.click('#terra-Overlay--fullscreen');
        });

        Terra.should.matchScreenshot('before');
      });
    });

    describe('OnRequestClose- Container Overlay', () => {
      Terra.should.matchScreenshot('before');

      it('Clicks on Container Overlay', () => {
        browser.click('#trigger_container');
      });

      it('Container Overlay- Background can scroll when Overlay relative to container is open', () => {
        expect(browser.getAttribute('html', 'style')).contains('');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('after', { selector: '#terra-Overlay--container' });
    });

    describe('Container Overlay- Triggers an onRequestClose on escape keydown', () => {
      it('Escape key press', () => {
        browser.keys('Escape');
      });

      Terra.should.matchScreenshot('before');
    });

    describe('Container Overlay-Triggers an onRequestClose on click inside of the Overlay', () => {
      it('reopens container overlay', () => {
        browser.click('#trigger_container');
      });

      Terra.should.matchScreenshot('after', { selector: '#terra-Overlay--container' });

      it('Clicks on the inside of Overlay', () => {
        browser.click('#terra-Overlay--container');
      });

      Terra.should.matchScreenshot('before');
    });
  });

  describe('Custom Content', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/overlay/custom-content-overlay'));

    describe('Full Screen Custom Content', () => {
      it('opens fullscreen', () => {
        browser.click('#trigger_fullscreen');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot({ selector: '#terra-Overlay--fullscreen' });

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

      Terra.should.beAccessible();
      Terra.should.matchScreenshot({ selector: '#custom-content-example' });
    });

    describe('Custom Content under overlay container is clickable when overlaycontainer is open', () => {
      it('clicks content on the page', () => {
        browser.click('#random_button');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot({ selector: '#custom-content-example' });
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

    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#light-overlay' });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#light-overlay',
      properties: {
        '--terra-overlay-light-background': 'green',
        '--terra-overlay-light-background-image': 'linear-gradient(red, green)',
        '--terra-overlay-light-content-color': 'blue',
      },
    });
  });

  describe('Dark Themed', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/overlay/dark-overlay'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#dark-overlay' });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#dark-overlay',
      properties: {
        '--terra-overlay-dark-background': 'blue',
        '--terra-overlay-dark-background-image': 'linear-gradient(blue, green)',
        '--terra-overlay-dark-content-color': 'red',
      },
    });
  });

  describe('Clear Themed', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/overlay/clear-overlay'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#clear-overlay' });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#clear-overlay',
      properties: {
        '--terra-overlay-content-color': 'red',
        '--terra-overlay-content-padding-bottom': '500px',
        '--terra-overlay-content-padding-left': '500px',
        '--terra-overlay-content-padding-right': '500px',
        '--terra-overlay-content-padding-top': '500px',
      },
    });
  });
});
