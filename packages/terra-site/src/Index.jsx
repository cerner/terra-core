import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import App from './App';
import Home from './Home';

// Examples
import AlertExamples from './examples/alert/Index';
import ArrangeExamples from './examples/arrange/Index';
import BadgeExamples from './examples/badge/Index';
import BaseExamples from './examples/base/Index';
import ButtonExamples from './examples/button/Index';
import ButtonGroupExamples from './examples/button-group/Index';
import CardExamples from './examples/card/Index';
import CollapsibleMenuViewExamples from './examples/collapsible-menu-view/Index';
import ContentContainerExamples from './examples/content-container/Index';
import DatePickerExamples from './examples/date-picker/Index';
import DateTimePickerExamples from './examples/date-time-picker/Index';
import DemographicsBannerExamples from './examples/demographics-banner/Index';
import DialogExamples from './examples/dialog/Index';
import DividerExamples from './examples/divider/Index';
import DynamicGridExamples from './examples/dynamic-grid/Index';
import EmbeddedContentConsumerExamples from './examples/embedded-content-consumer/Index';
import FormExamples from './examples/form/Index';
import FormCheckboxExamples from './examples/form-checkbox/Index';
import FormFieldExamples from './examples/form-field/Index';
import FormInputExamples from './examples/form-input/Index';
import FormRadioExamples from './examples/form-radio/Index';
import FormTextareaExamples from './examples/form-textarea/Index';
import GridExamples from './examples/grid/Index';
import HeadingExamples from './examples/heading/Index';
import HookshotExamples from './examples/hookshot/Index';
import I18nExamples from './examples/i18n/Index';
import IconExamples from './examples/icon/Index';
import ImageExamples from './examples/image/Index';
import ListExamples from './examples/list/Index';
import MenuExamples from './examples/menu/Index';
import ModalExamples from './examples/modal/Index';
import OverlayExamples from './examples/overlay/Index';
import PopupExamples from './examples/popup/Index';
import ProfileImageExamples from './examples/profile-image/Index';
import ProgressBarExamples from './examples/progress-bar/Index';
import ResponsiveElementExamples from './examples/responsive-element/Index';
import SignatureExamples from './examples/signature/Index';
import SearchFieldExamples from './examples/search-field/Index';
import SectionHeaderExamples from './examples/section-header/Index';
import SelectExamples from './examples/form-select/Index';
import SlideGroupExamples from './examples/slide-group/Index';
import SlidePanelExamples from './examples/slide-panel/Index';
import SpacerExamples from './examples/spacer/Index';
import StatusExamples from './examples/status/Index';
import StatusViewExamples from './examples/status-view/Index';
import TableExamples from './examples/table/Index';
import TabsExamples from './examples/tabs/Index';
import TextExamples from './examples/text/Index';
import TimeInputExamples from './examples/time-input/Index';
import ToggleExamples from './examples/toggle/Index';
import ToggleButtonExamples from './examples/toggle-button/Index';

// Test Routes
/* eslint-disable import/first, import/no-extraneous-dependencies */
import AlertTestRoutes from 'terra-alert/tests/nightwatch/AlertTestRoutes';
import ArrangeTestRoutes from 'terra-arrange/tests/nightwatch/ArrangeTestRoutes';
import BadgeTestRoutes from 'terra-badge/tests/nightwatch/BadgeTestRoutes';
import BaseTestRoutes from 'terra-base/tests/nightwatch/BaseTestRoutes';
import ButtonTestRoutes from 'terra-button/tests/nightwatch/ButtonTestRoutes';
import ButtonGroupTestRoutes from 'terra-button-group/tests/nightwatch/ButtonGroupTestRoutes';
import CardTestRoutes from 'terra-card/tests/nightwatch/CardTestRoutes';
import CollapsibleMenuViewTestRoutes from 'terra-collapsible-menu-view/tests/nightwatch/CollapsibleMenuViewTestRoutes';
import ContentContainerTestRoutes from 'terra-content-container/tests/nightwatch/ContentContainerTestRoutes';
import DatePickerTestRoutes from 'terra-date-picker/tests/nightwatch/DatePickerTestRoutes';
import DateTimePickerTestRoutes from 'terra-date-time-picker/tests/nightwatch/DateTimePickerTestRoutes';
import DemographicsBannerTestRoutes from 'terra-demographics-banner/tests/nightwatch/DemographicsBannerTestRoutes';
import DialogTestRoutes from 'terra-dialog/tests/nightwatch/DialogTestRoutes';
import DividerTestRoutes from 'terra-divider/tests/nightwatch/DividerTestRoutes';
import DynamicGridTestRoutes from 'terra-dynamic-grid/tests/nightwatch/DynamicGridTestRoutes';
import EmbeddedContentConsumerTestRoutes from 'terra-embedded-content-consumer/tests/nightwatch/EmbeddedContentConsumerTestRoutes';
import FormTestRoutes from 'terra-form/tests/nightwatch/FormTestRoutes';
import FormCheckboxTestRoutes from 'terra-form-checkbox/tests/nightwatch/CheckboxTestRoutes';
import FormFieldTestRoutes from 'terra-form-field/tests/nightwatch/FieldTestRoutes';
import FormIndexRoutes from './examples/form/FormIndexRoutes';
import FormInputTestRoutes from 'terra-form-input/tests/nightwatch/InputTestRoutes';
import FormRadioTestRoutes from 'terra-form-radio/tests/nightwatch/RadioTestRoutes';
import FormTextareaRoutes from 'terra-form-textarea/tests/nightwatch/TextareaTestRoutes';
import GridTestRoutes from 'terra-grid/tests/nightwatch/GridTestRoutes';
import HeadingTestRoutes from 'terra-heading/tests/nightwatch/HeadingTestRoutes';
import HookshotTestRoutes from 'terra-hookshot/tests/nightwatch/HookshotTestRoutes';
import I18nTestRoutes from 'terra-i18n/tests/nightwatch/I18nTestRoutes';
import IconTestRoutes from 'terra-icon/tests/nightwatch/IconTestRoutes';
import IconIndexRoutes from './examples/icon/IconIndexRoutes';
import ImageTestRoutes from 'terra-image/tests/nightwatch/ImageTestRoutes';
import ListTestRoutes from 'terra-list/tests/nightwatch/list/ListTestRoutes';
import ListIndexRoutes from './examples/list/ListIndexRoutes';
import ListItemTestRoutes from 'terra-list/tests/nightwatch/list-item/ListItemTestRoutes';
import LoadingOverlayTestRoutes from 'terra-overlay/tests/nightwatch/LoadingOverlay/LoadingOverlayTestRoutes';
import ModalTestRoutes from 'terra-modal/tests/nightwatch/ModalTestRoutes';
import MarkdownTestRoutes from 'terra-markdown/tests/nightwatch/MarkdownTestRoutes';
import MenuTestRoutes from 'terra-menu/tests/nightwatch/menu/MenuTestRoutes';
import MenuItemTestRoutes from 'terra-menu/tests/nightwatch/menu-item/MenuItemTestRoutes';
import MenuItemGroupTestRoutes from 'terra-menu/tests/nightwatch/menu-item-group/MenuItemGroupTestRoutes';
import MultiSelectListTestRoutes from 'terra-list/tests/nightwatch/multi-select-list/MultiSelectListTestRoutes';
import MultiSelectTableTestRoutes from 'terra-table/tests/nightwatch/multi-select-table/MultiSelectTableTestRoutes';
import OverlayTestRoutes from 'terra-overlay/tests/nightwatch/Overlay/OverlayTestRoutes';
import OverlayContainerTestRoutes from 'terra-overlay/tests/nightwatch/OverlayContainer/OverlayContainerTestRoutes';
import PopupTestRoutes from 'terra-popup/tests/nightwatch/PopupTestRoutes';
import ProfileImageTestRoutes from 'terra-profile-image/tests/nightwatch/ProfileImageTestRoutes';
import ProgressBarTestRoutes from 'terra-progress-bar/tests/nightwatch/ProgressBarTestRoutes';
import PropsTableTestRoutes from 'terra-props-table/tests/nightwatch/PropsTableTestRoutes';
import ResponsiveElementTestRoutes from 'terra-responsive-element/tests/nightwatch/ResponsiveElementTestRoutes';
import SearchFieldTestRoutes from 'terra-search-field/tests/nightwatch/SearchFieldTestRoutes';
import SelectTestRoutes from 'terra-form-select/tests/nightwatch/select/SelectTestRoutes';
import SelectOptionTestRoutes from 'terra-form-select/tests/nightwatch/select-option/SelectOptionTestRoutes';
import SelectableListTestRoutes from 'terra-list/tests/nightwatch/selectable-list/SelectableListTestRoutes';
import SelectableTableTestRoutes from 'terra-table/tests/nightwatch/selectable-table/SelectableTableTestRoutes';
import SignatureTestRoutes from 'terra-signature/tests/nightwatch/SignatureTestRoutes';
import SingleSelectTableTestRoutes from 'terra-table/tests/nightwatch/single-select-table/SingleSelectTableTestRoutes';
import SlideGroupTestRoutes from 'terra-slide-group/tests/nightwatch/SlideGroupTestRoutes';
import SlidePanelTestRoutes from 'terra-slide-panel/tests/nightwatch/SlidePanelTestRoutes';
import SpacerTestRoutes from 'terra-spacer/tests/nightwatch/SpacerTestRoutes';
import SingleSelectListTestRoutes from 'terra-list/tests/nightwatch/single-select-list/SingleSelectListTestRoutes';
import StatusTestRoutes from 'terra-status/tests/nightwatch/StatusTestRoutes';
import StatusViewTestRoutes from 'terra-status-view/tests/nightwatch/StatusViewTestRoutes';
import TableIndexRoutes from './examples/table/TableIndexRoutes';
import TableTestRoutes from 'terra-table/tests/nightwatch/table/TableTestRoutes';
import TabsTestRoutes from 'terra-tabs/tests/nightwatch/Tabs/TabsTestRoutes';
import TabPaneTestRoutes from 'terra-tabs/tests/nightwatch/TabPane/TabPaneTestRoutes';
import TextTestRoutes from 'terra-text/tests/nightwatch/TextTestRoutes';
import TimeInputTestRoutes from 'terra-time-input/tests/nightwatch/TimeInputTestRoutes';
import ToggleTestRoutes from 'terra-toggle/tests/nightwatch/ToggleTestRoutes';
import ToggleButtonTestRoutes from 'terra-toggle-button/tests/nightwatch/ToggleButtonTestRoutes';

import TestLinks from './TestLinks';
import TestContainer from './TestContainer';

ReactDOM.render((
  <Router history={hashHistory}>
    <Redirect from="/" to="/site" />
    <Route path="/site" component={App}>
      <IndexRoute component={Home} />
      <Route path="alert" component={AlertExamples} />
      <Route path="arrange" component={ArrangeExamples} />
      <Route path="badge" component={BadgeExamples} />
      <Route path="base" component={BaseExamples} />
      <Route path="button" component={ButtonExamples} />
      <Route path="button-group" component={ButtonGroupExamples} />
      <Route path="card" component={CardExamples} />
      <Route path="collapsible-menu-view" component={CollapsibleMenuViewExamples} />
      <Route path="content-container" component={ContentContainerExamples} />
      <Route path="datepicker" component={DatePickerExamples} />
      <Route path="date-time-picker" component={DateTimePickerExamples} />
      <Route path="demographics-banner" component={DemographicsBannerExamples} />
      <Route path="dialog" component={DialogExamples} />
      <Route path="divider" component={DividerExamples} />
      <Route path="dynamic-grid" component={DynamicGridExamples} />
      <Route path="embedded-content-consumer" component={EmbeddedContentConsumerExamples} />
      <Route path="form" component={FormExamples} />
      <Route path="form-checkbox" component={FormCheckboxExamples} />
      <Route path="form-textarea" component={FormTextareaExamples} />
      <Route path="form-field" component={FormFieldExamples} />
      <Route path="form-input" component={FormInputExamples} />
      <Route path="form-radio" component={FormRadioExamples} />
      <Route path="grid" component={GridExamples} />
      <Route path="heading" component={HeadingExamples} />
      <Route path="hookshot" component={HookshotExamples} />
      <Route path="i18n" component={I18nExamples} />
      <Route path="icon" component={IconExamples} />
      <Route path="image" component={ImageExamples} />
      <Route path="list" component={ListExamples} />
      <Route path="menu" component={MenuExamples} />
      <Route path="modal" component={ModalExamples} />
      <Route path="overlay" component={OverlayExamples} />
      <Route path="popup" component={PopupExamples} />
      <Route path="profile-image" component={ProfileImageExamples} />
      <Route path="progress-bar" component={ProgressBarExamples} />
      <Route path="responsive-element" component={ResponsiveElementExamples} />
      <Route path="search-field" component={SearchFieldExamples} />
      <Route path="section-header" component={SectionHeaderExamples} />
      <Route path="select" component={SelectExamples} />
      <Route path="signature" component={SignatureExamples} />
      <Route path="slide-group" component={SlideGroupExamples} />
      <Route path="slide-panel" component={SlidePanelExamples} />
      <Route path="spacer" component={SpacerExamples} />
      <Route path="status" component={StatusExamples} />
      <Route path="status-view" component={StatusViewExamples} />
      <Route path="table" component={TableExamples} />
      <Route path="tabs" component={TabsExamples} />
      <Route path="text" component={TextExamples} />
      <Route path="time-input" component={TimeInputExamples} />
      <Route path="toggle" component={ToggleExamples} />
      <Route path="toggle-button" component={ToggleButtonExamples} />
      {FormIndexRoutes}
      {ListIndexRoutes}
      {IconIndexRoutes}
      {TableIndexRoutes}
    </Route>
    <Route path="/tests" component={TestContainer}>
      <IndexRoute component={TestLinks} />
      {AlertTestRoutes}
      {ArrangeTestRoutes}
      {BadgeTestRoutes}
      {BaseTestRoutes}
      {ButtonTestRoutes}
      {ButtonGroupTestRoutes}
      {CardTestRoutes}
      {CollapsibleMenuViewTestRoutes}
      {DatePickerTestRoutes}
      {DateTimePickerTestRoutes}
      {DemographicsBannerTestRoutes}
      {DialogTestRoutes}
      {DividerTestRoutes}
      {DynamicGridTestRoutes}
      {EmbeddedContentConsumerTestRoutes}
      {SlidePanelTestRoutes}
      {SpacerTestRoutes}
      {I18nTestRoutes}
      {IconTestRoutes}
      {ImageTestRoutes}
      {ResponsiveElementTestRoutes}
      {ContentContainerTestRoutes}
      {ListTestRoutes}
      {ListItemTestRoutes}
      {SelectableListTestRoutes}
      {SingleSelectListTestRoutes}
      {MultiSelectListTestRoutes}
      {MultiSelectTableTestRoutes}
      {StatusTestRoutes}
      {TableTestRoutes}
      {SelectableTableTestRoutes}
      {SingleSelectTableTestRoutes}
      {TimeInputTestRoutes}
      {MarkdownTestRoutes}
      {MenuTestRoutes}
      {MenuItemTestRoutes}
      {MenuItemGroupTestRoutes}
      {ModalTestRoutes}
      {ProgressBarTestRoutes}
      {PropsTableTestRoutes}
      {GridTestRoutes}
      {SearchFieldTestRoutes}
      {PopupTestRoutes}
      {FormTestRoutes}
      {FormCheckboxTestRoutes}
      {FormTextareaRoutes}
      {FormFieldTestRoutes}
      {FormInputTestRoutes}
      {FormRadioTestRoutes}
      {OverlayTestRoutes}
      {LoadingOverlayTestRoutes}
      {OverlayContainerTestRoutes}
      {ToggleTestRoutes}
      {ToggleButtonTestRoutes}
      {HeadingTestRoutes}
      {TextTestRoutes}
      {SlideGroupTestRoutes}
      {ProfileImageTestRoutes}
      {SignatureTestRoutes}
      {HookshotTestRoutes}
      {SelectTestRoutes}
      {SelectOptionTestRoutes}
      {StatusViewTestRoutes}
      {TabsTestRoutes}
      {TabPaneTestRoutes}
    </Route>
  </Router>
), document.getElementById('root'));
