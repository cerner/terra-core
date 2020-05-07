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
        id="deceased-demographics-banner"
        applicationContent={<span className="risk-score">5%</span>}
        age="27 Years"
        avatar={{
          alt: 'Johnathon Doe',
          color: 'neutral',
          image: demographicsImage,
          initials: 'JD',
          isAriaHidden: true,
        }}
        dateOfBirth="May 9, 1993"
        deceasedDate="March 12, 2020"
        gender="Male"
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
