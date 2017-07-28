/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import TimeInputTests from './TimeInputTests';
import TimeInputDefault from './component/TimeInputDefault';
import TimeInputDefaultTime from './component/TimeInputDefaultTime';
import TimeInputOnChange from './component/TimeInputOnChange';

const routes = (
  <div>
    <Route path="/tests/time-input-tests" component={TimeInputTests} />
    <Route path="/tests/time-input-tests/default" component={TimeInputDefault} />
    <Route path="/tests/time-input-tests/default-time" component={TimeInputDefaultTime} />
    <Route path="/tests/time-input-tests/on-change" component={TimeInputOnChange} />
  </div>
);

export default routes;
