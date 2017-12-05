/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import TabsTests from './TabsTests';

// Test Cases
import DefaultTabs from './DefaultTabs';
import ControlledTabs from './ControlledTabs';
import FilledTabs from './FilledTabs';
import ModularCenteredTabs from './ModularCenteredTabs';

const routes = (
  <div>
    <Route path="/tests/tabs-tests" component={TabsTests} />
    <Route path="/tests/tabs-tests/default" component={DefaultTabs} />
    <Route path="/tests/tabs-tests/controlled" component={ControlledTabs} />
    <Route path="/tests/tabs-tests/filled-tabs" component={FilledTabs} />
    <Route path="/tests/tabs-tests/modular-centered" component={ModularCenteredTabs} />
  </div>
);

export default routes;
