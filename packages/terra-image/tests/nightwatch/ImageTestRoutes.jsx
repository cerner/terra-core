/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import ImageTests from './ImageTests';

// Components
import ImageDefault from './ImageDefault';
import ImageNonFluid from './ImageNonFluid';
import ImageFluid from './ImageFluid';

const routes = (
  <div>
    <Route path="/tests/image-tests" component={ImageTests} />
    <Route path="/tests/image-tests/default" component={ImageDefault} />
    <Route path="/tests/image-tests/non-fluid" component={ImageNonFluid} />
    <Route path="/tests/image-tests/fluid" component={ImageFluid} />
  </div>
);

export default routes;

