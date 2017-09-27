/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';

// Form Component Indexes
import IconStatic from './components/IconStatic';
import IconThemeable from './components/IconThemeable';

const routes = (
  <div>
    <Route path="/site/icon/static" component={IconStatic} />
    <Route path="/site/icon/themeable" component={IconThemeable} />
  </div>
);

export default routes;
