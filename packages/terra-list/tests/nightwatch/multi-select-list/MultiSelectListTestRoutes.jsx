/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import MultiSelectListTests from './MultiSelectListTests';
import DefaultMultiSelectList from './DefaultMultiSelectList';
import ItemsDividedMultiSelectList from './ItemsDividedMultiSelectList';
import MaxCountMultiSelectList from './MaxCountMultiSelectList';
import OnChangeMultiSelectList from './OnChangeMultiSelectList';
import OnChangeMultiSelectListWithMaxSelection from './OnChangeMultiSelectListWithMaxSelection';
import MultiSelectListWithNoDeselectItem from './MultiSelectListWithNoDeselectItem';
import MultiSelectListWithPreselectedItem from './MultiSelectListWithPreselectedItem';
import MultiSelectListWithNonSelectableItem from './MultiSelectListWithNonSelectableItem';
import MultiSelectListOneItem from './MultiSelectListOneItem';
import MultiSelectListNoItems from './MultiSelectListNoItems';

const routes = (
  <div>
    <Route path="/tests/multi-select-list-tests" component={MultiSelectListTests} />
    <Route path="/tests/multi-select-list-tests/default" component={DefaultMultiSelectList} />
    <Route path="/tests/multi-select-list-tests/items-divided" component={ItemsDividedMultiSelectList} />
    <Route path="/tests/multi-select-list-tests/max-count" component={MaxCountMultiSelectList} />
    <Route path="/tests/multi-select-list-tests/on-change" component={OnChangeMultiSelectList} />
    <Route path="/tests/multi-select-list-tests/max-count-on-change" component={OnChangeMultiSelectListWithMaxSelection} />
    <Route path="/tests/multi-select-list-tests/no-deselect" component={MultiSelectListWithNoDeselectItem} />
    <Route path="/tests/multi-select-list-tests/preselected" component={MultiSelectListWithPreselectedItem} />
    <Route path="/tests/multi-select-list-tests/non-selectable" component={MultiSelectListWithNonSelectableItem} />
    <Route path="/tests/multi-select-list-tests/one-item" component={MultiSelectListOneItem} />
    <Route path="/tests/multi-select-list-tests/no-items" component={MultiSelectListNoItems} />
  </div>
);

export default routes;
