describe('Overlay', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/overlay/default-overlay'));

    Terra.should.beAccessible({ selector: '#default-overlay' });
    Terra.should.matchScreenshot({ selector: '#default-overlay' });
  });

  describe('Overlay container', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/overlay/container-overlay'));

    Terra.should.beAccessible({ selector: '#overlay-container' });
    Terra.should.matchScreenshot({ selector: '#overlay-container' });
  });

  describe('Scrollable Full Screen Overlay', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-overlay/overlay/overlay/fullscreen-scrollable-overlay'));

    Terra.should.beAccessible({ selector: '#scrollable-overlay' });
    Terra.should.matchScreenshot({ selector: '#scrollable-overlay' });
  });

  describe('Scrollable relative container overlay', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-overlay/overlay/overlay/container-scrollable-overlay'));

    Terra.should.beAccessible({ selector: '#overlay-container' });
    Terra.should.matchScreenshot({ selector: '#overlay-container' });
  });

  describe('Overlay on Request-Close', () => {
    describe('OnRequestClose- Full Screen Overlay', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-overlay/overlay/overlay/on-request-close-overlay');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('Before');

      it('Clicks on the Full screen overlay button', () => {
        browser.click('#trigger_fullscreen');
      });

      Terra.should.beAccessible({ selector: '#terra-Overlay--fullscreen' });
      Terra.should.matchScreenshot('After', { selector: '#terra-Overlay--fullscreen' });
    });

    it('Background does not scroll when a fullscreen Overlay is open', () => {
      browser.url('/#/raw/tests/terra-overlay/overlay/overlay/on-request-close-overlay');
      browser.click('#trigger_fullscreen');
      expect(browser.getAttribute('html', 'style')).contains('overflow: hidden');
    });

    describe('Full Screen Overlay- Triggers an onRequestClose on escape keydown', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-overlay/overlay/overlay/on-request-close-overlay');
        browser.click('#trigger_fullscreen');
      });

      Terra.should.beAccessible({ selector: '#terra-Overlay--fullscreen' });
      Terra.should.matchScreenshot('Before', { selector: '#terra-Overlay--fullscreen' });

      it('Escape key press', () => {
        browser.keys('Escape');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('After');
    });

    describe('Full Screen Overlay- Triggers an onRequestClose on click inside of the Overlay', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-overlay/overlay/overlay/on-request-close-overlay');
        browser.click('#trigger_fullscreen');
      });

      Terra.should.beAccessible({ selector: '#terra-Overlay--fullscreen' });
      Terra.should.matchScreenshot('Before', { selector: '#terra-Overlay--fullscreen' });

      it('Click inside of the overlay', () => {
        browser.click('#terra-Overlay--fullscreen');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('After');
    });

    describe('OnRequestClose- Container Overlay', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-overlay/overlay/overlay/on-request-close-overlay');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('Before');

      it('Clicks on Container Overlay', () => {
        browser.click('#trigger_container');
      });

      Terra.should.beAccessible({ selector: '#terra-Overlay--container' });
      Terra.should.matchScreenshot('After', { selector: '#terra-Overlay--container' });
    });

    it('Container Overlay- Background can scroll when Overlay relative to contianer is open', () => {
      browser.url('/#/raw/tests/terra-overlay/overlay/overlay/on-request-close-overlay');
      browser.click('#trigger_container');
      expect(browser.getAttribute('html', 'style')).contains('');
    });

    describe('Container Overlay- Triggers an onRequestClose on escape keydown', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-overlay/overlay/overlay/on-request-close-overlay');
        browser.click('#trigger_container');
      });

      Terra.should.beAccessible({ selector: '#terra-Overlay--container' });
      Terra.should.matchScreenshot('Before', { selector: '#terra-Overlay--container' });

      it('Escape key press', () => {
        browser.keys('Escape');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('After');
    });

    describe('Container Overlay-Triggers an onRequestClose on click inside of the Overlay', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-overlay/overlay/overlay/on-request-close-overlay');
        browser.click('#trigger_container');
      });

      Terra.should.beAccessible({ selector: '#terra-Overlay--container' });
      Terra.should.matchScreenshot('Before', { selector: '#terra-Overlay--container' });

      it('Clicks on the inside of Overlay', () => {
        browser.click('#terra-Overlay--container');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('After');
    });
  });

  describe('Custom Content', () => {
    describe('Full Screen Custom Content', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-overlay/overlay/overlay/custom-content-overlay');
        browser.click('#trigger_fullscreen');
      });
      Terra.should.beAccessible({ selector: '#terra-Overlay--fullscreen' });
      Terra.should.matchScreenshot({ selector: '#terra-Overlay--fullscreen' });
    });

    it('Custom Content under overlay is not clickable when Overlay is open', () => {
      browser.url('/#/raw/tests/terra-overlay/overlay/overlay/custom-content-overlay');
      browser.click('#trigger_fullscreen');
      expect(browser.click.bind(browser, '#random_button')).to.throw(Error);
    });

    describe('Container Custom Content', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-overlay/overlay/overlay/custom-content-overlay');
        browser.click('#trigger_container');
      });
      Terra.should.beAccessible({ selector: '#custom-content-example' });
      Terra.should.matchScreenshot({ selector: '#custom-content-example' });
    });

    describe('Custom Content under overlay container is clickable when overlaycontainer is open', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-overlay/overlay/overlay/custom-content-overlay');
        browser.click('#trigger_container');
        browser.click('#random_button');
      });

      Terra.should.beAccessible({ selector: '#custom-content-example' });
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
