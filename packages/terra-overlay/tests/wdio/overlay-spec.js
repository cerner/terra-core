const DEFAULT_TIMEOUT = 3000;
const SHOULD_NOT_EXIST = true;

Terra.describeViewports('Overlay', ['huge'], () => {
  it('should display default Overlay', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/overlay/overlay/default-overlay');

    Terra.validates.element('default', { selector: '#default-overlay' });
  });

  it('should display Overlay container', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/overlay/overlay/container-overlay');

    Terra.validates.element('container', { selector: '#overlay-container' });
  });

  it('should display scrollable full screen Overlay', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/overlay/overlay/fullscreen-scrollable-overlay');

    Terra.validates.element('scrollable full screen', { selector: '#scrollable-overlay' });
  });

  it('should display scrollable relative container overlay', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/overlay/overlay/container-scrollable-overlay');

    Terra.validates.element('scrollable relative container', { selector: '#overlay-container' });
  });

  describe('Overlay on Request-Close', () => {
    before(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/overlay/overlay/on-request-close-overlay');
      $('#root').moveTo({ xOffset: 0, yOffset: 0 });
    });

    describe('OnRequestClose-Full Screen Overlay', () => {
      it('should display closed Overlay', () => {
        Terra.validates.element('closed');
      });

      it('Clicks on the Full screen overlay button', () => {
        $('#trigger_fullscreen').click();
        const inertAttr = $('#root').getAttribute('inert');
        expect(['', 'true']).toContain(inertAttr); // chrome returns true, firefox returns ''
        expect($('#root')).toHaveAttribute('aria-hidden', 'true');
      });

      it('Background does not scroll when a fullscreen Overlay is open', () => {
        expect($('html')).toHaveAttributeContaining('style', 'overflow: hidden');
      });

      it('should display an open Overlay', () => {
        Terra.validates.element('open', { selector: '#terra-Overlay--fullscreen' });
      });

      it('closes overlay on escape keydown', () => {
        browser.keys('Escape');
        $('#terra-Overlay--fullscreen').waitForExist({ timeout: DEFAULT_TIMEOUT, reverse: SHOULD_NOT_EXIST });
        const inertAttr = $('#root').getAttribute('inert');
        expect([null, 'false']).toContain(inertAttr); // chrome returns false, firefox returns null
        expect($('#root')).not.toHaveAttribute('aria-hidden');
      });

      it('reopens the overlay', () => {
        $('#trigger_fullscreen').click();
        $('#terra-Overlay--fullscreen').waitForExist();
        const inertAttr = $('#root').getAttribute('inert');
        expect(['', 'true']).toContain(inertAttr); // chrome returns true, firefox returns ''
        expect($('#root')).toHaveAttribute('aria-hidden', 'true');
      });

      it('closes the overlay when clicking inside of the Overlay', () => {
        $('#terra-Overlay--fullscreen').click();
        $('#terra-Overlay--fullscreen').waitForExist({ timeout: DEFAULT_TIMEOUT, reverse: SHOULD_NOT_EXIST });
        const inertAttr = $('#root').getAttribute('inert');
        expect([null, 'false']).toContain(inertAttr); // chrome returns false, firefox returns null
        expect($('#root')).not.toHaveAttribute('aria-hidden');
      });
    });

    describe('OnRequestClose-Full Screen Overlay With Updates', () => {
      it('should display closed Overlay', () => {
        Terra.validates.element('request close');
      });

      it('Clicks on the Full screen overlay button', () => {
        $('#trigger_fullscreen').click();
        const inertAttr = $('#root').getAttribute('inert');
        expect(['', 'true']).toContain(inertAttr); // chrome returns true, firefox returns ''
        expect($('#root')).toHaveAttribute('aria-hidden', 'true');
        expect($('#root')).toHaveAttribute('data-overlay-count', '1');
      });

      it('Background does not scroll when a fullscreen Overlay is open', () => {
        expect($('html')).toHaveAttributeContaining('style', 'overflow: hidden');
      });

      it('should display an open Overlay', () => {
        Terra.validates.element('request close open', { selector: '#terra-Overlay--fullscreen' });
      });

      it('does not increment overlay count during update', () => {
        /* If IE support is removed, convert below to use event constructors. */
        // eslint-disable-next-line prefer-arrow-callback
        browser.execute(function forceUpdateForTest() {
          const updateEvent = document.createEvent('Event');
          updateEvent.initEvent('overlay.forceUpdateForTest', true, true);
          window.dispatchEvent(updateEvent);
        });

        const inertAttr = $('#root').getAttribute('inert');
        expect(['', 'true']).toContain(inertAttr); // chrome returns true, firefox returns ''
        expect($('#root')).toHaveAttribute('aria-hidden', 'true');
        expect($('#root')).toHaveAttribute('data-overlay-count', '1');
      });

      it('closes the overlay when clicking inside of the Overlay', () => {
        $('#terra-Overlay--fullscreen').click();
        $('#terra-Overlay--fullscreen').waitForExist({ timeout: DEFAULT_TIMEOUT, reverse: SHOULD_NOT_EXIST });
        const inertAttr = $('#root').getAttribute('inert');
        expect([null, 'false']).toContain(inertAttr); // chrome returns false, firefox returns null
        expect($('#root')).not.toHaveAttribute('aria-hidden');
      });
    });

    describe('OnRequestClose-Container Overlay', () => {
      it('should display closed Overlay', () => {
        Terra.validates.element('container overlay closed');
      });

      it('Clicks on Container Overlay', () => {
        $('#trigger_container').click();
        const inertAttr = $('#test-overlay-container > [data-terra-overlay-container-content="true"]').getAttribute('inert');
        expect(['', 'true']).toContain(inertAttr); // chrome returns true, firefox returns ''
        expect($('#test-overlay-container > [data-terra-overlay-container-content="true"]')).toHaveAttribute('aria-hidden', 'true');
      });

      it('Container Overlay- Background can scroll when Overlay relative to container is open', () => {
        expect($('html')).not.toHaveAttributeContaining('style', 'overflow: hidden');
      });

      it('should display an open Overlay', () => {
        Terra.validates.element('container overlay open', { selector: '#terra-Overlay--container' });
      });

      it('closes overlay on escape keydown', () => {
        browser.keys('Escape');
        $('#terra-Overlay--container').waitForExist({ timeout: DEFAULT_TIMEOUT, reverse: SHOULD_NOT_EXIST });
        const inertAttr = $('#test-overlay-container > [data-terra-overlay-container-content="true"]').getAttribute('inert');
        expect([null, 'false']).toContain(inertAttr); // chrome returns false, firefox returns null
        expect($('#test-overlay-container > [data-terra-overlay-container-content="true"]')).not.toHaveAttribute('aria-hidden');
      });

      it('reopens the overlay', () => {
        $('#trigger_container').click();
        $('#terra-Overlay--container').waitForExist();
        const inertAttr = $('#test-overlay-container > [data-terra-overlay-container-content="true"]').getAttribute('inert');
        expect(['', 'true']).toContain(inertAttr); // chrome returns true, firefox returns ''
        expect($('#test-overlay-container > [data-terra-overlay-container-content="true"]')).toHaveAttribute('aria-hidden', 'true');
      });

      it('closes the overlay when clicking inside of the Overlay', () => {
        $('#terra-Overlay--container').click();
        $('#terra-Overlay--container').waitForExist({ timeout: DEFAULT_TIMEOUT, reverse: SHOULD_NOT_EXIST });
        const inertAttr = $('#test-overlay-container > [data-terra-overlay-container-content="true"]').getAttribute('inert');
        expect([null, 'false']).toContain(inertAttr); // chrome returns false, firefox returns null
        expect($('#test-overlay-container > [data-terra-overlay-container-content="true"]')).not.toHaveAttribute('aria-hidden');
      });
    });
  });

  describe('Custom Content', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/overlay/overlay/custom-content-overlay'));

    describe('Full Screen [Custom Content]', () => {
      it('opens fullscreen', () => {
        $('#trigger_fullscreen').click();
        Terra.validates.element('custom content fullscreen', { selector: '#terra-Overlay--fullscreen' });
      });

      it('Custom Content under overlay is not clickable when Overlay is open', () => {
        expect($('#random_button').isClickable()).toBe(false);
      });

      it('closes fullscreen overlay', () => {
        $('#close_overlay').click();
        $('#terra-Overlay--fullscreen').waitForExist({ timeout: DEFAULT_TIMEOUT, reverse: SHOULD_NOT_EXIST });
      });
    });

    describe('Container [Custom Content]', () => {
      it('should open relative overlay', () => {
        $('#trigger_container').click();
        Terra.validates.element('custom content relative container', { selector: '#custom-content-example' });
      });
    });

    describe('Custom Content under overlay container is clickable when overlay container is open', () => {
      it('clicks content on the page', () => {
        expect($('#random_state').getText()).toEqual('true');
        $('#random_button').click();
        expect($('#random_state').getText()).toEqual('false');
      });
    });
  });

  describe('Overlay unmounted', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/overlay/overlay/removed-overlay'));

    it('validates overlay exists and background scrolling is disabled', () => {
      $('#fullscreen_overlay').waitForExist();
      expect($('html')).toHaveAttributeContaining('style', 'overflow: hidden');
    });

    it('validates background scrolling is restored after overlay is unmounted', () => {
      $('#fullscreen_overlay').click();
      expect($('html')).not.toHaveAttributeContaining('style', 'overflow: hidden');
    });
  });

  describe('should display Themes', () => {
    it('displays light theme', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/overlay/overlay/light-overlay');
      Terra.validates.element('light theme', { selector: '#light-overlay' });
    });

    it('displays dark theme', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/overlay/overlay/dark-overlay');
      Terra.validates.element('dark theme', { selector: '#dark-overlay' });
    });

    it('displays clear theme', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/overlay/overlay/clear-overlay');
      Terra.validates.element('clear theme', { selector: '#clear-overlay' });
    });
  });
});
