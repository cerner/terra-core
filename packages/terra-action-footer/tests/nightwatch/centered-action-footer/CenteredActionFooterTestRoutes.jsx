/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import CenteredActionFooterTests from './CenteredActionFooterTests';

// Test Cases
import EmptyCenteredActionFooter from './EmptyCenteredActionFooter';
import MultipleActionCenteredActionFooter from './MultipleActionCenteredActionFooter';
import SingleActionCenteredActionFooter from './SingleActionCenteredActionFooter';

const routes = (
  <div>
    <Route path="/tests/centered-action-footer" component={CenteredActionFooterTests} />
    <Route path="/tests/centered-action-footer/empty-centered-action-footer" component={EmptyCenteredActionFooter} />
    <Route path="/tests/centered-action-footer/multiple-action-centered-action-footer" component={MultipleActionCenteredActionFooter} />
    <Route path="/tests/centered-action-footer/single-action-centered-action-footer" component={SingleActionCenteredActionFooter} />
  </div>
);

export default routes;
