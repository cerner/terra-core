import React from 'react';

function GenericAvatarVariantsWrapper(WrappedComponent) {
  return class GenericVariants extends React.Component {
    constructor(props) {
      super(props);
      this.handleOnSelect = this.handleOnSelect.bind(this);
      this.state = { colorVariant: 'auto', size: undefined, variant: 'single-user' };
    }

    handleOnSelect(event) {
      this.setState({ [event.target.name]: event.target.value });
    }

    render() {
      return (
        <div>
          <WrappedComponent color={this.state.colorVariant} variant={this.state.variant} size={this.state.size} {...this.props} />
          <p><label htmlFor="variant">Select a generic variant type:</label></p>
          <select id="variant" name="variant" value={this.state.variant} onChange={this.handleOnSelect}>
            <option value="single-user">Single-User</option>
            <option value="shared-user">Shared-User</option>
            <option value="provider">Provider</option>
          </select>
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
          <p><label htmlFor="size">Select a size:</label></p>
          <select id="size" name="size" value={this.state.size} onChange={this.handleOnSelect}>
            <option value="1em">Default</option>
            <option value="2em">2em</option>
            <option value="3em">3em</option>
          </select>
        </div>
      );
    }
  };
}

export default GenericAvatarVariantsWrapper;
