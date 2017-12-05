/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';

// Tabs Component Indexes
import ModularCenteredIndex from './components/ModularCenteredIndex';
import ModularLeftAlignedIndex from './components/ModularLeftAlignedIndex';
import StructuralIndex from './components/StructuralIndex';

const routes = (
  <div>
    <Route path="/site/tabs/modular-centered" component={ModularCenteredIndex} />
    <Route path="/site/tabs/modular-left-aligned" component={ModularLeftAlignedIndex} />
    <Route path="/site/tabs/structural" component={StructuralIndex} />
  </div>
);

export default routes;
