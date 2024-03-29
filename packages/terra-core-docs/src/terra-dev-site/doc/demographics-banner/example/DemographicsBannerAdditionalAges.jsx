import React from 'react';
import Image from 'terra-image';
import DemographicsBanner from 'terra-demographics-banner';
import demographicsImage from '../assets/demographicsCat.jpg';

const DemographicsBannerAdditionalAges = () => (
  <DemographicsBanner
    applicationContent={<span className="risk-score">5%</span>}
    age="10 Weeks"
    dateOfBirth="October 25, 2018"
    gender="Male"
    gestationalAge="33 Weeks"
    identifiers={{ MRN: 12343, REA: '3JSDA' }}
    identifiersLongForm={{ MRN: 'Medical Record Number' }}
    photo={<Image alt="My Cat" src={demographicsImage} />}
    personName="Johnathon Doe"
    postMenstrualAge="43 Weeks"
    preferredFirstName="John"
  />
);

export default DemographicsBannerAdditionalAges;
