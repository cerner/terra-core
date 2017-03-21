/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ImageTests from './ImageTests';
import DefaultImage from './DefaultImage';

const routes = (
  <div>
    <Route path="/tests/image-tests" component={ImageTests} />
    <Route path="/tests/image-tests/default" component={DefaultImage} />
  </div>
);

export default routes;
