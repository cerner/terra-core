/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import GridTests from './GridTests';

import GridDefault from './components/GridDefault';
import GridNested from './components/GridNested';
import GridResponsive from './components/GridResponsive';

const routes = (
  <div>
    <Route path="/tests/grid-tests" component={GridTests} />
    <Route path="/tests/grid-tests/default" component={GridDefault} />
    <Route path="/tests/grid-tests/nested" component={GridNested} />
    <Route path="/tests/grid-tests/responsive" component={GridResponsive} />
  </div>
);

export default routes;
