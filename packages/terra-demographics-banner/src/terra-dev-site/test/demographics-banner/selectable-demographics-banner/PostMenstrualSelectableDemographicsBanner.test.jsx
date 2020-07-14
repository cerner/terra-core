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
        id="post-menstrual-demographics-banner"
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
        gender="M"
        genderAria="Male"
        identifiers={[
          {
            label: 'MRN',
            value: '12345',
            identifierAria: 'MRN 1 2 3 4 5',
          },
          {
            label: 'REA',
            value: '3JSDA',
            identifierAria: 'R E A 3JSDA',
          },
        ]}
        personName="Johnathon Doe"
        postMenstrualAge="May 13, 2020"
        preferredFirstName="John"
        onClick={handleDemographicsClick}
      />
      <span>{message}</span>
    </div>
  );
};

