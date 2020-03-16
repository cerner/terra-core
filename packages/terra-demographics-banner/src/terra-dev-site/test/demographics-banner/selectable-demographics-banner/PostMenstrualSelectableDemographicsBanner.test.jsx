import React, { useState } from 'react';
import SelectableDemographicsBanner from '../../../../selectable-demographics-banner/SelectableDemographicsBanner';
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
        id="postMenstrualDemographics"
        applicationContent={<span>St. Johns Kansas City West Wing Room Cardiac Arrest Unit 253</span>}
        age="10 Weeks"
        dateOfBirth="October 25, 2018"
        gender="Male"
        identifiers={{ MRN: 12343, REA: '3JSDA' }}
        photo={demographicsImage}
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

