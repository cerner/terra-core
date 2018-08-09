import React from 'react';
import FilterView from '../../../../FilterView';

function FilterViewNoResultContent() {
  return (
    <FilterView variant="dropdown" noResultContent={<div>Custom no result content.</div>}>
      <FilterView.Option value="red" display="Red" key="red" />
      <FilterView.Option value="green" display="Green" key="green" />
      <FilterView.Option value="blue" display="Blue" key="blue" />
    </FilterView>
  );
}
export default FilterViewNoResultContent;
