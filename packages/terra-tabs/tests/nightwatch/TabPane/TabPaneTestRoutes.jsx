/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import TabPaneTests from './TabPaneTests';

// Test Cases
import TextOnlyTabPane from './TextOnlyTabPane';
import IconOnlyTabPane from './IconOnlyTabPane';
import IconAndTextTabPane from './IconAndTextTabPane';
import CustomDisplayTabPane from './CustomDisplayTabPane';
import LongTextTabPane from './LongTextTabPane';

const routes = (
  <div>
    <Route path="/tests/tab-pane-tests" component={TabPaneTests} />
    <Route path="/tests/tab-pane-tests/text-only" component={TextOnlyTabPane} />
    <Route path="/tests/tab-pane-tests/icon-only" component={IconOnlyTabPane} />
    <Route path="/tests/tab-pane-tests/icon-and-text" component={IconAndTextTabPane} />
    <Route path="/tests/tab-pane-tests/custom-display" component={CustomDisplayTabPane} />
    <Route path="/tests/tab-pane-tests/long-text" component={LongTextTabPane} />
  </div>
);

export default routes;
