/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import App from './App';
import Home from './Home';

// Examples
import ApplicationExamples from './components/application/Index';
import ArrangeExamples from './components/arrange/Index';
import BadgeExamples from './components/badge/Index';
import ButtonExamples from './components/button/Index';
import ContentExamples from './components/content/Index';
import GridExamples from './components/grid/Index';
import I18nExamples from './components/i18n/Index';
import IconExamples from './components/icon/Index';
import ImageExamples from './components/image/Index';
import MenuExamples from './components/menu/Index';
import ProgressBarExamples from './components/progress-bar/Index';
import ResponsiveElementExamples from './components/responsive-element/Index';
import SlidePanelExamples from './components/slide-panel/Index';
import StandoutExamples from './components/standout/Index';
import StatusExamples from './components/status/Index';
import TitleExamples from './components/title/Index';

// Test
import ButtonTestRoutes from 'terra-button/tests/nightwatch/ButtonTestRoutes';
import I18nTestRoutes from '../../../packages/terra-i18n/tests/nightwatch/I18nTestRoutes';
import ResponsiveElementTestRoutes from 'terra-responsive-element/tests/nightwatch/ResponsiveElementTestRoutes';
import SlidePanelTestRoutes from 'terra-slide-panel/tests/nightwatch/SlidePanelTestRoutes';
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
      <Route path="i18n" component={I18nExamples} />
      <Route path="icon" component={IconExamples} />
      <Route path="image" component={ImageExamples} />
      <Route path="menu" component={MenuExamples} />
      <Route path="progress-bar" component={ProgressBarExamples} />
      <Route path="slide-panel" component={SlidePanelExamples} />
      <Route path="standout" component={StandoutExamples} />
      <Route path="status" component={StatusExamples} />
      <Route path="title" component={TitleExamples} />
      <Route path="responsive-element" component={ResponsiveElementExamples} />
    </Route>
    <Route path="/tests" component={TestLinks} />
    {ButtonTestRoutes}
    {SlidePanelTestRoutes}
    {I18nTestRoutes}
    {ResponsiveElementTestRoutes}
  </Router>
), document.getElementById('root'));
