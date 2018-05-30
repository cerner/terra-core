import React from 'react';
import Image from 'terra-image';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DemographicsBanner from 'terra-demographics-banner/lib/DemographicsBanner';
import demographicsImage from '../assets/demographicsCat.jpg';

const DemographicsBannerAdditionalDetails = () => (
  <DemographicsBanner
    applicationContent={<span>St. Johns Kansas City West Wing Room Cardiac Arrest Unit 253</span>}
    age="25 Years"
    dateOfBirth="May 9, 1993"
    gender="Male"
    identifiers={{ MRN: 12343, REA: '3JSDA' }}
    personName="Johnathon Doe"
    photo={<Image alt="My Cat" src={demographicsImage} />}
    preferredFirstName="John"
  />
);

export default DemographicsBannerAdditionalDetails;
