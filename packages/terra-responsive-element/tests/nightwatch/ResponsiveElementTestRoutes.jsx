/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ResponsiveElementTests from './ResponsiveElementTests';
import DefaultResponsiveElement from './DefaultResponsiveElement';

const routes = (
  <div>
    <Route path="/tests/responsive-element-tests" component={ResponsiveElementTests} />
    <Route path="/tests/responsive-element-tests/default" component={DefaultResponsiveElement} />
  </div>
);

export default routes;
