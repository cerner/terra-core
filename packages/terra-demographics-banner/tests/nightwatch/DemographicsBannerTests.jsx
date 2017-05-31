/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const DemographicsBannerTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/demographics-banner-tests/blank">Default DemographicsBanner</Link></li>
      <li><Link to="/tests/demographics-banner-tests/populated">Populated DemographicsBanner</Link></li>
      <li><Link to="/tests/demographics-banner-tests/deceased">Deceased DemographicsBanner</Link></li>
      <li><Link to="/tests/demographics-banner-tests/deceased_no_label">Deceased DemographicsBanner No Label</Link></li>
      <li><Link to="/tests/demographics-banner-tests/post_menstrual_age_no_label">DemographicsBanner Post Menstrural Age with no label</Link></li>
      <li><Link to="/tests/demographics-banner-tests/gestational_age_no_label">Deceased Gestational Age with no label</Link></li>
    </ul>
  </div>
);

export default DemographicsBannerTests;
