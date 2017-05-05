import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import App from './App';
import Home from './Home';

// Examples
import ArrangeExamples from './examples/arrange/Index';
import BadgeExamples from './examples/badge/Index';
import BaseExamples from './examples/base/Index';
import ButtonExamples from './examples/button/Index';
import ButtonGroupExamples from './examples/button-group/Index';
import ContentExamples from './examples/content/Index';
import ContentContainerExamples from './examples/content-container/Index';
import DatePickerExamples from './examples/date-picker/Index';
import DemographicsBannerExamples from './examples/demographics-banner/Index';
import GridExamples from './examples/grid/Index';
import I18nExamples from './examples/i18n/Index';
import IconExamples from './examples/icon/Index';
import ImageExamples from './examples/image/Index';
import ListExamples from './examples/list/Index';
import ModalExamples from './examples/modal/Index';
import PopupPresenterExamples from './examples/popup-presenter/Index';
import ProgressBarExamples from './examples/progress-bar/Index';
import ResponsiveElementExamples from './examples/responsive-element/Index';
import SlidePanelExamples from './examples/slide-panel/Index';
import StandoutExamples from './examples/standout/Index';
import StatusExamples from './examples/status/Index';
import TableExamples from './examples/table/Index';
import TitleExamples from './examples/title/Index';


// Test
/* eslint-disable import/first */
import ArrangeTestRoutes from 'terra-arrange/tests/nightwatch/ArrangeTestRoutes';
import BadgeTestRoutes from 'terra-badge/tests/nightwatch/BadgeTestRoutes';
import BaseTestRoutes from 'terra-base/tests/nightwatch/BaseTestRoutes';
import ButtonTestRoutes from 'terra-button/tests/nightwatch/ButtonTestRoutes';
import ButtonGroupTestRoutes from 'terra-button-group/tests/nightwatch/ButtonGroupTestRoutes';
import ContentContainerTestRoutes from 'terra-content-container/tests/nightwatch/ContentContainerTestRoutes';
import DatePickerTestRoutes from 'terra-date-picker/tests/nightwatch/DatePickerTestRoutes';
import DemographicsBannerTestRoutes from 'terra-demographics-banner/tests/nightwatch/DemographicsBannerTestRoutes';
import I18nTestRoutes from 'terra-i18n/tests/nightwatch/I18nTestRoutes';
import ImageTestRoutes from 'terra-image/tests/nightwatch/ImageTestRoutes';
import ResponsiveElementTestRoutes from 'terra-responsive-element/tests/nightwatch/ResponsiveElementTestRoutes';
import SlidePanelTestRoutes from 'terra-slide-panel/tests/nightwatch/SlidePanelTestRoutes';
import ListTestRoutes from 'terra-list/tests/nightwatch/list/ListTestRoutes';
import ListItemTestRoutes from 'terra-list/tests/nightwatch/list-item/ListItemTestRoutes';
import SingleSelectListTestRoutes from 'terra-list/tests/nightwatch/single-select-list/SingleSelectListTestRoutes';
import MultiSelectListTestRoutes from 'terra-list/tests/nightwatch/multi-select-list/MultiSelectListTestRoutes';
import TableTestRoutes from 'terra-table/tests/nightwatch/TableTestRoutes';
import ModalTestRoutes from 'terra-modal/tests/nightwatch/ModalTestRoutes';
import StatusTestRoutes from 'terra-status/tests/nightwatch/StatusTestRoutes';
import GridTestRoutes from 'terra-grid/tests/nightwatch/GridTestRoutes';
import ProgressBarTestRoutes from 'terra-progress-bar/tests/nightwatch/ProgressBarTestRoutes';
import IconTestRoutes from 'terra-icon/tests/nightwatch/IconTestRoutes';
import PopupPresenterTestRoutes from 'terra-popup-presenter/tests/nightwatch/PopupPresenterTestRoutes';
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
      <Route path="content" component={ContentExamples} />
      <Route path="content-container" component={ContentContainerExamples} />
      <Route path="datepicker" component={DatePickerExamples} />
      <Route path="demographics-banner" component={DemographicsBannerExamples} />
      <Route path="grid" component={GridExamples} />
      <Route path="i18n" component={I18nExamples} />
      <Route path="icon" component={IconExamples} />
      <Route path="image" component={ImageExamples} />
      <Route path="list" component={ListExamples} />
      <Route path="modal" component={ModalExamples} />
      <Route path="popup-presenter" component={PopupPresenterExamples} />
      <Route path="progress-bar" component={ProgressBarExamples} />
      <Route path="responsive-element" component={ResponsiveElementExamples} />
      <Route path="slide-panel" component={SlidePanelExamples} />
      <Route path="standout" component={StandoutExamples} />
      <Route path="status" component={StatusExamples} />
      <Route path="title" component={TitleExamples} />
      <Route path="table" component={TableExamples} />
    </Route>
    <Route path="/tests" component={TestLinks} />
    {ArrangeTestRoutes}
    {BadgeTestRoutes}
    {BaseTestRoutes}
    {ButtonTestRoutes}
    {ButtonGroupTestRoutes}
    {DatePickerTestRoutes}
    {DemographicsBannerTestRoutes}
    {SlidePanelTestRoutes}
    {I18nTestRoutes}
    {IconTestRoutes}
    {ImageTestRoutes}
    {ResponsiveElementTestRoutes}
    {ContentContainerTestRoutes}
    {ListTestRoutes}
    {ListItemTestRoutes}
    {SingleSelectListTestRoutes}
    {MultiSelectListTestRoutes}
    {StatusTestRoutes}
    {TableTestRoutes}
    {ModalTestRoutes}
    {ProgressBarTestRoutes}
    {GridTestRoutes}
    {PopupPresenterTestRoutes}
  </Router>
), document.getElementById('root'));
