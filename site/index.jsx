import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
// Examples
import ButtonExamples from '../packages/terra-button/examples/index';
import ArrangeExamples from '../packages/terra-arrange/examples/index';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/arrange/" component={ArrangeExamples} />
      <Route path="/button/" component={ButtonExamples} />
    </Route>
  </Router>
), document.getElementById('root'));
