/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import ToggleSectionHeaderTests from './ToggleSectionHeaderTests';

// Test Cases
import DefaultToggleSectionHeader from './DefaultToggleSectionHeader';
import OpenToggleSectionHeader from './OpenToggleSectionHeader';

const routes = (
  <div>
    <Route path="/tests/toggle-section-header-tests" component={ToggleSectionHeaderTests} />
    <Route path="/tests/toggle-section-header-tests/default-toggle-section-header" component={DefaultToggleSectionHeader} />
    <Route path="/tests/toggle-section-header-tests/open-toggle-section-header" component={OpenToggleSectionHeader} />
  </div>
);

export default routes;
