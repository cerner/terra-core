/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import ActionFooterContainerTests from './ActionFooterContainerTests';

// Test Cases
import EmptyActionFooterContainer from './EmptyActionFooterContainer';
import MultipleActionActionFooterContainer from './MultipleActionActionFooterContainer';
import SingleActionActionFooterContainer from './SingleActionActionFooterContainer';

const routes = (
  <div>
    <Route path="/tests/action-footer-container" component={ActionFooterContainerTests} />
    <Route path="/tests/action-footer-container/empty" component={EmptyActionFooterContainer} />
    <Route path="/tests/action-footer-container/multiple-actions" component={MultipleActionActionFooterContainer} />
    <Route path="/tests/action-footer-container/single-action" component={SingleActionActionFooterContainer} />
  </div>
);

export default routes;
