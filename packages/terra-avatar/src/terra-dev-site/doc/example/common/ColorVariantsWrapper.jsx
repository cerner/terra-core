import React from 'react';

function ColorVariantsWrapper(WrappedComponent) {
  return class ColorVariant extends React.Component {
    constructor(props) {
      super(props);
      this.handleOnSelect = this.handleOnSelect.bind(this);
      this.state = { colorVariant: 'auto' };
    }

    handleOnSelect(event) {
      this.setState({ [event.target.name]: event.target.value });
    }

    render() {
      return (
        <div>
          <WrappedComponent color={this.state.colorVariant} {...this.props} />
          <p><label htmlFor="colorVariant">Select a color variant:</label></p>
          <select id="colorVariant" name="colorVariant" value={this.state.colorVariant} onChange={this.handleOnSelect}>
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
