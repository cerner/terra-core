describe('Avatar', () => {
  describe('User', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/user-avatar'));
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#user-avatar',
      properties: {
        '--terra-avatar-background-color': 'rgba(0, 0, 255, 0.5)',
        '--terra-avatar-border': '0.07143rem solid rgb(0, 0, 255)',
        '--terra-avatar-icon-user-background-image': 'rgb(0, 100, 0)',
        '--terra-avatar-height': '5rem',
        '--terra-avatar-width': '5rem',
        '--terra-avatar-one-background-color': 'purple',
        '--terra-avatar-one-after-box-shadow': 'inset 0 0 0 2px purple',
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
        '--terra-avatar-color': 'rgb(0, 0, 255)',
        '--terra-avatar-font-size': '2rem',
        '--terra-avatar-height': '5rem',
        '--terra-avatar-width': '5rem',
        '--terra-avatar-two-background-color': 'blue',
        '--terra-avatar-two-after-box-shadow': 'inset 0 0 0 2px blue',
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
        '--terra-avatar-is-deceased-background-color': 'black',
        '--terra-avatar-image-is-deceased-opacity': '0.2',
        '--terra-avatar-is-deceased-after-box-shadow': 'inset 0 0 0 5px black',
      },
    });
  });

  describe('Default Facility', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/facility/default-facility'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#default-facility',
      properties: {
        '--terra-avatar-background-color': 'rgba(0, 0, 255, 0.5)',
        '--terra-avatar-border': '0.07143rem solid rgb(0, 0, 255)',
        '--terra-avatar-icon-facility-background-image': 'rgb(0, 100, 0)',
        '--terra-avatar-height': '5rem',
        '--terra-avatar-width': '5rem',
        '--terra-avatar-three-background-color': 'orange',
        '--terra-avatar-three-after-box-shadow': 'inset 0 0 0 2px orange',
      },
    });
  });

  describe('Image Facility', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/facility/image-facility'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#image-facility',
      properties: {
        '--terra-avatar-background-color': 'rgba(0, 0, 255, 0.5)',
        '--terra-avatar-border': '0.07143rem solid rgb(0, 0, 255)',
        '--terra-avatar-after-box-shadow': 'inset 0 0 0 4px black',
        '--terra-avatar-icon-facility-background-image': 'rgb(0, 100, 0)',
        '--terra-avatar-height': '5rem',
        '--terra-avatar-width': '5rem',
      },
    });
  });

  describe('Default Shared User', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/shared-user/default-shared-user'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#shared-user',
      properties: {
        '--terra-avatar-background-color': 'rgba(0, 0, 255, 0.5)',
        '--terra-avatar-border': '0.07143rem solid rgb(0, 0, 255)',
        '--terra-avatar-icon-shared-user-background-image': 'rgb(0, 100, 0)',
        '--terra-avatar-icon-multi-user-height': '100%',
        '--terra-avatar-icon-multi-user-width': '100%',
        '--terra-avatar-height': '5rem',
        '--terra-avatar-width': '5rem',
        '--terra-avatar-four-background-color': 'orange',
        '--terra-avatar-four-after-box-shadow': 'inset 0 0 0 2px orange',
      },
    });
  });
});
