import React from 'react';
import SelectField from '../../../SelectField';

class SelectFieldExample extends React.Component {
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
        <SelectField
          label="T-shirt size"
          placeholder="Select a size"
          selectId="select-field"
          defaultValue="small"
          error="Error message."
          help="Help message."
          isInvalid={this.state.isInvalid}
        >
          <SelectField.Option value="xSmall" display="Extra Small" />
          <SelectField.Option value="small" display="Small" />
          <SelectField.Option value="medium" display="Medium" />
          <SelectField.Option value="large" display="Large" />
          <SelectField.Option value="xLarge" display="Extra Large" />
        </SelectField>
      </div>
    );
  }
}

export default SelectFieldExample;
