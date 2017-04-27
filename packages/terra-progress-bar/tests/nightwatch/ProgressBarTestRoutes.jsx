/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import ProgressBarTests from './ProgressBarTests';

// components
import ProgressBarDefault from './components/ProgressBarDefault';
import ProgressBarColor from './components/ProgressBarColor';
import ProgressBarSize from './components/ProgressBarSize';

const routes = (
  <div>
    <Route path="/tests/progress-bar-tests" component={ProgressBarTests} />
    <Route path="/tests/progress-bar-tests/default" component={ProgressBarDefault} />
    <Route path="/tests/progress-bar-tests/color" component={ProgressBarColor} />
    <Route path="/tests/progress-bar-tests/size" component={ProgressBarSize} />
  </div>
);

export default routes;
