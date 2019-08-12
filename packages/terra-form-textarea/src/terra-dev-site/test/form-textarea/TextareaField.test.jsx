import React from 'react';

import TextareaField from '../../../TextareaField';

class TextareaFieldExample extends React.Component {
  constructor() {
    super();

    this.state = {
      isInvalid: false,
    };

    this.toggleInvalid = this.toggleInvalid.bind(this);
  }

  toggleInvalid() {
    this.setState((prevState) => ({
      isInvalid: !prevState.isInvalid,
    }));
  }

  render() {
    return (
      <div>
        <button type="button" id="validity-toggle" onClick={this.toggleInvalid}>Toggle Validity</button>
        <TextareaField
          defaultValue="Value"
          inputId="test-input"
          error="Error message."
          help="Help message."
          hideRequired
          inputAttrs={{
            name: 'test',
          }}
          isInvalid={this.state.isInvalid}
          label="Label Text"
          labelAttrs={{
            className: 'label',
          }}
          showOptional
        />
      </div>
    );
  }
}

export default TextareaFieldExample;
