/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import TogglerTests from './TogglerTests';

import TogglerDefault from './components/TogglerDefault';
import TogglerEvent from './components/TogglerEvent';
import TogglerNoAnimation from './components/TogglerNoAnimation';
import TogglerRenderOpen from './components/TogglerRenderOpen';

const routes = (
  <div>
    <Route path="/tests/toggler-tests" component={TogglerTests} />
    <Route path="/tests/toggler-tests/default" component={TogglerDefault} />
    <Route path="/tests/toggler-tests/no-animation" component={TogglerNoAnimation} />
    <Route path="/tests/toggler-tests/event" component={TogglerEvent} />
    <Route path="/tests/toggler-tests/render-open" component={TogglerRenderOpen} />
  </div>
);

export default routes;
