/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import App from './App';
import Home from './Home';

// Examples
import ApplicationExamples from '../../../packages/terra-application/examples/Index';
import ArrangeExamples from '../../../packages/terra-arrange/examples/index';
import BadgeExamples from '../../../packages/terra-badge/examples/index';
import ButtonExamples from '../../../packages/terra-button/examples/index';
import ContentExamples from '../../../packages/terra-content/examples/Index';
import GridExamples from '../../../packages/terra-grid/examples/Index';
import IconExamples from '../../../packages/terra-icon/examples/Index';
import StandoutExamples from '../../../packages/terra-standout/examples/Index';
import MenuExamples from '../../../packages/terra-menu/examples/Index';
import ImageExamples from '../../../packages/terra-image/examples/Index';
import ProgressBarExamples from '../../../packages/terra-progress-bar/examples/Index';
import StatusExamples from '../../../packages/terra-status/examples/Index';
import TitleExamples from '../../../packages/terra-title/examples/Index';
import SlidePanelExamples from '../../../packages/terra-slide-panel/examples/Index';
import ResponsiveElementExamples from '../../../packages/terra-responsive-element/examples/Index';
import ListExamples from '../../../packages/terra-list/examples/Index';

// Test
import ButtonTestRoutes from '../../../packages/terra-button/tests/nightwatch/ButtonTestRoutes';
import SlidePanelTestRoutes from '../../../packages/terra-slide-panel/tests/nightwatch/SlidePanelTestRoutes';
import ResponsiveElementTestRoutes from '../../../packages/terra-responsive-element/tests/nightwatch/ResponsiveElementTestRoutes';
import ListTestRoutes from '../../../packages/terra-list/tests/nightwatch/list/ListTestRoutes';
import ListItemTestRoutes from '../../../packages/terra-list/tests/nightwatch/list-item/ListItemTestRoutes';
import SingleSelectListTestRoutes from '../../../packages/terra-list/tests/nightwatch/single-select-list/SingleSelectListTestRoutes';
import MultiSelectListTestRoutes from '../../../packages/terra-list/tests/nightwatch/multi-select-list/MultiSelectListTestRoutes';
import TestLinks from './TestLinks';

ReactDOM.render((
  <Router history={hashHistory}>
    <Redirect from="/" to="/site" />
    <Route path="/site" component={App}>
      <IndexRoute component={Home} />
      <Route path="application" component={ApplicationExamples} />
      <Route path="arrange" component={ArrangeExamples} />
      <Route path="badge" component={BadgeExamples} />
      <Route path="button" component={ButtonExamples} />
      <Route path="content" component={ContentExamples} />
      <Route path="grid" component={GridExamples} />
      <Route path="icon" component={IconExamples} />
      <Route path="standout" component={StandoutExamples} />
      <Route path="menu" component={MenuExamples} />
      <Route path="image" component={ImageExamples} />
      <Route path="progress-bar" component={ProgressBarExamples} />
      <Route path="status" component={StatusExamples} />
      <Route path="title" component={TitleExamples} />
      <Route path="slide-panel" component={SlidePanelExamples} />
      <Route path="responsive-element" component={ResponsiveElementExamples} />
      <Route path="list" component={ListExamples} />
    </Route>
    <Route path="/tests" component={TestLinks} />
    {ButtonTestRoutes}
    {SlidePanelTestRoutes}
    {ResponsiveElementTestRoutes}
    {ListTestRoutes}
    {ListItemTestRoutes}
    {SingleSelectListTestRoutes}
    {MultiSelectListTestRoutes}
  </Router>
), document.getElementById('root'));
