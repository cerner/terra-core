/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import HeadingTests from './HeadingTests';

// Test Cases
import DefaultHeading from './DefaultHeading';

const routes = (
  <div>
    <Route path="/tests/heading-tests" component={HeadingTests} />
    <Route path="/tests/heading-tests/default" component={DefaultHeading} />
  </div>
);

export default routes;
