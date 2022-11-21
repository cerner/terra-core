import React, { useState } from 'react';
import DropdownButton, { Item } from 'terra-dropdown-button';
import PropTypes from 'prop-types';
import ProfileImage from 'terra-profile-image';
import exampleProfileImage from '../assets/150x150.jpg';

const Dropdown = () => (
  <ProfileImage alt="profile image for Martin Moon, photograph from space of rising star over a planet's silhouette" src={exampleProfileImage} width="75" height="75" aria-describedby="caption-example-1" />
);

Dropdown.prototype = {
  ariaLabel: PropTypes.string,
};

const ProfileImageHigherOrderComponent = () => {
  const [message, setMessage] = useState('No option clicked');

  return (
    <div>
      <ProfileImage>
        <Dropdown />
      </ProfileImage>
      <React.Fragment>
        <DropdownButton
          label="Dropdown"
          variant="ghost"
        >
          <Item label="Your Profile" onSelect={() => setMessage('You are in profile')} />
          <Item label="Your organization" onSelect={() => setMessage('You are in organization')} />
          <Item label="Your enterprise" onSelect={() => setMessage('You are in  enterprise')} />
          <Item label="Your projects" onSelect={() => setMessage('You are in projects')} />
        </DropdownButton>
        <p>{message}</p>
      </React.Fragment>

    </div>

  );
};

export default ProfileImageHigherOrderComponent;
