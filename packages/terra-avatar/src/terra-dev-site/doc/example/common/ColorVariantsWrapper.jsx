import React from 'react';
import Select from 'terra-form-select';

function ColorVariantsWrapper(WrappedComponent) {
  return class ColorVariant extends React.Component {
    constructor(props) {
      super(props);
      this.handleOnSelect = this.handleOnSelect.bind(this);
      this.state = { colorVariant: 'auto' };
    }

    handleOnSelect(value) {
      this.setState({ colorVariant: value });
    }

    render() {
      return (
        <div>
          <WrappedComponent color={this.state.colorVariant} {...this.props} />
          <Select placeholder="Select a color variant" onSelect={this.handleOnSelect} defaultValue="auto" style={{ maxWidth: '300px', marginTop: '10px' }}>
            <Select.Option value="auto" display="Auto" />
            <Select.Option value="neutral" display="Neutral" />
            <Select.Option value="one" display="One" />
            <Select.Option value="two" display="Two" />
            <Select.Option value="three" display="Three" />
            <Select.Option value="four" display="Four" />
            <Select.Option value="five" display="Five" />
            <Select.Option value="six" display="Six" />
            <Select.Option value="seven" display="Seven" />
            <Select.Option value="eight" display="Eight" />
            <Select.Option value="nine" display="Nine" />
            <Select.Option value="ten" display="Ten" />
          </Select>
        </div>
      );
    }
  };
}

export default ColorVariantsWrapper;
