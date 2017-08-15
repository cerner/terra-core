/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import CardTests from './CardTests';

// Test Cases
import DefaultCard from './DefaultCard';
import CardPadding from './CardPadding';
import CardPaddingVertical from './CardPaddingVertical';
import CardPaddingHorizontal from './CardPaddingHorizontal';

const routes = (
  <div>
    <Route path="/tests/card-tests" component={CardTests} />
    <Route path="/tests/card-tests/default" component={DefaultCard} />
    <Route path="/tests/card-tests/padding" component={CardPadding} />
    <Route path="/tests/card-tests/paddingvertical" component={CardPaddingVertical} />
    <Route path="/tests/card-tests/paddinghorizontal" component={CardPaddingHorizontal} />
  </div>
);

export default routes;
