import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import App from './App';
import Home from './Home';

// Examples
import ArrangeExamples from './examples/arrange/Index';
import BaseExamples from './examples/base/Index';
import BadgeExamples from './examples/badge/Index';
import ButtonExamples from './examples/button/Index';
import ButtonGroupExamples from './examples/button-group/Index';
import ClinicalItemViewExamples from './examples/clinical-item-view/Index';
import ContentExamples from './examples/content/Index';
import DetailViewExamples from './examples/detail-view/Index';
import GridExamples from './examples/grid/Index';
import I18nExamples from './examples/i18n/Index';
import IconExamples from './examples/icon/Index';
import ImageExamples from './examples/image/Index';
import ListExamples from './examples/list/Index';
import MenuExamples from './examples/menu/Index';
import ModalExamples from './examples/modal/Index';
import ProgressBarExamples from './examples/progress-bar/Index';
import ResponsiveElementExamples from './examples/responsive-element/Index';
import SlidePanelExamples from './examples/slide-panel/Index';
import StandoutExamples from './examples/standout/Index';
import StatusExamples from './examples/status/Index';
import TitleExamples from './examples/title/Index';
import TableExamples from './examples/table/Index';

// Test
/* eslint-disable import/first */
import BaseTestRoutes from 'terra-base/tests/nightwatch/BaseTestRoutes';
import ButtonTestRoutes from 'terra-button/tests/nightwatch/ButtonTestRoutes';
import ButtonGroupTestRoutes from 'terra-button-group/tests/nightwatch/ButtonGroupTestRoutes';
import DetailViewTestRoutes from 'terra-detail-view/tests/nightwatch/DetailViewTestRoutes';
import I18nTestRoutes from 'terra-i18n/tests/nightwatch/I18nTestRoutes';
import ResponsiveElementTestRoutes from 'terra-responsive-element/tests/nightwatch/ResponsiveElementTestRoutes';
import SlidePanelTestRoutes from 'terra-slide-panel/tests/nightwatch/SlidePanelTestRoutes';
import ClinicalItemViewTestRoutes from 'terra-clinical-item-view/tests/nightwatch/clinical-item-view/ClinicalItemViewTestRoutes';
import CommentTestRoutes from 'terra-clinical-item-view/tests/nightwatch/comment/CommentTestRoutes';
import DisplayTestRoutes from 'terra-clinical-item-view/tests/nightwatch/display/DisplayTestRoutes';
import ListTestRoutes from 'terra-list/tests/nightwatch/list/ListTestRoutes';
import ListItemTestRoutes from 'terra-list/tests/nightwatch/list-item/ListItemTestRoutes';
import SingleSelectListTestRoutes from 'terra-list/tests/nightwatch/single-select-list/SingleSelectListTestRoutes';
import MultiSelectListTestRoutes from 'terra-list/tests/nightwatch/multi-select-list/MultiSelectListTestRoutes';
import TableTestRoutes from 'terra-table/tests/nightwatch/TableTestRoutes';
import TestLinks from './TestLinks';
/* eslint-enable import/first */

ReactDOM.render((
  <Router history={hashHistory}>
    <Redirect from="/" to="/site" />
    <Route path="/site" component={App}>
      <IndexRoute component={Home} />
      <Route path="arrange" component={ArrangeExamples} />
      <Route path="badge" component={BadgeExamples} />
      <Route path="base" component={BaseExamples} />
      <Route path="button" component={ButtonExamples} />
      <Route path="button-group" component={ButtonGroupExamples} />
      <Route path="clinical-item-view" component={ClinicalItemViewExamples} />
      <Route path="content" component={ContentExamples} />
      <Route path="detail-view" component={DetailViewExamples} />
      <Route path="grid" component={GridExamples} />
      <Route path="i18n" component={I18nExamples} />
      <Route path="icon" component={IconExamples} />
      <Route path="image" component={ImageExamples} />
      <Route path="list" component={ListExamples} />
      <Route path="menu" component={MenuExamples} />
      <Route path="modal" component={ModalExamples} />
      <Route path="progress-bar" component={ProgressBarExamples} />
      <Route path="responsive-element" component={ResponsiveElementExamples} />
      <Route path="slide-panel" component={SlidePanelExamples} />
      <Route path="standout" component={StandoutExamples} />
      <Route path="status" component={StatusExamples} />
      <Route path="title" component={TitleExamples} />
      <Route path="table" component={TableExamples} />
    </Route>
    <Route path="/tests" component={TestLinks} />
    {BaseTestRoutes}
    {ButtonTestRoutes}
    {ButtonGroupTestRoutes}
    {SlidePanelTestRoutes}
    {I18nTestRoutes}
    {ResponsiveElementTestRoutes}
    {DetailViewTestRoutes}
    {ClinicalItemViewTestRoutes}
    {CommentTestRoutes}
    {DisplayTestRoutes}
    {ListTestRoutes}
    {ListItemTestRoutes}
    {SingleSelectListTestRoutes}
    {MultiSelectListTestRoutes}
    {TableTestRoutes}
  </Router>
), document.getElementById('root'));
