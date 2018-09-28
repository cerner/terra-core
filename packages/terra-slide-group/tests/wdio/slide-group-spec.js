describe('Slide Group', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-slide-group/slide-group/default-slide-group'));

    Terra.should.matchScreenshot({ selector: '#SlideGroup' });
    Terra.should.beAccessible();
  });

  describe('One Item', () => {
    before(() => browser.url('/#/raw/tests/terra-slide-group/slide-group/one-item-slide-group'));

    Terra.should.matchScreenshot({ selector: '#SlideGroup' });
    Terra.should.beAccessible();
  });

  describe('Non Animated', () => {
    before(() => browser.url('/#/raw/tests/terra-slide-group/slide-group/non-animated-slide-group'));

    it('should advance the slide', () => {
      browser.click('#increment-1');
    });

    Terra.should.matchScreenshot('slide 2');

    it('should go back a slide', () => {
      browser.click('#decrement-2');
    });

    Terra.should.matchScreenshot('slide 1');
    Terra.should.beAccessible();
  });

  describe('Animated', () => {
    before(() => browser.url('/#/raw/tests/terra-slide-group/slide-group/animated-slide-group'));

    it('should advance the slide', () => {
      browser.click('#increment-1');

      browser.pause(350);
    });

    Terra.should.matchScreenshot('slide 2');

    it('should go back a slide', () => {
      browser.click('#decrement-2');

      browser.pause(350);
    });

    Terra.should.matchScreenshot('slide 1');
    Terra.should.beAccessible();
  });
});
