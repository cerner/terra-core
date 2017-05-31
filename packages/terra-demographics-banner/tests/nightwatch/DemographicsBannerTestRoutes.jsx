/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import DemographicsBannerTests from './DemographicsBannerTests';
import BlankDemographicsBanner from './BlankDemographicsBanner';
import PopulatedDemographicsBanner from './PopulatedDemographicsBanner';
import DeceasedDemographicsBanner from './DeceasedDemographicsBanner';
import DeceasedDemographicsBannerNoLabel from './DeceasedDemographicsBannerNoLabel';
import PostMenstruralAgeDemographicsBannerNoLabel from './PostMenstruralAgeDemographicsBannerNoLabel';
import GestationalAgeDemographicsBannerNoLabel from './GestationalAgeDemographicsBannerNoLabel';

const routes = (
  <div>
    <Route path="/tests/demographics-banner-tests" component={DemographicsBannerTests} />
    <Route path="/tests/demographics-banner-tests/blank" component={BlankDemographicsBanner} />
    <Route path="/tests/demographics-banner-tests/populated" component={PopulatedDemographicsBanner} />
    <Route path="/tests/demographics-banner-tests/deceased" component={DeceasedDemographicsBanner} />
    <Route path="/tests/demographics-banner-tests/deceased_no_label" component={DeceasedDemographicsBannerNoLabel} />
    <Route path="/tests/demographics-banner-tests/post_menstrual_age_no_label" component={PostMenstruralAgeDemographicsBannerNoLabel} />
    <Route path="/tests/demographics-banner-tests/gestational_age_no_label" component={GestationalAgeDemographicsBannerNoLabel} />
  </div>
);

export default routes;
