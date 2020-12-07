const DEFAULT_TIMEOUT = browser.options.waitforTimeout;
const SHOULD_NOT_EXIST = true;

Terra.describeViewports('Overlay', ['huge'], () => {
  it('should display default Overlay', () => {
    browser.url('/raw/tests/terra-overlay/overlay/overlay/default-overlay');

    Terra.validates.element('default', { selector: '#default-overlay' });
  });

  it('should display Overlay container', () => {
    browser.url('/raw/tests/terra-overlay/overlay/overlay/container-overlay');

    Terra.validates.element('container', { selector: '#overlay-container' });
  });

  it('should display scrollable full screen Overlay', () => {
    browser.url('/raw/tests/terra-overlay/overlay/overlay/fullscreen-scrollable-overlay');

    Terra.validates.element('scrollable full screen', { selector: '#scrollable-overlay' });
  });

  it('should display scrollable relative container overlay', () => {
    browser.url('/raw/tests/terra-overlay/overlay/overlay/container-scrollable-overlay');

    Terra.validates.element('scrollable relative container', { selector: '#overlay-container' });
  });

  describe('Overlay on Request-Close', () => {
    before(() => {
      browser.url('/raw/tests/terra-overlay/overlay/overlay/on-request-close-overlay');
      browser.moveToObject('#root', 0, 0);
    });

    describe('OnRequestClose-Full Screen Overlay', () => {
      it('should display closed Overlay', () => {
        Terra.validates.element('closed');
      });

      it('Clicks on the Full screen overlay button', () => {
        browser.click('#trigger_fullscreen');
        expect(browser.getAttribute('#root', 'inert')).to.be.oneOf(['', 'true']); // chrome returns true, firefox returns ''
        expect(browser.getAttribute('#root', 'aria-hidden')).to.equal('true');
      });

      it('Background does not scroll when a fullscreen Overlay is open', () => {
        expect(browser.getAttribute('html', 'style')).contains('overflow: hidden');
      });

      it('should display an open Overlay', () => {
        Terra.validates.element('open', { selector: '#terra-Overlay--fullscreen' });
      });

      it('closes overlay on escape keydown', () => {
        browser.keys('Escape');
        browser.waitForExist('#terra-Overlay--fullscreen', DEFAULT_TIMEOUT, SHOULD_NOT_EXIST);
        expect(browser.getAttribute('#root', 'inert')).to.be.oneOf([null, 'false']); // chrome returns false, firefox returns null
        expect(browser.getAttribute('#root', 'aria-hidden')).to.equal(null);
      });

      it('reopens the overlay', () => {
        browser.click('#trigger_fullscreen');
        browser.waitForExist('#terra-Overlay--fullscreen');
        expect(browser.getAttribute('#root', 'inert')).to.be.oneOf(['', 'true']); // chrome returns true, firefox returns ''
        expect(browser.getAttribute('#root', 'aria-hidden')).to.equal('true');
      });

      it('closes the overlay when clicking inside of the Overlay', () => {
        browser.click('#terra-Overlay--fullscreen');
        browser.waitForExist('#terra-Overlay--fullscreen', DEFAULT_TIMEOUT, SHOULD_NOT_EXIST);
        expect(browser.getAttribute('#root', 'inert')).to.be.oneOf([null, 'false']); // chrome returns false, firefox returns null
        expect(browser.getAttribute('#root', 'aria-hidden')).to.equal(null);
      });
    });

    describe('OnRequestClose-Full Screen Overlay With Updates', () => {
      it('should display closed Overlay', () => {
        Terra.validates.element('closed');
      });

      it('Clicks on the Full screen overlay button', () => {
        browser.click('#trigger_fullscreen');
        expect(browser.getAttribute('#root', 'inert')).to.be.oneOf(['', 'true']); // chrome returns true, firefox returns ''
        expect(browser.getAttribute('#root', 'aria-hidden')).to.equal('true');
        expect(browser.getAttribute('#root', 'data-overlay-count')).to.equal('1');
      });

      it('Background does not scroll when a fullscreen Overlay is open', () => {
        expect(browser.getAttribute('html', 'style')).contains('overflow: hidden');
      });

      it('should display an open Overlay', () => {
        Terra.validates.element('open', { selector: '#terra-Overlay--fullscreen' });
      });

      it('does not increment overlay count during update', () => {
        /* If IE support is removed, convert below to use event constructors. */
        // eslint-disable-next-line prefer-arrow-callback
        browser.execute(function forceUpdateForTest() {
          const updateEvent = document.createEvent('Event');
          updateEvent.initEvent('overlay.forceUpdateForTest', true, true);
          window.dispatchEvent(updateEvent);
        });

        expect(browser.getAttribute('#root', 'inert')).to.be.oneOf(['', 'true']); // chrome returns true, firefox returns ''
        expect(browser.getAttribute('#root', 'aria-hidden')).to.equal('true');
        expect(browser.getAttribute('#root', 'data-overlay-count')).to.equal('1');
      });

      it('closes the overlay when clicking inside of the Overlay', () => {
        browser.click('#terra-Overlay--fullscreen');
        browser.waitForExist('#terra-Overlay--fullscreen', DEFAULT_TIMEOUT, SHOULD_NOT_EXIST);
        expect(browser.getAttribute('#root', 'inert')).to.be.oneOf([null, 'false']); // chrome returns false, firefox returns null
        expect(browser.getAttribute('#root', 'aria-hidden')).to.equal(null);
      });
    });

    describe('OnRequestClose-Container Overlay', () => {
      it('should display closed Overlay', () => {
        Terra.validates.element('closed');
      });

      it('Clicks on Container Overlay', () => {
        browser.click('#trigger_container');
        expect(browser.getAttribute('#test-overlay-container > [data-terra-overlay-container-content="true"]', 'inert')).to.be.oneOf(['', 'true']); // chrome returns true, firefox returns ''
        expect(browser.getAttribute('#test-overlay-container > [data-terra-overlay-container-content="true"]', 'aria-hidden')).to.equal('true');
      });

      it('Container Overlay- Background can scroll when Overlay relative to container is open', () => {
        expect(browser.getAttribute('html', 'style')).to.not.contain('overflow: hidden');
      });

      it('should display an open Overlay', () => {
        Terra.validates.element('open', { selector: '#terra-Overlay--container' });
      });

      it('closes overlay on escape keydown', () => {
        browser.keys('Escape');
        browser.waitForExist('#terra-Overlay--container', DEFAULT_TIMEOUT, SHOULD_NOT_EXIST);
        expect(browser.getAttribute('#test-overlay-container > [data-terra-overlay-container-content="true"]', 'inert')).to.be.oneOf([null, 'false']); // chrome returns false, firefox returns null
        expect(browser.getAttribute('#test-overlay-container > [data-terra-overlay-container-content="true"]', 'aria-hidden')).to.equal(null);
      });

      it('reopens the overlay', () => {
        browser.click('#trigger_container');
        browser.waitForExist('#terra-Overlay--container');
        expect(browser.getAttribute('#test-overlay-container > [data-terra-overlay-container-content="true"]', 'inert')).to.be.oneOf(['', 'true']); // chrome returns true, firefox returns ''
        expect(browser.getAttribute('#test-overlay-container > [data-terra-overlay-container-content="true"]', 'aria-hidden')).to.equal('true');
      });

      it('closes the overlay when clicking inside of the Overlay', () => {
        browser.click('#terra-Overlay--container');
        browser.waitForExist('#terra-Overlay--container', DEFAULT_TIMEOUT, SHOULD_NOT_EXIST);
        expect(browser.getAttribute('#test-overlay-container > [data-terra-overlay-container-content="true"]', 'inert')).to.be.oneOf([null, 'false']); // chrome returns false, firefox returns null
        expect(browser.getAttribute('#test-overlay-container > [data-terra-overlay-container-content="true"]', 'aria-hidden')).to.equal(null);
      });
    });
  });

  describe('Custom Content', () => {
    before(() => browser.url('/raw/tests/terra-overlay/overlay/overlay/custom-content-overlay'));

    describe('Full Screen [Custom Content]', () => {
      it('opens fullscreen', () => {
        browser.click('#trigger_fullscreen');
        Terra.validates.element('fullscreen', { selector: '#terra-Overlay--fullscreen' });
      });

      it('Custom Content under overlay is not clickable when Overlay is open', () => {
        expect(() => browser.click('#random_button')).to.throw('not clickable');
      });

      it('closes fullscreen overlay', () => {
        browser.click('#close_overlay');
        browser.waitForExist('#terra-Overlay--fullscreen', DEFAULT_TIMEOUT, SHOULD_NOT_EXIST);
      });
    });

    describe('Container [Custom Content]', () => {
      it('should open relative overlay', () => {
        browser.click('#trigger_container');
        Terra.validates.element('relative container', { selector: '#custom-content-example' });
      });
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
    before(() => browser.url('/raw/tests/terra-overlay/overlay/overlay/removed-overlay'));

    it('validates overlay exists and background scrolling is disabled', () => {
      browser.waitForExist('#fullscreen_overlay');
      expect(browser.getAttribute('html', 'style')).to.include('overflow: hidden');
    });

    it('validates background scrolling is restored after overlay is unmounted', () => {
      browser.click('#fullscreen_overlay');
      expect(browser.getAttribute('html', 'style')).to.not.include('overflow: hidden');
    });
  });

  describe('should display Themes', () => {
    it('displays light theme', () => {
      browser.url('/raw/tests/terra-overlay/overlay/overlay/light-overlay');
      Terra.validates.element('light theme', { selector: '#light-overlay' });
    });

    it('displays dark theme', () => {
      browser.url('/raw/tests/terra-overlay/overlay/overlay/dark-overlay');
      Terra.validates.element('dark theme', { selector: '#dark-overlay' });
    });

    it('displays clear theme', () => {
      browser.url('/raw/tests/terra-overlay/overlay/overlay/clear-overlay');
      Terra.validates.element('clear theme', { selector: '#clear-overlay' });
    });
  });
});
