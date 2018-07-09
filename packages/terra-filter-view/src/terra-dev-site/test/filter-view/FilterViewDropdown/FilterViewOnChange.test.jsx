import React from 'react';
import FilterView from '../../../../FilterView';

class FilterViewCallback extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      callCount: 0,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(text) {
    console.log('hello');
    let searchValue = text;
    if (text && text.length > 0 && /\d/.test(text)) {
      searchValue = text.substring(0, text.length - 1);
    }
    this.setState({ searchValue, callCount: this.state.callCount + 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.callCount}</p>
        <p>{this.state.searchValue}</p>
        <FilterView onChange={this.onChange}>
          <FilterView.Option value="hello" display="Hello" key="hello" />
          <FilterView.Option value="goodbye" display="Good Bye" key="goodbye" />
        </FilterView>
      </div>
    );
  }
}

export default FilterViewCallback;
