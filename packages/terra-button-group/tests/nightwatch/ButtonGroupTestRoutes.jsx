/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ButtonGroupTests from './ButtonGroupTests';
import EmptyButtonGroup from './DefaultButtonGroup';
import { TinyButtonGroup, SmallButtonGroup, MediumButtonGroup, LargeButtonGroup, HugeButtonGroup } from './SizeButtonGroup';
import CompactButtonGroup from './CompactButtonGroup';
import { IconDefaultButtonGroup, IconReversedButtonGroup, IconOnlyButtonGroup } from './IconButtonGroupButton';
import { DefaultButtonGroup, SecondaryButtonGroup } from './VariantButtonGroup';
import SelectableButtonGroup from './SelectableButtonGroup';
import OnChangeButtonGroup from './OnChangeButtonGroup';

const routes = (
  <div>
    <Route path="/tests/button-group-tests" component={ButtonGroupTests} />
    <Route path="/tests/button-group-tests/default-button-group" component={EmptyButtonGroup} />
    <Route path="/tests/button-group-tests/tiny-button-group" component={TinyButtonGroup} />
    <Route path="/tests/button-group-tests/small-button-group" component={SmallButtonGroup} />
    <Route path="/tests/button-group-tests/medium-button-group" component={MediumButtonGroup} />
    <Route path="/tests/button-group-tests/large-button-group" component={LargeButtonGroup} />
    <Route path="/tests/button-group-tests/huge-button-group" component={HugeButtonGroup} />
    <Route path="/tests/button-group-tests/compact-button-group" component={CompactButtonGroup} />
    <Route path="/tests/button-group-tests/icon-default-button-group" component={IconDefaultButtonGroup} />
    <Route path="/tests/button-group-tests/icon-reversed-button-group" component={IconReversedButtonGroup} />
    <Route path="/tests/button-group-tests/icon-only-button-group" component={IconOnlyButtonGroup} />
    <Route path="/tests/button-group-tests/default-variant-button-group" component={DefaultButtonGroup} />
    <Route path="/tests/button-group-tests/secondary-variant-button-group" component={SecondaryButtonGroup} />
    <Route path="/tests/button-group-tests/selectable-button-group" component={SelectableButtonGroup} />
    <Route path="/tests/button-group-tests/on-change-button-group" component={OnChangeButtonGroup} />
  </div>
);

export default routes;
