/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ListThemeableVariables from './examples/list/ThemeInfo';
import TableThemeableVariables from './examples/table/ThemeInfo';

const routes = (
  <div>
    <Route path="/themeable-components/list" component={ListThemeableVariables} />
    <Route path="/themeable-components/table" component={TableThemeableVariables} />
  </div>
);

export default routes;
