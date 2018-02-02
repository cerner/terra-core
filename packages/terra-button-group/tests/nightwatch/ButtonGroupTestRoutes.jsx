/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ButtonGroupTests from './ButtonGroupTests';
import { TextButtonGroup, IconButtonGroup, LongTextButtonGroup } from './ButtonGroupTextAndIcon';
import ButtonGroupSingleSelect from './ButtonGroupSingleSelect';
import ButtonGroupMultiSelect from './ButtonGroupMultiSelect';
import ButtonGroupNotSelectable from './ButtonGroupNotSelectable';
import ButtonGroupDisabledButtons from './ButtonGroupDisabledButtons';

const routes = (
  <div>
    <Route path="/tests/button-group-tests" component={ButtonGroupTests} />
    <Route path="/tests/button-group-tests/text-button-group" component={TextButtonGroup} />
    <Route path="/tests/button-group-tests/long-text-button-group" component={LongTextButtonGroup} />
    <Route path="/tests/button-group-tests/icon-button-group" component={IconButtonGroup} />
    <Route path="/tests/button-group-tests/not-selectable-button-group" component={ButtonGroupNotSelectable} />
    <Route path="/tests/button-group-tests/disabled-button-group" component={ButtonGroupDisabledButtons} />
    <Route path="/tests/button-group-tests/single-select-button-group" component={ButtonGroupSingleSelect} />
    <Route path="/tests/button-group-tests/multi-select-button-group" component={ButtonGroupMultiSelect} />
  </div>
);

export default routes;
