import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import FilterView from 'terra-filter-view/lib/FilterView';

const OptGroup = () => (
  <FilterView variant="list" >
    <FilterView.OptGroup label="Colors">
      <FilterView.Option value="red" display="Red" key="red" />
      <FilterView.Option value="blue" display="Blue" key="blue" />
      <FilterView.Option value="green" display="Green" key="green" />
    </FilterView.OptGroup>
  </FilterView>
);

export default OptGroup;
