/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import TimeInputTests from './TimeInputTests';
import TimeInputDefault from './component/TimeInputDefault';
import TimeInputDefaultTime from './component/TimeInputDefaultTime';

const routes = (
  <div>
    <Route path="/tests/time-input-tests" component={TimeInputTests} />
    <Route path="/tests/time-input-tests/default" component={TimeInputDefault} />
    <Route path="/tests/time-input-tests/default-time" component={TimeInputDefaultTime} />
  </div>
);

export default routes;
