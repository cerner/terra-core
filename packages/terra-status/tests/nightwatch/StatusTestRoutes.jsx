/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import StatusTests from './StatusTests';
import StatusDefault from './StatusDefault';
import StatusArrange from './StatusArrange';
import StatusIcon from './StatusIcon';
import StatusImage from './StatusImage';
import StatusNoColor from './StatusNoColor';

const routes = (
  <div>
    <Route path="/tests/status-tests" component={StatusTests} />
    <Route path="/tests/status-tests/default" component={StatusDefault} />
    <Route path="/tests/status-tests/arrange" component={StatusArrange} />
    <Route path="/tests/status-tests/icon" component={StatusIcon} />
    <Route path="/tests/status-tests/image" component={StatusImage} />
    <Route path="/tests/status-tests/no-color" component={StatusNoColor} />
  </div>
);

export default routes;
