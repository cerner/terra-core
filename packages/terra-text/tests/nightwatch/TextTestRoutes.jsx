/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import TextTests from './TextTests';

// Test Cases
import DefaultText from './DefaultText';

const routes = (
  <div>
    <Route path="/tests/text-tests" component={TextTests} />
    <Route path="/tests/text-tests/default" component={DefaultText} />
  </div>
);

export default routes;
