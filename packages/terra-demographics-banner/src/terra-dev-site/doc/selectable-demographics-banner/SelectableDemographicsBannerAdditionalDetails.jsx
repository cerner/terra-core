import React, { useState } from 'react';
import { SelectableDemographicsBanner } from 'terra-demographics-banner';
import demographicsImage from '../assets/demographicsCat.jpg';

const SelectableDemographicsBannerAdditionalDetails = () => {
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
        age="25 Years"
        dateOfBirth="May 9, 1993"
        gender="Male"
        identifiers={{ MRN: 12343, REA: '3JSDA' }}
        personName="Johnathon Doe"
        photo={demographicsImage}
        preferredFirstName="John"
        selectableTileClick={handleDemographicsClick}
        infoButtonClick={handleInfoButtonClick}
      />
      <span>{message}</span>
    </div>
  );
};

export default SelectableDemographicsBannerAdditionalDetails;
