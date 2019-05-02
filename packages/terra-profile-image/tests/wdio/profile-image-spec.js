describe('Profile Image', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-profile-image/profile-image/profile-image-default'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Failed', () => {
    before(() => browser.url('/#/raw/tests/terra-profile-image/profile-image/profile-image-failed'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      /*
       * Below style is the equivalent of having
       * @include terra-inline-svg-var('--terra-profile-image-placeholder-background-image', '<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fill="#0059a8" d="M39 25h6v23H0V3h23v6H6v33h33V25zm-21.4 9.6l24-24L48 17V0H31l6.4 6.4-24 24 4.2 4.2z"></path></svg>');
       * in a :root block and is used because the above cannot be used with themeEachCustomProperty
       */
      testName: 'themed',
      properties: {
        '--terra-profile-image-placeholder-background-image': 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20viewBox%3D%220%200%2048%2048%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22%230059a8%22%20d%3D%22M39%2025h6v23H0V3h23v6H6v33h33V25zm-21.4%209.6l24-24L48%2017V0H31l6.4%206.4-24%2024%204.2%204.2z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E")',
      },
    });
  });
});
