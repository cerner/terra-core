import React from 'react';
import Image from 'terra-image';
import DemographicsBanner from 'terra-demographics-banner';
import demographicsCat from '../../doc/demographics-banner/assets/demographicsCat.jpg';

export default () => (
  <DemographicsBanner
    id="populated-demographics"
    applicationContent={<span>St. Johns West Wing Room Cardiac Unit 253</span>}
    age="25 Years"
    dateOfBirth="May 9, 1993"
    gestationalAge="May 11, 1993"
    postMenstrualAge="May 13, 1993"
    gender="Male"
    identifiers={{ MRN: 12343, REA: '3JSDA' }}
    personName="Johnathon Doe"
    photo={<Image alt="My Cat" src={demographicsCat} />}
    preferredFirstName="John"
  />
);
