import React from 'react';

import InputField from '../../../InputField';

class InputFieldExample extends React.Component {
  constructor() {
    super();

    this.state = {
      isInvalid: false,
    };

    this.toggleInvalid = this.toggleInvalid.bind(this);
  }

  toggleInvalid() {
    this.setState(prevState => ({
      isInvalid: !prevState.isInvalid,
    }));
  }

  render() {
    return (
      <div>
        <button type="button" id="validity-toggle" onClick={this.toggleInvalid}>Toggle Validity</button>
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
          showOptional
          style={{ color: 'red' }}
          maxWidth="30%"
        />
      </div>
    );
  }
}

export default InputFieldExample;
