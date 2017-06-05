import React from 'react';
import DemographicsBanner from 'terra-demographics-banner';
import Image from 'terra-image';

import demographicsImage from '../../assets/demographicsCat.jpg';

const DemographicsBannerDeceased = () => (
  <DemographicsBanner
    age="25 Years"
    dateOfBirth="May 9, 1992"
    dateOfBirthLabel="DOB"
    deceasedDate="March 12, 2017"
    deceasedDateLabel="Deceased"
    gender="True Male"
    identifiers={{ MRN: 12343, REA: '3JSDA' }}
    photo={<Image alt="My Cat" src={demographicsImage} />}
    personName="Johnathon Doe"
    preferredFirstName="John"
  />
);

export default DemographicsBannerDeceased;
