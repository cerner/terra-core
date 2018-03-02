/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import SectionHeaderTests from './SectionHeaderTests';

// Test Cases
import DefaultSectionHeader from './DefaultSectionHeader';
import LongTitleSectionHeader from './LongTitleSectionHeader';
import LongTitleAccordionSectionHeader from './LongTitleAccordionSectionHeader';
import ClosedSectionHeader from './ClosedSectionHeader';
import OpenSectionHeader from './OpenSectionHeader';
import OnClickSectionHeader from './OnClickSectionHeader';

const routes = (
  <div>
    <Route path="/tests/section-header-tests" component={SectionHeaderTests} />
    <Route path="/tests/section-header-tests/default-section-header" component={DefaultSectionHeader} />
    <Route path="/tests/section-header-tests/closed-section-header" component={ClosedSectionHeader} />
    <Route path="/tests/section-header-tests/open-section-header" component={OpenSectionHeader} />
    <Route path="/tests/section-header-tests/long-title-section-header" component={LongTitleSectionHeader} />
    <Route path="/tests/section-header-tests/long-title-accordion-section-header" component={LongTitleAccordionSectionHeader} />
    <Route path="/tests/section-header-tests/on-click-section-header" component={OnClickSectionHeader} />
  </div>
);

export default routes;
