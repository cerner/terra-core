import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import ProfileImage from '../../src/ProfileImage';

/* Default Profile Image */
it('should render a Terra image with a placeholder prop', () => {
  const wrapper = shallow(<ProfileImage src="profile.jpg" height="75" width="75" alt="A profile image" />);
  expect(wrapper).toMatchSnapshot();
});

/* Profile Image source is not provided */
it('should render an avatar image without Source prop', () => {
  const wrapper = shallow(<ProfileImage alt="Default" height="75" width="75" />);
  expect(wrapper).toMatchSnapshot();
});

/* Profile Image with fit as contain */
it('should render a profile image with fit style as contain', () => {
  const wrapper = shallow(<ProfileImage src="profile.jpg" height="75" width="75" fit="contain" alt="A profile image" />);
  expect(wrapper).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  const wrapper = mount(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <ProfileImage src="profile.jpg" height="75" width="75" alt="A profile image" />
    </ThemeContextProvider>,
  );
  expect(wrapper).toMatchSnapshot();
});
