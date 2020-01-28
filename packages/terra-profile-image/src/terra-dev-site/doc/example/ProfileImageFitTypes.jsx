import React from 'react';
import PropTypes from 'prop-types';
import ProfileImage from 'terra-profile-image';
import FitTypesWrapper from 'terra-profile-image/lib/terra-dev-site/doc/example/common/FitTypesWrapper';
import exampleProfileImage from 'terra-profile-image/lib/terra-dev-site/assets/170x251.jpg';

const propTypes = { fit: PropTypes.string };

const ProfileImageFitTypes = ({
  ...props
}) => (
  <ProfileImage alt="Toggle fit style" src={exampleProfileImage} fit={props.fit} height="100" width="100" />
);

ProfileImageFitTypes.propTypes = propTypes;
export default FitTypesWrapper(ProfileImageFitTypes);
