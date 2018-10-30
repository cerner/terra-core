import React from 'react';
import { Avatar } from '../../../Avatar';
import exampleAvatarImage from '../../assets/150x150.jpg';

export default () => (
  <div>
    <div style={{ border: '5px solid #f00' }}>
      <Avatar id="image-avatar" image={exampleAvatarImage} alt="placeholder" variant="user" ariaLabel="user" />
    </div>
    <div style={{ border: '5px solid #f00' }}>
      <Avatar id="facility-avatar" variant="facility" ariaLabel="facility" />
    </div>
  </div>
);
