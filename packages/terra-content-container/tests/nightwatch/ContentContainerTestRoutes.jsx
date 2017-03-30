/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ContentContainerTests from './ContentContainerTests';
import DefaultContentContainer from './DefaultContentContainer';
import FillContentContainer from './FillContentContainer';

const routes = (
  <div>
    <Route path="/tests/content-container-tests" component={ContentContainerTests} />
    <Route path="/tests/content-container-tests/default" component={DefaultContentContainer} />
    <Route path="/tests/content-container-tests/fill" component={FillContentContainer} />
  </div>
);

export default routes;
