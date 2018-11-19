describe('Avatar', () => {
  describe('Icon Avatar', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/user-avatar'));
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#user-avatar',
      properties: {
        '--terra-avatar-v2-border': '0.07143rem solid rgb(0, 0, 255)',
        '--terra-avatar-v2-initial-height': '5rem',
        '--terra-avatar-v2-initial-width': '5rem',
        '--terra-avatar-v2-icon-user-background-image': 'rgb(0, 100, 0)',
        '--terra-avatar-v2-icon-user-height': '90%',
        '--terra-avatar-v2-icon-user-margin-top': '0.3571rem',
        '--terra-avatar-v2-icon-user-width': '90%',
        '--terra-avatar-v2-one-background-color': 'purple',
        '--terra-avatar-v2-one-after-box-shadow': 'inset 0 0 0 2px purple',
      },
    });
  });

  describe('Two Initials Avatar', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/two-initials-avatar'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#two-initials-avatar',
      properties: {
        '--terra-avatar-v2-background-color': 'rgba(0, 0, 255, 0.5)',
        '--terra-avatar-v2-border': '0.07143rem solid rgb(0, 0, 255)',
        '--terra-avatar-v2-color': 'rgb(0, 0, 255)',
        '--terra-avatar-v2-font-size': '2rem',
        '--terra-avatar-v2-initial-height': '5rem',
        '--terra-avatar-v2-initial-width': '5rem',
        '--terra-avatar-v2-two-background-color': 'blue',
        '--terra-avatar-v2-two-after-box-shadow': 'inset 0 0 0 2px purple',
      },
    });
  });

  describe('Image Avatar', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/image-avatar'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#image-avatar',
      properties: {
        '--terra-avatar-v2-background-color': 'rgba(0, 0, 255, 0.5)',
        '--terra-avatar-v2-border': '0.07143rem solid rgb(0, 0, 255)',
        '--terra-avatar-v2-font-size': '2rem',
        '--terra-avatar-v2-initial-height': '5rem',
        '--terra-avatar-v2-initial-width': '5rem',
        '--terra-avatar-v2-after-box-shadow': 'inset 0 0 0 2px blue',
      },
    });
  });

  describe('Deceased Avatar', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/is-deceased-avatar'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#is-deceased-avatar',
      properties: {
        '--terra-avatar-v2-is-deceased-background-color': 'black',
        '--terra-avatar-v2-image-is-deceased-opacity': '0.2',
        '--terra-avatar-v2-is-deceased-after-box-shadow': 'inset 0 0 0 5px black',
      },
    });
  });

  describe('Deceased Initials Avatar', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/is-deceased-initials-avatar'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#is-deceased-initials-avatar',
      properties: {
        '--terra-avatar-v2-is-deceased-background-color': 'black',
        '--terra-avatar-v2-is-deceased-after-box-shadow': 'inset 0 0 0 5px black',
      },
    });
  });

  describe('Deceased Image Avatar', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/is-deceased-image-avatar'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#is-deceased-image-avatar',
      properties: {
        '--terra-avatar-v2-is-deceased-background-color': 'black',
        '--terra-avatar-v2-image-is-deceased-opacity': '0.2',
      },
    });
  });
});

describe('Facility', () => {
  describe('Icon Facility', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/facility/default-facility'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#default-facility',
      properties: {
        '--terra-avatar-v2-background-color': 'rgba(0, 0, 255, 0.5)',
        '--terra-avatar-v2-border': '0.07143rem solid rgb(0, 0, 255)',
        '--terra-avatar-v2-icon-facility-background-image': 'rgb(0, 100, 0)',
        '--terra-avatar-v2-icon-facility-height': '95%',
        '--terra-avatar-v2-icon-facility-width': '95%',
        '--terra-avatar-v2-initial-height': '5rem',
        '--terra-avatar-v2-initial-width': '5rem',
        '--terra-avatar-v2-three-background-color': 'orange',
        '--terra-avatar-v2-three-after-box-shadow': 'inset 0 0 0 2px orange',
      },
    });
  });

  describe('Image Facility', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/facility/image-facility'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#image-facility',
      properties: {
        '--terra-avatar-v2-background-color': 'rgba(0, 0, 255, 0.5)',
        '--terra-avatar-v2-border': '0.07143rem solid rgb(0, 0, 255)',
        '--terra-avatar-v2-after-box-shadow': 'inset 0 0 0 4px black',
        '--terra-avatar-v2-icon-facility-background-image': 'rgb(0, 100, 0)',
        '--terra-avatar-v2-initial-height': '5rem',
        '--terra-avatar-v2-initial-width': '5rem',
      },
    });
  });
});

describe('Shared User', () => {
  describe('Icon Shared User', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/shared-user/default-shared-user'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#shared-user',
      properties: {
        '--terra-avatar-v2-background-color': 'rgba(0, 0, 255, 0.5)',
        '--terra-avatar-v2-border': '0.07143rem solid rgb(0, 0, 255)',
        '--terra-avatar-v2-icon-shared-user-background-image': 'rgb(0, 100, 0)',
        '--terra-avatar-v2-icon-multi-user-height': '100%',
        '--terra-avatar-v2-icon-multi-user-width': '100%',
        '--terra-avatar-v2-initial-height': '5rem',
        '--terra-avatar-v2-initial-width': '5rem',
        '--terra-avatar-v2-four-background-color': 'orange',
        '--terra-avatar-v2-four-after-box-shadow': 'inset 0 0 0 2px orange',
      },
    });
  });
});
