import React, { useState } from 'react';
import SelectableDemographicsBanner from 'terra-demographics-banner/lib/SelectableDemographicsBanner';
import demographicsImage from '../assets/demographicsCat.jpg';

const SelectableDemographicsBannerAdditionalDetails = () => {
  const [message, setMessage] = useState('');

  const handleDemographicsClick = () => {
    setMessage('Demographics Banner Clicked');
  };

  return (
    <div>
      <SelectableDemographicsBanner
        applicationContent={<span>St. Johns Kansas City West Wing Room Cardiac Arrest Unit 253</span>}
        age="25 Years"
        avatar={{
          alt: 'Johnathon Doe',
          color: 'neutral',
          image: demographicsImage,
          initials: 'JD',
          isAriaHidden: true,
        }}
        dateOfBirth="May 9, 1993"
        gender="Male"
        identifiers={{ MRN: 12343, REA: '3JSDA' }}
        personName="Johnathon Doe"
        preferredFirstName="John"
        onClick={handleDemographicsClick}
      />
      <span>{message}</span>
    </div>
  );
};

export default SelectableDemographicsBannerAdditionalDetails;
