/* global before, browser, Terra */

describe('Overlay', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/tests/overlay-tests/default'));

    Terra.should.beAccessible({ selector: '#default-overlay' });
    Terra.should.matchScreenshot({ selector: '#default-overlay' });
  });

  describe('Overlay container', () => {
    beforeEach(() => browser.url('/#/tests/overlay-tests/container'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Scrollable Full Screen Overlay', () => {
    beforeEach(() => browser.url('/#/tests/overlay-tests/fullscreen-scrollable'));

    Terra.should.beAccessible({ selector: '#scrollable-overlay' });
    Terra.should.matchScreenshot({ selector: '#scrollable-overlay' });
  });

  describe('Scrollable relative container overlay', () => {
    beforeEach(() => browser.url('/#/tests/overlay-tests/container-scrollable'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Overlay on Request-Close', () => {
    describe('OnRequestClose- Full Screen Overlay', () => {
      before(() => {
        browser.url('/#/tests/overlay-tests/on-request-close');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('Before');

      it('Clicks on the Full screen overlay button', () => {
        browser.click('#trigger_fullscreen');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('After');
    });

    it('Background does not scroll when a fullscreen Overlay is open', () => {
      browser.url('/#/tests/overlay-tests/on-request-close');
      browser.click('#trigger_fullscreen');
      expect(browser.getAttribute('html', 'style')).contains('overflow: hidden');
    });

    describe('Full Screen Overlay- Triggers an onRequestClose on escape keydown', () => {
      before(() => {
        browser.url('/#/tests/overlay-tests/on-request-close');
        browser.click('#trigger_fullscreen');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('Before');

      it('Escape key press', () => {
        browser.keys('Escape');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('After');
    });

    describe('Full Screen Overlay- Triggers an onRequestClose on click inside of the Overlay', () => {
      before(() => {
        browser.url('/#/tests/overlay-tests/on-request-close');
        browser.click('#trigger_fullscreen');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('Before');

      it('Click inside of the overlay', () => {
        browser.click('#terra-Overlay--fullscreen');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('After');
    });

    describe('OnRequestClose- Container Overlay', () => {
      before(() => {
        browser.url('/#/tests/overlay-tests/on-request-close');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('Before');

      it('Clicks on Container Overlay', () => {
        browser.click('#trigger_container');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('After');
    });

    it('Container Overlay- Background can scroll when Overlay relative to contianer is open', () => {
      browser.url('/#/tests/overlay-tests/on-request-close');
      browser.click('#trigger_container');
      expect(browser.getAttribute('html', 'style')).contains('');
    });

    describe('Container Overlay- Triggers an onRequestClose on escape keydown', () => {
      before(() => {
        browser.url('/#/tests/overlay-tests/on-request-close');
        browser.click('#trigger_container');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('Before');

      it('Escape key press', () => {
        browser.keys('Escape');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('After');
    });

    describe('Container Overlay-Triggers an onRequestClose on click inside of the Overlay', () => {
      before(() => {
        browser.url('/#/tests/overlay-tests/on-request-close');
        browser.click('#trigger_container');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('Before');

      it('Clicks on the inside of Overlay', () => {
        browser.click('#terra-Overlay--container');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('After');
    });
  });

  describe('Custom Content', () => {
    const random = function random() {
      try {
        browser.click('#random_button');
      } catch (error) {
        if (error.message.contains('is not clickable')) {
          throw error;
        }
      }
    };

    describe('Full Screen Custom Content', () => {
      before(() => {
        browser.url('/#/tests/overlay-tests/custom-content');
        browser.click('#trigger_fullscreen');
      });
      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    it('Custom Content under overlay is not clickable when Overlay is open', () => {
      browser.url('/#/tests/overlay-tests/custom-content');
      browser.click('#trigger_fullscreen');
      expect(random).to.throw();
    });

    describe('Container Custom Content', () => {
      before(() => {
        browser.url('/#/tests/overlay-tests/custom-content');
        browser.click('#trigger_container');
      });
      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Custom Content under overlay container is clickable when overlaycontainer is open', () => {
      before(() => {
        browser.url('/#/tests/overlay-tests/custom-content');
        browser.click('#trigger_container');
        browser.click('#random_button');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });
  });

  describe('Light Themed', () => {
    beforeEach(() => browser.url('/#/tests/overlay-tests/light-themed'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#light-overlay' });
    Terra.should.themeEachCustomProperty(
      '#light-overlay',
      {
        '--terra-overlay-light-background-color': 'green',
        '--terra-overlay-light-background-image': 'linear-gradient(red, green)',
        '--terra-overlay-light-content-color': 'blue',
      },
    );
  });

  describe('Dark Themed', () => {
    beforeEach(() => browser.url('/#/tests/overlay-tests/dark-themed'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#dark-overlay' });
    Terra.should.themeEachCustomProperty(
      '#dark-overlay',
      {
        '--terra-overlay-dark-background-color': 'blue',
        '--terra-overlay-dark-background-image': 'linear-gradient(blue, green)',
        '--terra-overlay-dark-content-color': 'red',
      },
    );
  });

  describe('Clear Themed', () => {
    beforeEach(() => browser.url('/#/tests/overlay-tests/clear-themed'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#clear-overlay' });
    Terra.should.themeEachCustomProperty(
      '#clear-overlay',
      {
        '--terra-overlay-content-color': 'red',
        '--terra-overlay-content-padding-bottom': '500px',
        '--terra-overlay-content-padding-left': '500px',
        '--terra-overlay-content-padding-right': '500px',
        '--terra-overlay-content-padding-top': '500px',
      },
    );
  });
});
