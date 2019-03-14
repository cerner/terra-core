import React from 'react';

const styles = {
  fontSize: '1.143rem',
  display: 'block',
  backgroundColor: 'white',
  border: '0.5px solid rgba(0, 0, 0, 0.2)',
  height: '30px',
  width: '300px',
  marginTop: '10px',
};

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
          <select placeholder="Select a color variant" onSelect={this.handleOnSelect} defaultValue="auto" style={styles}>
            <option value="auto">Auto</option>
            <option value="neutral">Neutral</option>
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
            <option value="four">Four</option>
            <option value="five">Five</option>
            <option value="six">Six</option>
            <option value="seven">Seven</option>
            <option value="eight">Eight</option>
            <option value="nine">Nine</option>
            <option value="ten">Ten</option>
          </select>
        </div>
      );
    }
  };
}

export default ColorVariantsWrapper;
