import React from 'react';
import Base from 'terra-base';

import Image from '../../../terra-image/lib/Image';
import DemographicsBanner from '../../lib/DemographicsBanner';
import demographicsCat from '../assets/demographicsCat.jpg';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () =>
  <Base locale={locale}>
    <DemographicsBanner
      id="populated-demographics"
      applicationContent={<p>St. Johns West Wing Room Cardiac Unit 253</p>}
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
  </Base>;
