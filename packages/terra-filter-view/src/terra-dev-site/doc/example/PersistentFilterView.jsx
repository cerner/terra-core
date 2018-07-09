import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import FilterView from 'terra-filter-view/lib/FilterView';

const PersistentFilterView = () => (
  <FilterView variant="persistent" >
    <FilterView.Option value="red" display="Red" key="red" />
    <FilterView.Option value="blue" display="Blue" key="blue" />
    <FilterView.Option value="green" display="Green" key="green" />
  </FilterView>
);

export default () => PersistentFilterView();
