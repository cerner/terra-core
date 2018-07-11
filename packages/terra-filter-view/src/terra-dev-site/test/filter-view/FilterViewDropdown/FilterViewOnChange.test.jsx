import React from 'react';
import FilterView from '../../../../FilterView';

class FilterViewOnChange extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      callCount: 0,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({ value, callCount: this.state.callCount + 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.callCount}</p>
        <p>{this.state.value}</p>
        <FilterView onChange={this.onChange}>
          <FilterView.Option value="hello" display="Hello" key="hello" />
          <FilterView.Option value="goodbye" display="Good Bye" key="goodbye" />
        </FilterView>
      </div>
    );
  }
}

export default FilterViewOnChange;
