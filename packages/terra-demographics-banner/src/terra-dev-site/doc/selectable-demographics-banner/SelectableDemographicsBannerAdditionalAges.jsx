import React, { useState } from 'react';
import SelectableDemographicsBanner from 'terra-demographics-banner/lib/SelectableDemographicsBanner';
import demographicsImage from '../assets/demographicsCat.jpg';

const SelectableDemographicsBannerAdditionalAges = () => {
  const [message, setMessage] = useState('');

  const handleDemographicsClick = () => {
    setMessage('Demographics Banner Clicked');
  };

  const handleInfoButtonClick = () => {
    setMessage('Info Button clicked');
  };

  return (
    <div>
      <SelectableDemographicsBanner
        applicationContent={<span>St. Johns Kansas City West Wing Room Cardiac Arrest Unit 253</span>}
        age="10 Weeks"
        avatar={{
          alt: 'Johnathon Doe',
          color: 'neutral',
          image: demographicsImage,
          initials: 'JD',
          isAriaHidden: true,
        }}
        dateOfBirth="October 25, 2018"
        gender="Male"
        gestationalAge="33 Weeks"
        identifiers={{ MRN: 12343, REA: '3JSDA' }}
        personName="Johnathon Doe"
        postMenstrualAge="43 Weeks"
        preferredFirstName="John"
        selectableTileOnClick={handleDemographicsClick}
        infoButtonOnClick={handleInfoButtonClick}
      />
      <span>{message}</span>
    </div>
  );
};

export default SelectableDemographicsBannerAdditionalAges;
