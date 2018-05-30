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
    this.setState({
      isInvalid: !this.state.isInvalid,
    });
  }

  render() {
    return (
      <div>
        <button id="validity-toggle" onClick={this.toggleInvalid}>Toggle Validity</button>
        <TextareaField
          inputId="test-input"
          defaultValue="Value"
          error="Text"
          help="Help"
          hideRequired
          inputAttrs={{
            name: 'test',
            type: 'number',
          }}
          isInvalid={this.state.isInvalid}
          label="Label Text"
          labelAttrs={{
            className: 'label',
          }}
          onChange={() => {}}
          showOptional
          value="Value"
        />
      </div>
    );
  }
}

export default TextareaFieldExample;
