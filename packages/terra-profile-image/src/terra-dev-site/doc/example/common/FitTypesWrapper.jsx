import React from 'react';

function FitTypesWrapper(WrappedComponent) {
  return class FitTypes extends React.Component {
    constructor(props) {
      super(props);
      this.handleOnSelect = this.handleOnSelect.bind(this);
      this.state = { fitType: 'cover' };
    }

    handleOnSelect(event) {
      this.setState({ fitType: event.target.value });
    }

    render() {
      return (
        <div>
          <WrappedComponent fit={this.state.fitType} {...this.props} />
          <p><label htmlFor="fitType">Select an image styling &#39;fit&#39; type:</label></p>
          <select id="fitType" name="fitType" value={this.state.fitType} onChange={this.handleOnSelect}>
            <option value="cover">cover</option>
            <option value="contain">contain</option>
            <option value="scale-down">scale-down</option>
            <option value="none">none</option>
          </select>
        </div>
      );
    }
  };
}

export default FitTypesWrapper;
