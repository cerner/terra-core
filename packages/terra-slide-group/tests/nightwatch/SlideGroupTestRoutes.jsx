/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import SlideGroupTests from './SlideGroupTests';
import DefaultSlideGroup from './DefaultSlideGroup';
import OneItemSlideGroup from './OneItemSlideGroup';
import NonAnimatedSlideGroup from './NonAnimatedSlideGroup';
import AnimatedSlideGroup from './AnimatedSlideGroup';

const routes = (
  <div>
    <Route path="/tests/slide-group-tests" component={SlideGroupTests} />
    <Route path="/tests/slide-group-tests/default" component={DefaultSlideGroup} />
    <Route path="/tests/slide-group-tests/one-item" component={OneItemSlideGroup} />
    <Route path="/tests/slide-group-tests/non-animated" component={NonAnimatedSlideGroup} />
    <Route path="/tests/slide-group-tests/animated" component={AnimatedSlideGroup} />
  </div>
);

export default routes;
