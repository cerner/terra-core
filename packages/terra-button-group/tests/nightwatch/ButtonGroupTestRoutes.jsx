/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ButtonGroupTests from './ButtonGroupTests';
import { TextButtonGroup, IconButtonGroup } from './IconButtonGroupButton';
import SingleSelectButtonGroup from './SingleSelectButtonGroup';
import MultiSelectButtonGroup from './MultiSelectButtonGroup';
import OnChangeButtonGroup from './OnChangeButtonGroup';
import NonSelectableButtonGroup from './NonSelectableButtonGroup';

const routes = (
  <div>
    <Route path="/tests/button-group-tests" component={ButtonGroupTests} />
    <Route path="/tests/button-group-tests/text-button-group" component={TextButtonGroup} />
    <Route path="/tests/button-group-tests/icon-button-group" component={IconButtonGroup} />
    <Route path="/tests/button-group-tests/not-selectable-button-group" component={NonSelectableButtonGroup} />
    <Route path="/tests/button-group-tests/single-select-button-group" component={SingleSelectButtonGroup} />
    <Route path="/tests/button-group-tests/multi-select-button-group" component={MultiSelectButtonGroup} />
    <Route path="/tests/button-group-tests/on-change-button-group" component={OnChangeButtonGroup} />
  </div>
);

export default routes;
