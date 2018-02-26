/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import SectionHeaderTests from './SectionHeaderTests';

// Test Cases
import DefaultSectionHeader from './DefaultSectionHeader';

const routes = (
  <div>
    <Route path="/tests/section-header" component={SectionHeaderTests} />
    <Route path="/tests/section-header/default-section-header" component={DefaultSectionHeader} />
  </div>
);

export default routes;
