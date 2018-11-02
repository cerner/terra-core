describe('Facility', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/default-facility'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#facility',
      properties: {
        '--terra-avatar-background-color': 'rgba(0, 0, 255, 0.5)',
        '--terra-avatar-border': '0.07143rem solid rgb(0, 0, 255)',
        '--terra-avatar-box-shadow': 'inset 0 0.07143rem 0.2143rem 5px rgba(255, 0, 0, 0.3)',
        '--terra-avatar-icon-facility': 'rgb(0, 0, 100)',
        '--terra-avatar-size': '5rem',
      },
    });
  });
});
