/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import BaseTests from './BaseTests';
import DefaultBase from './DefaultBase';
import SwitchLocaleBase from './SwitchLocaleBase';
import NoTranslationsLoadedBase from './NoTranslationsLoadedBase';

const routes = (
  <div>
    <Route path="/tests/base-tests" component={BaseTests} />
    <Route path="/tests/base-tests/default" component={DefaultBase} />
    <Route path="/tests/base-tests/switch" component={SwitchLocaleBase} />
    <Route path="/tests/base-tests/no-translations-loaded" component={NoTranslationsLoadedBase} />
  </div>
);

export default routes;
