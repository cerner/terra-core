import React from 'react';
import FilterView from '../../../../FilterView';

function FilterViewDefaultList() {
  return (
    <FilterView variant="list" >
      <FilterView.Option value="red" display="Red" key="red" />
      <FilterView.Option value="green" display="Green" key="green" />
      <FilterView.Option value="blue" display="Blue" key="blue" />
    </FilterView>
  );
}
export default FilterViewDefaultList;
