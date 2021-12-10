import React from 'react';
import PropTypes from 'prop-types';
import ProfileImage from 'terra-profile-image';
import exampleProfileImage from '../assets/170x251.jpg';
import FitTypesWrapper from './common/FitTypesWrapper';

const propTypes = { fit: PropTypes.string };

const ProfileImageFitTypes = ({
  ...props
}) => (
  <div>
    <ProfileImage alt="profile image for Francis Forest, photograph of two tall trees in mountain forest landscape" src={exampleProfileImage} fit={props.fit} height="75" width="75" />
  </div>
);

ProfileImageFitTypes.propTypes = propTypes;
export default FitTypesWrapper(ProfileImageFitTypes);
