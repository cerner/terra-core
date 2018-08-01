import React from 'react';
import FilterView from '../../../../FilterView';

function FilterViewListNoResultContent() {
  return (
    <FilterView variant="list" noResultContent={<div>Custom no results found.</div>}>
      <FilterView.Option value="red" display="Red" key="red" />
      <FilterView.Option value="green" display="Green" key="green" />
      <FilterView.Option value="blue" display="Blue" key="blue" />
    </FilterView>
  );
}
export default FilterViewListNoResultContent;
