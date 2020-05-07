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
        id="populated-demographics-banner"
        selectableTileId="selectable-tile"
        applicationContent={<span>St. Johns West Wing Room Cardiac Unit 253</span>}
        age="27 Years"
        avatar={{
          alt: 'Johnathon Doe',
          color: 'neutral',
          image: demographicsImage,
          initials: 'JD',
          isAriaHidden: true,
        }}
        dateOfBirth="May 9, 1993"
        gestationalAge="April 11, 2020"
        postMenstrualAge="May 13, 2020"
        gender="Male"
        identifiers={{ MRN: 12343, REA: '3JSDA' }}
        isConfidential
        personName="Johnathon Doe"
        preferredFirstName="John"
        selectableTileOnClick={handleDemographicsClick}
        infoButtonOnClick={handleInfoButtonClick}
        infoButtonId="info-tile"
      />
      <span>{message}</span>
    </div>
  );
};

