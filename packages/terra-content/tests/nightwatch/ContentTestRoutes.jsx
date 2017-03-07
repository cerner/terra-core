/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ContentTests from './ContentTests';
import DefaultContent from './DefaultContent';

const routes = (
  <div>
    <Route path="/tests/content-tests" component={ContentTests} />
    <Route path="/tests/content-tests/default" component={DefaultContent} />
  </div>
);

export default routes;
