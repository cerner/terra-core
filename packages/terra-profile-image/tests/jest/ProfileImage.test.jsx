import React from 'react';
import ProfileImage from '../../src/ProfileImage';

/* Default Profile Image */
it('should render a Terra image with a placeholder prop', () => {
  const wrapper = shallow(<ProfileImage src="profile.jpg" height="75" width="75" />);
  expect(wrapper).toMatchSnapshot();
});
