/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import ActionFooterTests from './ActionFooterTests';

// Test Cases
import EmptyActionFooter from './EmptyActionFooter';
import MultipleEndActionFooter from './MultipleEndActionFooter';
import MultipleStartActionFooter from './MultipleStartActionFooter';
import MultipleStartEndActionFooter from './MultipleStartEndActionFooter';
import SingleEndActionFooter from './SingleEndActionFooter';
import SingleStartActionFooter from './SingleStartActionFooter';
import SingleStartEndActionFooter from './SingleStartEndActionFooter';

const routes = (
  <div>
    <Route path="/tests/action-footer" component={ActionFooterTests} />
    <Route path="/tests/action-footer/empty-action-footer" component={EmptyActionFooter} />
    <Route path="/tests/action-footer/multiple-end-action-footer" component={MultipleEndActionFooter} />
    <Route path="/tests/action-footer/multiple-start-action-footer" component={MultipleStartActionFooter} />
    <Route path="/tests/action-footer/multiple-start-end-action-footer" component={MultipleStartEndActionFooter} />
    <Route path="/tests/action-footer/single-end-action-footer" component={SingleEndActionFooter} />
    <Route path="/tests/action-footer/single-start-action-footer" component={SingleStartActionFooter} />
    <Route path="/tests/action-footer/single-start-end-action-footer" component={SingleStartEndActionFooter} />
  </div>
);

export default routes;
