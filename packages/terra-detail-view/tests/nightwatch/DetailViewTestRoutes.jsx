/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import DetailViewTests from './DetailViewTests';
import DetailViewDivided from './DetailViewDivided';
import DetailViewNoDivider from './DetailViewNoDivider';

const routes = (
  <div>
    <Route path="/tests/detail-view-tests" component={DetailViewTests} />
    <Route path="/tests/detail-view-tests/detail-view-divided" component={DetailViewDivided} />
    <Route path="/tests/detail-view-tests/detail-view-no-divider" component={DetailViewNoDivider} />
  </div>
);

export default routes;
