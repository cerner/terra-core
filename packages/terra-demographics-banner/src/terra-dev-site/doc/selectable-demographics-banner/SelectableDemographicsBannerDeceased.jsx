import React, { useState } from 'react';
import { SelectableDemographicsBanner } from 'terra-demographics-banner';
import demographicsImage from '../assets/demographicsCat.jpg';

const SelectableDemographicsBannerDeceased = () => {
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
        age="25 Years"
        dateOfBirth="May 9, 1992"
        deceasedDate="March 12, 2017"
        gender="True Male"
        identifiers={{ MRN: 12343, REA: '3JSDA' }}
        photo={demographicsImage}
        personName="Johnathon Doe"
        preferredFirstName="John"
        selectableTileClick={handleDemographicsClick}
        infoButtonClick={handleInfoButtonClick}
      />
      <span>{message}</span>
    </div>
  );
};

export default SelectableDemographicsBannerDeceased;
