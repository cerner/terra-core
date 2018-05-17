/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';

// Action Footer Component Indexes
import ProgressivePaginatorIndex from './ProgressivePaginatorIndex';

const routes = (
  <div>
    <Route path="/site/paginator/progressive-paginator" component={ProgressivePaginatorIndex} />
  </div>
);

export default routes;
