/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import I18nTests from './I18nTests';
import DefaultI18n from './DefaultI18n';

const routes = (
  <div>
    <Route path="/tests/i18n-tests" component={I18nTests} />
    <Route path="/tests/i18n-tests/default" component={DefaultI18n} />
  </div>
);

export default routes;
