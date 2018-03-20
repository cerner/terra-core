/* global beforeEach, browser, Terra */

describe('Avatar', () => {
  describe('User', () => {
    beforeEach(() => browser.url('/#/raw/tests/avatar/user-avatar'));

    Terra.should.beAccessible({ selector: '#user-avatar' });
    Terra.should.matchScreenshot({ selector: '#user-avatar' });
    Terra.should.themeEachCustomProperty(
      '#user-avatar',
      {
        '--terra-avatar-background-color': 'rgba(0, 0, 255, 0.5)',
        '--terra-avatar-border': '0.07143rem solid rgb(0, 0, 255)',
        '--terra-avatar-box-shadow': 'inset 0 0.07143rem 0.2143rem 5px rgba(255, 0, 0, 0.3)',
        '--terra-avatar-icon-user': 'rgb(0, 100, 0)',
        '--terra-avatar-size': '5rem',
      },
    );

    it('Expect user avatar to have avatar class', () => {
      expect(browser.getAttribute('#user-avatar', 'class')).contains('avatar');
    });
  });

  describe('Facility', () => {
    beforeEach(() => browser.url('/#/raw/tests/avatar/facility-avatar'));

    Terra.should.beAccessible({ selector: '#facility-avatar' });
    Terra.should.matchScreenshot({ selector: '#facility-avatar' });
    Terra.should.themeEachCustomProperty(
      '#facility-avatar',
      {
        '--terra-avatar-background-color': 'rgba(0, 0, 255, 0.5)',
        '--terra-avatar-border': '0.07143rem solid rgb(0, 0, 255)',
        '--terra-avatar-box-shadow': 'inset 0 0.07143rem 0.2143rem 5px rgba(255, 0, 0, 0.3)',
        '--terra-avatar-icon-facility': 'rgb(0, 0, 100)',
        '--terra-avatar-size': '5rem',
      },
    );

    it('Expect facility avatar to have avatar class', () => {
      expect(browser.getAttribute('#facility-avatar', 'class')).contains('avatar');
    });
  });

  describe('Image', () => {
    beforeEach(() => browser.url('/#/raw/tests/avatar/image-avatar'));

    Terra.should.beAccessible({ selector: '#image-avatar' });
    Terra.should.matchScreenshot({ selector: '#image-avatar' });
    Terra.should.themeEachCustomProperty(
      '#image-avatar',
      {
        '--terra-avatar-border': '0.07143rem solid rgb(0, 0, 255)',
        '--terra-avatar-box-shadow': 'inset 0 0.07143rem 0.2143rem 5px rgba(255, 0, 0, 0.3)',
        '--terra-avatar-size': '5rem',
      },
    );

    it('Expect image avatar to have image class', () => {
      expect(browser.getAttribute('#image-avatar', 'class')).contains('avatar');
    });
  });

  describe('Two Initials', () => {
    beforeEach(() => browser.url('/#/raw/tests/avatar/two-initials-avatar'));

    Terra.should.beAccessible({ selector: '#two-initials-avatar' });
    Terra.should.matchScreenshot({ selector: '#two-initials-avatar' });
    Terra.should.themeEachCustomProperty(
      '#two-initials-avatar',
      {
        '--terra-avatar-background-color': 'rgba(0, 0, 255, 0.5)',
        '--terra-avatar-border': '0.07143rem solid rgb(0, 0, 255)',
        '--terra-avatar-box-shadow': 'inset 0 0.07143rem 0.2143rem 5px rgba(255, 0, 0, 0.3)',
        '--terra-avatar-color': 'rgb(0, 0, 255)',
        '--terra-avatar-font-size-large': '2rem',
        '--terra-avatar-size': '5rem',
      },
    );

    it('Expect two initials avatar to have avatar class', () => {
      expect(browser.getAttribute('#two-initials-avatar', 'class')).contains('avatar');
    });
  });

  describe('Three Initials', () => {
    beforeEach(() => browser.url('/#/raw/tests/avatar/three-initials-avatar'));

    Terra.should.beAccessible({ selector: '#three-initials-avatar' });
    Terra.should.matchScreenshot({ selector: '#three-initials-avatar' });
    Terra.should.themeEachCustomProperty(
      '#three-initials-avatar',
      {
        '--terra-avatar-background-color': 'rgba(0, 0, 255, 0.5)',
        '--terra-avatar-border': '0.07143rem solid rgb(0, 0, 255)',
        '--terra-avatar-box-shadow': 'inset 0 0.07143rem 0.2143rem 5px rgba(255, 0, 0, 0.3)',
        '--terra-avatar-color': 'rgb(0, 0, 255)',
        '--terra-avatar-font-size-small': '0.8rem',
        '--terra-avatar-size': '5rem',
      },
    );

    it('Expect three initials avatar to have avatar class', () => {
      expect(browser.getAttribute('#three-initials-avatar', 'class')).contains('avatar');
    });
  });
});
