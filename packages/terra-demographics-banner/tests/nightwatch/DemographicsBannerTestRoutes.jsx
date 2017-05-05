/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import DemographicsBannerTests from './DemographicsBannerTests';
import BlankDemographicsBanner from './BlankDemographicsBanner';
import PopulatedDemographicsBanner from './PopulatedDemographicsBanner';
import DeceasedDemographicsBanner from './DeceasedDemographicsBanner';

const routes = (
  <div>
    <Route path="/tests/demographics-banner-tests" component={DemographicsBannerTests} />
    <Route path="/tests/demographics-banner-tests/blank" component={BlankDemographicsBanner} />
    <Route path="/tests/demographics-banner-tests/populated" component={PopulatedDemographicsBanner} />
    <Route path="/tests/demographics-banner-tests/deceased" component={DeceasedDemographicsBanner} />
  </div>
);

export default routes;
