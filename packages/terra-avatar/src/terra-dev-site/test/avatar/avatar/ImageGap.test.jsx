import React from 'react';
import { Avatar, Facility } from '../../../../Avatar';
import exampleAvatarImage from '../../../assets/150x150.jpg';

export default () => (
  <div>
    <div style={{ border: '5px solid #f00' }}>
      <Avatar id="image-avatar" image={exampleAvatarImage} alt="placeholder" />
    </div>
    <div style={{ border: '5px solid #f00' }}>
      <Facility id="facility-avatar" alt="facility" />
    </div>
  </div>
);
