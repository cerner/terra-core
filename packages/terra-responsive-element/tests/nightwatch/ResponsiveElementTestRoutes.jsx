/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ResponsiveElementTests from './ResponsiveElementTests';
import WindowResponsiveElement from './WindowResponsiveElement';
import {
  DefaultResponsiveElement,
  TinyResponsiveElement,
  SmallResponsiveElement,
  MediumResponsiveElement,
  LargeResponsiveElement,
  HugeResponsiveElement,
} from './DefaultResponsiveElement';

const routes = (
  <div>
    <Route path="/tests/responsive-element-tests" component={ResponsiveElementTests} />
    <Route path="/tests/responsive-element-tests/default" component={DefaultResponsiveElement} />
    <Route path="/tests/responsive-element-tests/tiny" component={TinyResponsiveElement} />
    <Route path="/tests/responsive-element-tests/small" component={SmallResponsiveElement} />
    <Route path="/tests/responsive-element-tests/medium" component={MediumResponsiveElement} />
    <Route path="/tests/responsive-element-tests/large" component={LargeResponsiveElement} />
    <Route path="/tests/responsive-element-tests/huge" component={HugeResponsiveElement} />
    <Route path="/tests/responsive-element-tests/window-responsive" component={WindowResponsiveElement} />
  </div>
);

export default routes;
