import React from 'react';
import FilterView from '../../../../FilterView';

function FilterViewDisabled() {
  return (
    <FilterView variant="dropdown" disabled >
      <FilterView.OptGroup label="Colors">
        <FilterView.Option value="red" display="Red" key="red" />
        <FilterView.Option value="green" display="Green" key="green" />
        <FilterView.Option value="blue" display="Blue" key="blue" />
      </FilterView.OptGroup>
    </FilterView>
  );
}
export default () => <FilterViewDisabled />;
