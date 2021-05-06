import React, { useState } from 'react';
import ProfileImage from '../../../ProfileImage';
import exampleProfileImage from '../../assets/150x150.jpg';

const ProfileImageDefault = () => {
  const [variant, setVariant] = useState('thumbnail');

  function handleOnSelect(event) {
    setVariant(event.target.value);
  }
  return (
    <div>
      <ProfileImage alt="Toggle fit style" src={exampleProfileImage} variant={variant} height="100" width="100" />
      <ProfileImage alt="Toggle fit style" src="invalid.jpg" variant={variant} height="100" width="100" />
      <p><label htmlFor="fitType">Select a Fit Type:</label></p>
      <select id="fitType" name="fitType" value={variant} onChange={handleOnSelect}>
        <option value="default">default</option>
        <option value="circle">circle</option>
        <option value="rounded">rounded</option>
        <option value="thumbnail">thumbnail</option>
      </select>
    </div>
  );
};

export default ProfileImageDefault;
