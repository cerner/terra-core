import React from 'react';

import InputField from '../../../InputField';

class InputFieldExample extends React.Component {
  constructor() {
    super();

    this.state = {
      isInvalid: false,
    };

    this.toggleInvalid = this.toggleInvalid.bind(this);
    this.refCallback = this.refCallback.bind(this);
  }

  componentDidMount() {
    this.input.focus();
  }

  refCallback(input) {
    this.input = input;
  }

  toggleInvalid() {
    this.setState({
      isInvalid: !this.state.isInvalid,
    });
  }

  render() {
    return (
      <div>
        <button id="validity-toggle" onClick={this.toggleInvalid}>Toggle Validity</button>
        <InputField
          inputId="test-input"
          defaultValue="Value"
          error="Text"
          help="Help"
          hideRequired
          inputAttrs={{
            name: 'test',
            type: 'text',
          }}
          isInvalid={this.state.isInvalid}
          label="Label Text"
          labelAttrs={{
            className: 'label',
          }}
          refCallback={this.refCallback}
          showOptional
        />
      </div>
    );
  }
}

export default InputFieldExample;
