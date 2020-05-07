import React, { useState } from 'react';
import SelectableDemographicsBanner from '../../../../SelectableDemographicsBanner';
import demographicsImage from '../../../doc/assets/demographicsCat.jpg';

export default () => {
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
        selectableTileId="additionalDemographics"
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
        selectableTileOnClick={handleDemographicsClick}
        infoButtonOnClick={handleInfoButtonClick}
        infoButtonId="infoButton"
      />
      <span>{message}</span>
    </div>
  );
};

