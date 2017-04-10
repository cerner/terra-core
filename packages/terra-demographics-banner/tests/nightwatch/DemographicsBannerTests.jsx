/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const DemographicsBannerTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/demographics-banner-tests/blank">Default DemographicsBanner</Link></li>
      <li><Link to="/tests/demographics-banner-tests/populated">Populated DemographicsBanner</Link></li>
      <li><Link to="/tests/demographics-banner-tests/deceased">Deceased DemographicsBanner</Link></li>
    </ul>
  </div>
);

export default DemographicsBannerTests;
