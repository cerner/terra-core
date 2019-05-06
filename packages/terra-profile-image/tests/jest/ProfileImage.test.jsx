import React from 'react';
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
