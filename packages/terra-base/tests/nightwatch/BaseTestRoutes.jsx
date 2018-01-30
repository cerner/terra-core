/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import Anchors from './Anchors';
import BaseTests from './BaseTests';
import DefaultBase from './DefaultBase';
import SwitchLocaleBase from './SwitchLocaleBase';
import NoTranslationsLoadedBase from './NoTranslationsLoadedBase';
import NoTranslationsLoadedStringBase from './NoTranslationsLoadedStringBase';

const routes = (
  <div>
    <Route path="/tests/base-tests" component={BaseTests} />
    <Route path="/tests/base-tests/default" component={DefaultBase} />
    <Route path="/tests/base-tests/switch" component={SwitchLocaleBase} />
    <Route path="/tests/base-tests/no-translations-loaded" component={NoTranslationsLoadedBase} />
    <Route path="/tests/base-tests/no-translations-loaded-string" component={NoTranslationsLoadedStringBase} />
    <Route path="/tests/base-tests/anchors" component={Anchors} />
  </div>
);

export default routes;
