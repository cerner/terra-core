/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import SelectableListTests from './SelectableListTests';
import DefaultSelectableList from './DefaultSelectableList';
import PreselectedItemSelectableList from './PreselectedItemSelectableList';
import ItemsDividedSelectableList from './ItemsDividedSelectableList';
import ChevronSelectableList from './ChevronSelectableList';
import OnChangeSelectableList from './OnChangeSelectableList';
import NonSelectableItemSelectableList from './NonSelectableItemSelectableList';
import OneItemSelectableList from './OneItemSelectableList';
import NoItemsSelectableList from './NoItemsSelectableList';
import SingleChevronSelectableList from './SingleChevronSelectableList';
import SingleNonChevronSelectableList from './SingleNonChevronSelectableList';
import DisableUnselectedSelectableList from './DisableUnselectedSelectableList';

const routes = (
  <div>
    <Route path="/tests/selectable-list-tests" component={SelectableListTests} />
    <Route path="/tests/selectable-list-tests/default" component={DefaultSelectableList} />
    <Route path="/tests/selectable-list-tests/preselected" component={PreselectedItemSelectableList} />
    <Route path="/tests/selectable-list-tests/items-divided" component={ItemsDividedSelectableList} />
    <Route path="/tests/selectable-list-tests/chevron" component={ChevronSelectableList} />
    <Route path="/tests/selectable-list-tests/on-change" component={OnChangeSelectableList} />
    <Route path="/tests/selectable-list-tests/non-selectable" component={NonSelectableItemSelectableList} />
    <Route path="/tests/selectable-list-tests/one-item" component={OneItemSelectableList} />
    <Route path="/tests/selectable-list-tests/no-items" component={NoItemsSelectableList} />
    <Route path="/tests/selectable-list-tests/single-chevron" component={SingleChevronSelectableList} />
    <Route path="/tests/selectable-list-tests/single-non-chevron" component={SingleNonChevronSelectableList} />
    <Route path="/tests/selectable-list-tests/disabled-on-change" component={DisableUnselectedSelectableList} />
  </div>
);

export default routes;
