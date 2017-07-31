/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import PropsTableTests from './PropsTableTests';

// components
import MockPropsTable from './MockPropsTable';
import MockPropsTableWithTitle from './MockPropsTableWithTitle';

const routes = (
  <div>
    <Route path="/tests/props-table-tests" component={PropsTableTests} />
    <Route path="/tests/props-table-tests/default" component={MockPropsTable} />
    <Route path="/tests/props-table-tests/title" component={MockPropsTableWithTitle} />
  </div>
);

export default routes;
