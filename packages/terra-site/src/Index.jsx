import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import App from './App';
import Home from './Home';

// Examples
import AlertExamples from './examples/alert/Index';
import AppDelegateExamples from './examples/app-delegate/Index';
import ArrangeExamples from './examples/arrange/Index';
import BadgeExamples from './examples/badge/Index';
import BaseExamples from './examples/base/Index';
import ButtonExamples from './examples/button/Index';
import ButtonGroupExamples from './examples/button-group/Index';
import ContentContainerExamples from './examples/content-container/Index';
import DatePickerExamples from './examples/date-picker/Index';
import DemographicsBannerExamples from './examples/demographics-banner/Index';
import FormExamples from './examples/form/Index';
import GridExamples from './examples/grid/Index';
import HeadingExamples from './examples/heading/Index';
import I18nExamples from './examples/i18n/Index';
import IconExamples from './examples/icon/Index';
import ImageExamples from './examples/image/Index';
import ListExamples from './examples/list/Index';
import ModalExamples from './examples/modal/Index';
import ModalManagerExamples from './examples/modal-manager/Index';
import OverlayExamples from './examples/overlay/Index';
import PopupExamples from './examples/popup/Index';
import ProfileImageExamples from './examples/profile-image/Index';
import ProgressBarExamples from './examples/progress-bar/Index';
import ResponsiveElementExamples from './examples/responsive-element/Index';
import SearchFieldExamples from './examples/search-field/Index';
import SlideGroupExamples from './examples/slide-group/Index';
import SlidePanelExamples from './examples/slide-panel/Index';
import StatusExamples from './examples/status/Index';
import TableExamples from './examples/table/Index';
import TextExamples from './examples/text/Index';
import TimeInputExamples from './examples/time-input/Index';
import ToggleExamples from './examples/toggle/Index';
import ToggleButtonExamples from './examples/toggle-button/Index';

// Test Routes
/* eslint-disable import/first */
import AlertTestRoutes from 'terra-alert/tests/nightwatch/AlertTestRoutes';
import ArrangeTestRoutes from 'terra-arrange/tests/nightwatch/ArrangeTestRoutes';
import BadgeTestRoutes from 'terra-badge/tests/nightwatch/BadgeTestRoutes';
import BaseTestRoutes from 'terra-base/tests/nightwatch/BaseTestRoutes';
import ButtonTestRoutes from 'terra-button/tests/nightwatch/ButtonTestRoutes';
import ButtonGroupTestRoutes from 'terra-button-group/tests/nightwatch/ButtonGroupTestRoutes';
import ContentContainerTestRoutes from 'terra-content-container/tests/nightwatch/ContentContainerTestRoutes';
import DatePickerTestRoutes from 'terra-date-picker/tests/nightwatch/DatePickerTestRoutes';
import DemographicsBannerTestRoutes from 'terra-demographics-banner/tests/nightwatch/DemographicsBannerTestRoutes';
import FormTestRoutes from 'terra-form/tests/nightwatch/FormTestRoutes';
import GridTestRoutes from 'terra-grid/tests/nightwatch/GridTestRoutes';
import HeadingTestRoutes from 'terra-heading/tests/nightwatch/HeadingTestRoutes';
import I18nTestRoutes from 'terra-i18n/tests/nightwatch/I18nTestRoutes';
import IconTestRoutes from 'terra-icon/tests/nightwatch/IconTestRoutes';
import ImageTestRoutes from 'terra-image/tests/nightwatch/ImageTestRoutes';
import ProfileImageTestRoutes from 'terra-profile-image/tests/nightwatch/ProfileImageTestRoutes';
import ListTestRoutes from 'terra-list/tests/nightwatch/list/ListTestRoutes';
import ListItemTestRoutes from 'terra-list/tests/nightwatch/list-item/ListItemTestRoutes';
import LoadingOverlayTestRoutes from 'terra-overlay/tests/nightwatch/LoadingOverlay/LoadingOverlayTestRoutes';
import SingleSelectListTestRoutes from 'terra-list/tests/nightwatch/single-select-list/SingleSelectListTestRoutes';
import MultiSelectListTestRoutes from 'terra-list/tests/nightwatch/multi-select-list/MultiSelectListTestRoutes';
import ModalTestRoutes from 'terra-modal/tests/nightwatch/ModalTestRoutes';
import ModalManagerTestRoutes from 'terra-modal-manager/tests/nightwatch/ModalManagerTestRoutes';
import OverlayTestRoutes from 'terra-overlay/tests/nightwatch/Overlay/OverlayTestRoutes';
import OverlayContainerTestRoutes from 'terra-overlay/tests/nightwatch/OverlayContainer/OverlayContainerTestRoutes';
import PopupTestRoutes from 'terra-popup/tests/nightwatch/PopupTestRoutes';
import ProgressBarTestRoutes from 'terra-progress-bar/tests/nightwatch/ProgressBarTestRoutes';
import ResponsiveElementTestRoutes from 'terra-responsive-element/tests/nightwatch/ResponsiveElementTestRoutes';
import SearchFieldTestRoutes from 'terra-search-field/tests/nightwatch/SearchFieldTestRoutes';
import SlideGroupTestRoutes from 'terra-slide-group/tests/nightwatch/SlideGroupTestRoutes';
import SlidePanelTestRoutes from 'terra-slide-panel/tests/nightwatch/SlidePanelTestRoutes';
import StatusTestRoutes from 'terra-status/tests/nightwatch/StatusTestRoutes';
import TableTestRoutes from 'terra-table/tests/nightwatch/TableTestRoutes';
import TextTestRoutes from 'terra-text/tests/nightwatch/TextTestRoutes';
import TimeInputTestRoutes from 'terra-time-input/tests/nightwatch/TimeInputTestRoutes';
import ToggleTestRoutes from 'terra-toggle/tests/nightwatch/ToggleTestRoutes';
import ToggleButtonTestRoutes from 'terra-toggle-button/tests/nightwatch/ToggleButtonTestRoutes';

import TestLinks from './TestLinks';

ReactDOM.render((
  <Router history={hashHistory}>
    <Redirect from="/" to="/site" />
    <Route path="/site" component={App}>
      <IndexRoute component={Home} />
      <Route path="alert" component={AlertExamples} />
      <Route path="app-delegate" component={AppDelegateExamples} />
      <Route path="arrange" component={ArrangeExamples} />
      <Route path="badge" component={BadgeExamples} />
      <Route path="base" component={BaseExamples} />
      <Route path="button" component={ButtonExamples} />
      <Route path="button-group" component={ButtonGroupExamples} />
      <Route path="content-container" component={ContentContainerExamples} />
      <Route path="datepicker" component={DatePickerExamples} />
      <Route path="demographics-banner" component={DemographicsBannerExamples} />
      <Route path="form" component={FormExamples} />
      <Route path="grid" component={GridExamples} />
      <Route path="heading" component={HeadingExamples} />
      <Route path="i18n" component={I18nExamples} />
      <Route path="icon" component={IconExamples} />
      <Route path="image" component={ImageExamples} />
      <Route path="list" component={ListExamples} />
      <Route path="modal" component={ModalExamples} />
      <Route path="modal-manager" component={ModalManagerExamples} />
      <Route path="overlay" component={OverlayExamples} />
      <Route path="popup" component={PopupExamples} />
      <Route path="profile-image" component={ProfileImageExamples} />
      <Route path="progress-bar" component={ProgressBarExamples} />
      <Route path="responsive-element" component={ResponsiveElementExamples} />
      <Route path="search-field" component={SearchFieldExamples} />
      <Route path="slide-group" component={SlideGroupExamples} />
      <Route path="slide-panel" component={SlidePanelExamples} />
      <Route path="status" component={StatusExamples} />
      <Route path="table" component={TableExamples} />
      <Route path="text" component={TextExamples} />
      <Route path="time-input" component={TimeInputExamples} />
      <Route path="toggle" component={ToggleExamples} />
      <Route path="toggle-button" component={ToggleButtonExamples} />
    </Route>
    <Route path="/tests" component={TestLinks} />
    {AlertTestRoutes}
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
    {TimeInputTestRoutes}
    {ModalTestRoutes}
    {ModalManagerTestRoutes}
    {ProgressBarTestRoutes}
    {GridTestRoutes}
    {SearchFieldTestRoutes}
    {PopupTestRoutes}
    {FormTestRoutes}
    {OverlayTestRoutes}
    {LoadingOverlayTestRoutes}
    {OverlayContainerTestRoutes}
    {ToggleTestRoutes}
    {ToggleButtonTestRoutes}
    {HeadingTestRoutes}
    {TextTestRoutes}
    {SlideGroupTestRoutes}
    {ProfileImageTestRoutes}
  </Router>
), document.getElementById('root'));
