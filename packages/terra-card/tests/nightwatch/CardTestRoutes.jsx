/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import CardTests from './CardTests';

// Test Cases
import DefaultCard from './DefaultCard';
import CardNoPadding from './CardNoPadding';
import CardNoVerticalPadding from './CardNoVerticalPadding';
import CardNoHorizontalPadding from './CardNoHorizontalPadding';

const routes = (
  <div>
    <Route path="/tests/card-tests" component={CardTests} />
    <Route path="/tests/card-tests/default" component={DefaultCard} />
    <Route path="/tests/card-tests/noPadding" component={CardNoPadding} />
    <Route path="/tests/card-tests/noVerticalPadding" component={CardNoVerticalPadding} />
    <Route path="/tests/card-tests/noHorizontalPadding" component={CardNoHorizontalPadding} />
  </div>
);

export default routes;
