import React, { useState } from 'react';
import SelectableDemographicsBanner from 'terra-demographics-banner/lib/SelectableDemographicsBanner';
import demographicsImage from '../assets/demographicsCat.jpg';

const SelectableDemographicsBannerDeceased = () => {
  const [message, setMessage] = useState('');

  const handleDemographicsClick = () => {
    setMessage('Demographics Banner Clicked');
  };

  return (
    <div>
      <SelectableDemographicsBanner
        age="25 Years"
        avatar={{
          alt: 'Johnathon Doe',
          color: 'neutral',
          image: demographicsImage,
          initials: 'JD',
          isAriaHidden: true,
        }}
        dateOfBirth="May 9, 1992"
        deceasedDate="March 12, 2017"
        gender="True Male"
        identifiers={{ MRN: 12343, REA: '3JSDA' }}
        personName="Johnathon Doe"
        preferredFirstName="John"
        onClick={handleDemographicsClick}
      />
      <span>{message}</span>
    </div>
  );
};

export default SelectableDemographicsBannerDeceased;
