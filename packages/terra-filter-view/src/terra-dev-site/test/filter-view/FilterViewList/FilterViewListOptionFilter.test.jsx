import React from 'react';
import FilterView from '../../../../FilterView';

class FilterViewListOptionFilter extends React.Component {
  static customFilter(searchValue, option) {
    return option.props.display.includes(searchValue);
  }

  render() {
    return (
      <div>
        <FilterView variant="list" optionFilter={this.constructor.customFilter} >
          <FilterView.Option value="hello" display="Hello" key="hello" />
          <FilterView.Option value="goodbye" display="Good Bye" key="goodbye" />
        </FilterView>
      </div>
    );
  }
}

export default FilterViewListOptionFilter;
