import React from 'react';

function FitTypesWrapper(WrappedComponent) {
  return class FitTypes extends React.Component {
    constructor(props) {
      super(props);
      this.handleOnSelect = this.handleOnSelect.bind(this);
      this.state = { FitType: 'fill', VariantType: 'square' };
    }

    handleOnSelect(event) {
      this.setState({ [event.target.name]: event.target.value });
    }

    render() {
      return (
        <div>
          <WrappedComponent fit={this.state.FitType} variant={this.state.VariantType} {...this.props} />
          <p><label htmlFor="FitType">Select a Fit Type:</label></p>
          <select id="FitType" name="FitType" value={this.state.FitType} onChange={this.handleOnSelect}>
            <option value="fill">fill</option>
            <option value="cover">cover</option>
            <option value="contain">contain</option>
            <option value="scale-down">scale-down</option>
            <option value="none">none</option>
          </select>
          <p><label htmlFor="VariantType">Select a Variant Type:</label></p>
          <select id="VariantType" name="VariantType" value={this.state.VariantType} onChange={this.handleOnSelect}>
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
