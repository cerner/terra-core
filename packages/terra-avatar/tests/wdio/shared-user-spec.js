describe('Shared User', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/shared-user/shared-user'));

    Terra.should.beAccessible({ selector: '#shared-user' });
    Terra.should.matchScreenshot({ selector: '#shared-user' });
  });
});
