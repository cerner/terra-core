/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import FlexBoxTests from './FlexBoxTests';
import FlexBoxDefault from './FlexBoxDefault';
import FlexBoxParent from './FlexBoxParent';
import FlexBoxChild from './FlexBoxChild';
import FlexBoxMinMaxSizing from './FlexBoxMinMaxSizing';

const routes = (
  <div>
    <Route path="/tests/flexbox-tests" component={FlexBoxTests} />
    <Route path="/tests/flexbox-tests/default" component={FlexBoxDefault} />
    <Route path="/tests/flexbox-tests/parent" component={FlexBoxParent} />
    <Route path="/tests/flexbox-tests/child" component={FlexBoxChild} />
    <Route path="/tests/flexbox-tests/minmax" component={FlexBoxMinMaxSizing} />
  </div>
);

export default routes;
