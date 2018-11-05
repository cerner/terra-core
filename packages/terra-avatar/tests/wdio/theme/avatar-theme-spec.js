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
        '--terra-avatar-icon-user-background-image': 'rgb(0, 100, 0)',
        '--terra-avatar-height': '5rem',
        '--terra-avatar-width': '5rem',
        '--terra-avatar-image-after-box-shadow': 'inset 0 0 4px 4px pink',
        '--terra-avatar-one-background-color': 'purple',
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
        '--terra-avatar-font-size': '2rem',
        '--terra-avatar-height': '5rem',
        '--terra-avatar-width': '5rem',
        '--terra-avatar-image-after-box-shadow': 'inset 0 0 4px 4px pink',
        '--terra-avatar-one-background-color': 'purple',
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
        '--terra-avatar-color': 'rgb(0, 0, 255)',
        '--terra-avatar-font-size': '2rem',
        '--terra-avatar-height': '5rem',
        '--terra-avatar-width': '5rem',
        '--terra-avatar-image-after-box-shadow': 'inset 0 0.07143rem 0.2143rem 5px rgba(255, 0, 0, 0.3)',
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

  describe('Default Facility', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/facility/default'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#is-deceased-avatar',
      properties: {
        '--terra-avatar-background-color': 'rgba(0, 0, 255, 0.5)',
        '--terra-avatar-border': '0.07143rem solid rgb(0, 0, 255)',
        '--terra-avatar-box-shadow': 'inset 0 0.07143rem 0.2143rem 5px rgba(255, 0, 0, 0.3)',
        '--terra-avatar-icon-facility-background-image': 'rgb(0, 100, 0)',
        '--terra-avatar-height': '5rem',
        '--terra-avatar-width': '5rem',
        '--terra-avatar-image-after-box-shadow': 'inset 0 0 4px 4px pink',
        '--terra-avatar-nine-background-color': 'purple',
      },
    });
  });

  describe('Default Shared User', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/shared-user/shared-user'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#shared-user',
      properties: {
        '--terra-avatar-background-color': 'rgba(0, 0, 255, 0.5)',
        '--terra-avatar-border': '0.07143rem solid rgb(0, 0, 255)',
        '--terra-avatar-box-shadow': 'inset 0 0.07143rem 0.2143rem 5px rgba(255, 0, 0, 0.3)',
        '--terra-avatar-icon-shared-user-background-image': 'rgb(0, 100, 0)',
        '--terra-avatar-height': '5rem',
        '--terra-avatar-width': '5rem',
        '--terra-avatar-image-after-box-shadow': 'inset 0 0 4px 4px pink',
        '--terra-avatar-one-background-color': 'purple',
      },
    });
  });
});
