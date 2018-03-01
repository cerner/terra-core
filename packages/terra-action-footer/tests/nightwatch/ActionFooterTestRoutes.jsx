/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import ActionFooterTests from './ActionFooterTests';

// Test Cases
import DefaultActionFooter from './DefaultActionFooter';

const routes = (
  <div>
    <Route path="/tests/action-footer" component={ActionFooterTests} />
    <Route path="/tests/action-footer/default-action-footer" component={DefaultActionFooter} />
  </div>
);

export default routes;
