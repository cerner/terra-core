/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import ToggleSectionHeaderTests from './ToggleSectionHeaderTests';

// Test Cases
import DefaultToggleSectionHeader from './DefaultToggleSectionHeader';

const routes = (
  <div>
    <Route path="/tests/toggle-section-header" component={ToggleSectionHeaderTests} />
    <Route path="/tests/toggle-section-header/default-toggle-section-header" component={DefaultToggleSectionHeader} />
  </div>
);

export default routes;
