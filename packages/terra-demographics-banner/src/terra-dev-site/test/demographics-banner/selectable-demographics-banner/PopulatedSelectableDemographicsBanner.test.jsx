import React, { useState } from 'react';
import SelectableDemographicsBanner from '../../../../SelectableDemographicsBanner';
import demographicsImage from '../../../doc/assets/demographicsCat.jpg';

export default () => {
  const [message, setMessage] = useState('');

  const handleDemographicsClick = () => {
    setMessage('Demographics Banner Clicked');
  };

  return (
    <div>
      <SelectableDemographicsBanner
        id="populated-demographics-banner"
        applicationContent={<span>BW12N / RAD1232</span>}
        age="28 years"
        avatar={{
          alt: 'Johnathon Doe',
          color: 'neutral',
          image: demographicsImage,
          initials: 'JD',
          isAriaHidden: true,
        }}
        dateOfBirth="07/12/1989"
        gender="F"
        identifiers={{ MRN: '00019837', FIN: '1000254085' }}
        isConfidential
        personName="BARSTOWE, GEORGIA"
        preferredFirstName="Geo"
        onClick={handleDemographicsClick}
      />
      <span>{message}</span>
    </div>
  );
};

