/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import CardTests from './CardTests';

// Test Cases
import DefaultCard from './DefaultCard';
import CardNoPadding from './CardNoPadding';

const routes = (
  <div>
    <Route path="/tests/card-tests" component={CardTests} />
    <Route path="/tests/card-tests/default" component={DefaultCard} />
    <Route path="/tests/card-tests/noPadding" component={CardNoPadding} />
  </div>
);

export default routes;
