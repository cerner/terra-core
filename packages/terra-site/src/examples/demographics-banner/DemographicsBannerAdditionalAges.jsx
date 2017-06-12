import React from 'react';
import DemographicsBanner from 'terra-demographics-banner';
import Image from 'terra-image';

import demographicsImage from '../../assets/demographicsCat.jpg';

const DemographicsBannerAdditionalAges = () => (
  <DemographicsBanner
    applicationContent={<span className="risk-score">5%</span>}
    age="25 Years"
    dateOfBirth="May 9, 1993"
    gender="Male"
    gestationalAge="April 5, 2016"
    identifiers={{ MRN: 12343, REA: '3JSDA' }}
    photo={<Image alt="My Cat" src={demographicsImage} />}
    personName="Johnathon Doe"
    postMenstrualAge="April 7, 2016"
    preferredFirstName="John"
  />
);

export default DemographicsBannerAdditionalAges;
