/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';

// Action Footer Component Indexes
import CenteredActionFooterIndex from './CenteredActionFooterIndex';

const routes = (
  <div>
    <Route path="/site/paginator/progressive-paginator" component={CenteredActionFooterIndex} />
  </div>
);

export default routes;
