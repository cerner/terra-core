describe('Avatar', () => {
  describe('User', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/user-avatar'));
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#user-avatar',
      properties: {
        '--terra-avatar-background-color': 'rgba(0, 0, 255, 0.5)',
        '--terra-avatar-border': '0.07143rem solid rgb(0, 0, 255)',
        '--terra-avatar-box-shadow': 'inset 0 0.07143rem 0.2143rem 5px rgba(255, 0, 0, 0.3)',
        '--terra-avatar-icon-user': 'rgb(0, 100, 0)',
        '--terra-avatar-height': '5rem',
        '--terra-avatar-width': '5rem',
      },
    });
  });

  describe('Two Initials', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/two-initials-avatar'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#two-initials-avatar',
      properties: {
        '--terra-avatar-background-color': 'rgba(0, 0, 255, 0.5)',
        '--terra-avatar-border': '0.07143rem solid rgb(0, 0, 255)',
        '--terra-avatar-box-shadow': 'inset 0 0.07143rem 0.2143rem 5px rgba(255, 0, 0, 0.3)',
        '--terra-avatar-color': 'rgb(0, 0, 255)',
        '--terra-avatar-font-size-large': '2rem',
        '--terra-avatar-height': '5rem',
        '--terra-avatar-width': '5rem',
      },
    });
  });

  describe('Image', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/image-avatar'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#image-avatar',
      properties: {
        '--terra-avatar-background-color': 'rgba(0, 0, 255, 0.5)',
        '--terra-avatar-border': '0.07143rem solid rgb(0, 0, 255)',
        '--terra-avatar-box-shadow': 'inset 0 0.07143rem 0.2143rem 5px rgba(255, 0, 0, 0.3)',
        '--terra-avatar-color': 'rgb(0, 0, 255)',
        '--terra-avatar-font-size-large': '2rem',
        '--terra-avatar-height': '5rem',
        '--terra-avatar-width': '5rem',
      },
    });
  });

  describe('IsDeceased', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/is-deceased-avatar'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#is-deceased-avatar',
      properties: {
        '--terra-avatar-is-deceased-background-color': 'purple',
        '--terra-avatar-image-is-deceased-opacity': '0.5',
      },
    });
  });
});
