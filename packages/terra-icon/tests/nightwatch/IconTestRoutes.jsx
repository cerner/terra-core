/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import IconTests from './IconTests';

import IconDefault from './components/IconDefault';
import IconAppendClass from './components/IconAppendClass';
import IconAria from './components/IconAria';
import IconBidi from './components/IconBidi';
import IconHeightWidth from './components/IconHeightWidth';

const routes = (
  <div>
    <Route path="/tests/icon-tests" component={IconTests} />
    <Route path="/tests/icon-tests/default" component={IconDefault} />
    <Route path="/tests/icon-tests/append-class" component={IconAppendClass} />
    <Route path="/tests/icon-tests/aria" component={IconAria} />
    <Route path="/tests/icon-tests/bidi" component={IconBidi} />
    <Route path="/tests/icon-tests/height-width" component={IconHeightWidth} />
  </div>
);

export default routes;
