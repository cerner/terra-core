/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import ActionFooterContainerTests from './ActionFooterContainerTests';

// Test Cases
import NoChildrenActionFooterContainer from './NoChildrenActionFooterContainer';
import WithChildrenActionFooterContainer from './WithChildrenActionFooterContainer';

const routes = (
  <div>
    <Route path="/tests/action-footer-container" component={ActionFooterContainerTests} />
    <Route path="/tests/action-footer-container/no-children" component={NoChildrenActionFooterContainer} />
    <Route path="/tests/action-footer-container/with-children" component={WithChildrenActionFooterContainer} />
  </div>
);

export default routes;
