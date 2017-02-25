import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import App from './App';
import Home from './Home';
// Examples and Tests
import ButtonExamples from '../packages/terra-button/examples/index';
import ButtonTestRoutes from '../packages/terra-button/tests/nightwatch/ButtonTestRoutes';
import ArrangeExamples from '../packages/terra-arrange/examples/index';
import TestLinks from './TestLinks';

ReactDOM.render((
  <Router history={hashHistory}>
    <Redirect from="/" to="/site" />
    <Route path="/site" component={App}>
      <IndexRoute component={Home} />
      <Route path="arrange" component={ArrangeExamples} />
      <Route path="button" component={ButtonExamples} />
    </Route>
    <Route path="/tests" component={TestLinks} />
    {ButtonTestRoutes}
  </Router>
), document.getElementById('root'));
