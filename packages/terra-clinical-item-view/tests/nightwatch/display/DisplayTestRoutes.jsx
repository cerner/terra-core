/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import DisplaysTests from './DisplayTests';
import DefaultDisplay from './DefaultDisplay';
import TextStyleDisplay from './TextStyleDisplay';
import IconDisplay from './IconDisplay';

const routes = (
  <div>
    <Route path="/tests/clinical-item-view-display-tests" component={DisplaysTests} />
    <Route path="/tests/clinical-item-view-display-tests/default" component={DefaultDisplay} />
    <Route path="/tests/clinical-item-view-display-tests/text-style" component={TextStyleDisplay} />
    <Route path="/tests/clinical-item-view-display-tests/icon" component={IconDisplay} />
  </div>
);

export default routes;
