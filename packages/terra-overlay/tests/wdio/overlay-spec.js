const DEFAULT_TIMEOUT = browser.options.waitforTimeout;
const SHOULD_NOT_EXIST = true;

Terra.describeViewports('Overlay', ['huge'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/overlay/default-overlay'));

    Terra.it.validatesElement({ selector: '#default-overlay' });
  });

  describe('Overlay container', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/overlay/container-overlay'));

    Terra.it.validatesElement({ selector: '#overlay-container' });
  });

  describe('Scrollable Full Screen Overlay', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/overlay/fullscreen-scrollable-overlay'));

    Terra.it.validatesElement({ selector: '#scrollable-overlay' });
  });

  describe('Scrollable relative container overlay', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/overlay/container-scrollable-overlay'));

    Terra.it.validatesElement({ selector: '#overlay-container' });
  });

  describe('Overlay on Request-Close', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-overlay/overlay/overlay/on-request-close-overlay');
      browser.moveToObject('#root', 0, 0);
    });

    describe('OnRequestClose-Full Screen Overlay', () => {
      Terra.it.matchesScreenshot('closed');

      it('Clicks on the Full screen overlay button', () => {
        browser.click('#trigger_fullscreen');
      });

      it('Background does not scroll when a fullscreen Overlay is open', () => {
        expect(browser.getAttribute('html', 'style')).contains('overflow: hidden');
      });

      Terra.it.validatesElement('open', { selector: '#terra-Overlay--fullscreen' });

      it('closes overlay on escape keydown', () => {
        browser.keys('Escape');
        browser.waitForExist('#terra-Overlay--fullscreen', DEFAULT_TIMEOUT, SHOULD_NOT_EXIST);
      });

      it('reopens the overlay', () => {
        browser.click('#trigger_fullscreen');
        browser.waitForExist('#terra-Overlay--fullscreen');
      });

      it('closes the overlay when clicking inside of the Overlay', () => {
        browser.click('#terra-Overlay--fullscreen');
        browser.waitForExist('#terra-Overlay--fullscreen', DEFAULT_TIMEOUT, SHOULD_NOT_EXIST);
      });
    });

    describe('OnRequestClose-Container Overlay', () => {
      Terra.it.matchesScreenshot('closed');

      it('Clicks on Container Overlay', () => {
        browser.click('#trigger_container');
      });

      it('Container Overlay- Background can scroll when Overlay relative to container is open', () => {
        expect(browser.getAttribute('html', 'style')).to.not.contain('overflow: hidden');
      });

      Terra.it.validatesElement('open', { selector: '#terra-Overlay--container' });

      it('closes overlay on escape keydown', () => {
        browser.keys('Escape');
        browser.waitForExist('#terra-Overlay--container', DEFAULT_TIMEOUT, SHOULD_NOT_EXIST);
      });

      it('reopens the overlay', () => {
        browser.click('#trigger_container');
        browser.waitForExist('#terra-Overlay--container');
      });

      it('closes the overlay when clicking inside of the Overlay', () => {
        browser.click('#terra-Overlay--container');
        browser.waitForExist('#terra-Overlay--container', DEFAULT_TIMEOUT, SHOULD_NOT_EXIST);
      });
    });
  });

  describe('Custom Content', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/overlay/custom-content-overlay'));

    describe('Full Screen [Custom Content]', () => {
      it('opens fullscreen', () => {
        browser.click('#trigger_fullscreen');
      });

      Terra.it.validatesElement('fullscreen', { selector: '#terra-Overlay--fullscreen' });

      it('Custom Content under overlay is not clickable when Overlay is open', () => {
        expect(browser.click.bind(browser, '#random_button')).to.throw(Error);
      });

      it('waits for fullscreen overlay to close', () => {
        browser.waitForExist('#terra-Overlay--fullscreen', 5000, SHOULD_NOT_EXIST);
      });
    });

    describe('Container [Custom Content]', () => {
      it('opens relative overlay', () => {
        browser.click('#trigger_container');
      });

      Terra.it.validatesElement('relative container', { selector: '#custom-content-example' });
    });

    describe('Custom Content under overlay container is clickable when overlay container is open', () => {
      it('clicks content on the page', () => {
        expect(browser.getText('#random_state')).to.equal('true');
        browser.click('#random_button');
        expect(browser.getText('#random_state')).to.equal('false');
      });
    });
  });

  describe('Overlay unmounted', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/overlay/removed-overlay'));

    it('validates overlay exists and background scrolling is disabled', () => {
      browser.waitForExist('#fullscreen_overlay');
      expect(browser.getAttribute('html', 'style')).to.include('overflow: hidden');
    });

    it('validates background scrolling is restored after overlay is unmounted', () => {
      browser.click('#fullscreen_overlay');
      expect(browser.getAttribute('html', 'style')).to.not.include('overflow: hidden');
    });
  });

  describe('Themes', () => {
    it('displays light theme', () => {
      browser.url('/#/raw/tests/terra-overlay/overlay/overlay/light-overlay');
      Terra.validates.element('light theme', { selector: '#light-overlay' });
    });

    it('displays dark theme', () => {
      browser.url('/#/raw/tests/terra-overlay/overlay/overlay/dark-overlay');
      Terra.validates.element('dark theme', { selector: '#dark-overlay' });
    });

    it('displays clear theme', () => {
      browser.url('/#/raw/tests/terra-overlay/overlay/overlay/clear-overlay');
      Terra.validates.element('clear theme', { selector: '#clear-overlay' });
    });
  });
});
