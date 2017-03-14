/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import IconTests from './IconTests';
import DefaultIcon from './DefaultIcon';

const routes = (
  <div>
    <Route path="/tests/icon-tests" component={IconTests} />
    <Route path="/tests/icon-tests/default" component={DefaultIcon} />
  </div>
);

export default routes;
