import React from 'react';
import PropTypes from 'prop-types';
import ProfileImag from './ProfileImg';

const Droupdown = () => (
  <ProfileImag />
);

Droupdown.prototype = {
  ariaLabel: PropTypes.string,
};

const ProfileimageHigherOrderComp = () => (
  <div>
    <ProfileImag>
      <Droupdown />
    </ProfileImag>
    <select>
      <option>your Profile</option>
      <option>your organization</option>
      <option>your enterprise</option>
    </select>
  </div>
);

export default ProfileimageHigherOrderComp;
