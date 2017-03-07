/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import App from './App';
import Home from './Home';

// Examples
import ArrangeExamples from '../../../packages/terra-arrange/examples/index';
import BadgeExamples from '../../../packages/terra-badge/examples/index';
import ButtonExamples from '../../../packages/terra-button/examples/index';
import ContentExamples from '../../../packages/terra-content/examples/Index';
import GridExamples from '../../../packages/terra-grid/examples/Index';
import ImageExamples from '../../../packages/terra-image/examples/Index';
import StatusExamples from '../../../packages/terra-status/examples/Index';

// Test
import ButtonTestRoutes from '../../../packages/terra-button/tests/nightwatch/ButtonTestRoutes';
import TestLinks from './TestLinks';

ReactDOM.render((
  <Router history={hashHistory}>
    <Redirect from="/" to="/site" />
    <Route path="/site" component={App}>
      <IndexRoute component={Home} />
      <Route path="arrange" component={ArrangeExamples} />
      <Route path="badge" component={BadgeExamples} />
      <Route path="button" component={ButtonExamples} />
      <Route path="content" component={ContentExamples} />
      <Route path="grid" component={GridExamples} />
      <Route path="image" component={ImageExamples} />
      <Route path="status" component={StatusExamples} />
    </Route>
    <Route path="/tests" component={TestLinks} />
    {ButtonTestRoutes}
  </Router>
), document.getElementById('root'));
