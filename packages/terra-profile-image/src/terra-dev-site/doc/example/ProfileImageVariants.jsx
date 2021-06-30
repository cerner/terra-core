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
      <ProfileImage alt="profile image for Martin Moon, photograph from space of rising star over a planet's silhouette" src={exampleProfileImage} variant={variant} height="100" width="100" />
      <p><label htmlFor="variantType">Select an image styling &#39;variant&#39; type:</label></p>
      <select id="variantType" name="variantType" value={variant} onChange={handleOnSelect}>
        <option value="default">default</option>
        <option value="circle">circle</option>
        <option value="rounded">rounded</option>
        <option value="thumbnail">thumbnail</option>
      </select>
    </div>
  );
};

export default ProfileImageDefault;
