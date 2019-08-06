import React from 'react';

function FitTypesWrapper(WrappedComponent) {
  return class FitTypes extends React.Component {
    constructor(props) {
      super(props);
      this.handleOnSelect = this.handleOnSelect.bind(this);
      this.state = { fitType: 'fill', variantType: 'default' };
    }

    handleOnSelect(event) {
      this.setState({ [event.target.name]: event.target.value });
    }

    render() {
      return (
        <div>
          <WrappedComponent fit={this.state.fitType} variant={this.state.variantType} {...this.props} />
          <p><label htmlFor="fitType">Select a Fit Type:</label></p>
          <select id="fitType" name="fitType" value={this.state.fitType} onChange={this.handleOnSelect}>
            <option value="fill">fill</option>
            <option value="cover">cover</option>
            <option value="contain">contain</option>
            <option value="scale-down">scale-down</option>
            <option value="none">none</option>
          </select>
          <p><label htmlFor="variantType">Select a Variant Type:</label></p>
          <select id="variantType" name="variantType" value={this.state.variantType} onChange={this.handleOnSelect}>
            <option value="default">default</option>
            <option value="circle">circle</option>
            <option value="rounded">rounded</option>
            <option value="thumbnail">thumbnail</option>
          </select>
        </div>
      );
    }
  };
}

export default FitTypesWrapper;
