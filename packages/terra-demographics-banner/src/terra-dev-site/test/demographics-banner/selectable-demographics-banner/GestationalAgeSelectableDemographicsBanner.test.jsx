import React, { useState } from 'react';
import Image from 'terra-image';
import SelectableDemographicsBanner from '../../../../SelectableDemographicsBanner';
import demographicsImage from '../../../doc/assets/demographicsCat.jpg';

export default () => {
  const [message, setMessage] = useState('');

  const handleDemographicsClick = () => {
    setMessage('Demographics banner clicked');
  };

  return (
    <div>
      <SelectableDemographicsBanner
        id="gestational-demographics-banner"
        applicationContent={<span>St. Johns Kansas City West Wing Room Cardiac Arrest Unit 253</span>}
        age="27 Years"
        color="two"
        dateOfBirth={{ value: 'May 9, 1993', ariaLabel: 'May 9, 1993' }}
        gender="M"
        genderAria="Male"
        gestationalAge="April 11, 2020"
        personName="Johnathon Doe"
        photo={<Image alt="My Cat" src={demographicsImage} />}
        preferredFirstName="John"
        onClick={handleDemographicsClick}
      />
      <span>{message}</span>
    </div>
  );
};

