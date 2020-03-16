import React, { useState } from 'react';
import SelectableDemographicsBanner from '../../../../selectable-demographics-banner/SelectableDemographicsBanner';

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
        id="deceasedDemographics"
        age="25 Years"
        dateOfBirth="May 9, 1992"
        deceasedDate="March 12, 2017"
        gender="True Male"
        identifiers={{ MRN: 12343, REA: '3JSDA' }}
        personName="Johnathon Doe"
        preferredFirstName="John"
        selectableTileOnClick={handleDemographicsClick}
        infoButtonOnClick={handleInfoButtonClick}
      />
      <span>{message}</span>
    </div>
  );
};
