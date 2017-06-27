import React from 'react';
import ProfileImage from '../../src/ProfileImage';

/* Avatar image is displayed while the profile image is loading */
it('should render a hidden profile image and a visible avatar image', () => {
  const wrapper = shallow(<ProfileImage src="profile.jpg" height="75" width="75" variant="thumbnail" isFluid />);
  expect(wrapper).toMatchSnapshot();
});

/* Profile image successfully loaded */
it('should render the profile image', () => {
  const wrapper = shallow(<ProfileImage src="profile.jpg" height="75" width="75" variant="thumbnail" isFluid />);
  wrapper.setState({ isLoading: false });
  expect(wrapper).toMatchSnapshot();
});

/* Profile image failed to load */
it('should render the avatar image', () => {
  const wrapper = shallow(<ProfileImage src="profile.jpg" height="75" width="75" variant="thumbnail" isFluid />);
  wrapper.setState({ isLoading: false, isError: true });
  expect(wrapper).toMatchSnapshot();
});
