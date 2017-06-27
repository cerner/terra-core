/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import SlideGroupTests from './SlideGroupTests';
import DefaultSlideGroup from './DefaultSlideGroup';

const routes = (
  <div>
    <Route path="/tests/slide-group-tests" component={SlideGroupTests} />
    <Route path="/tests/slide-group-tests/default" component={DefaultSlideGroup} />
  </div>
);

export default routes;
