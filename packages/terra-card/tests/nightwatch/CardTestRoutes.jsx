/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import CardTests from './CardTests';

// Test Cases
import DefaultCard from './DefaultCard';
import CardPadding from './CardPadding';
import CardVerticalPadding from './CardVerticalPadding';
import CardHorizontalPadding from './CardHorizontalPadding';

const routes = (
  <div>
    <Route path="/tests/card-tests" component={CardTests} />
    <Route path="/tests/card-tests/default" component={DefaultCard} />
    <Route path="/tests/card-tests/padding" component={CardPadding} />
    <Route path="/tests/card-tests/verticalPadding" component={CardVerticalPadding} />
    <Route path="/tests/card-tests/horizontalPadding" component={CardHorizontalPadding} />
  </div>
);

export default routes;
