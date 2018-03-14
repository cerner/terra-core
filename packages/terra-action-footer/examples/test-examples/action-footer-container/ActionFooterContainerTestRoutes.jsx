/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import ActionFooterContainerTests from './ActionFooterContainerTests';

// Test Cases
import WithoutActionsActionFooterContainer from './WithoutActionsActionFooterContainer';
import WithActionsActionFooterContainer from './WithActionsActionFooterContainer';

const routes = (
  <div>
    <Route path="/tests/action-footer-container" component={ActionFooterContainerTests} />
    <Route path="/tests/action-footer-container/without-actions" component={WithoutActionsActionFooterContainer} />
    <Route path="/tests/action-footer-container/with-actions" component={WithActionsActionFooterContainer} />
  </div>
);

export default routes;
