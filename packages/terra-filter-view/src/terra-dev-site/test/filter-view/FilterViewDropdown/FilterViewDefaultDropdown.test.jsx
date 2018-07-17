import React from 'react';
import FilterView from '../../../../FilterView';

function FilterViewDefaultDropdown() {
  return (
    <FilterView variant="dropdown" >
      <FilterView.Option value="red" display="Red" key="red" />
      <FilterView.Option value="green" display="Green" key="green" />
      <FilterView.Option value="blue" display="Blue" key="blue" />
    </FilterView>
  );
}
export default () => <FilterViewDefaultDropdown />;
