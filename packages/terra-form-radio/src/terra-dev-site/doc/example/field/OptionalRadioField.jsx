import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Radio from 'terra-form-radio/lib/Radio';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import RadioField from 'terra-form-radio/lib/RadioField';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAnswer: undefined,
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    this.setState({ selectedAnswer: e.currentTarget.value });
  }

  render() {
    return (
      <RadioField
        legend="Which Type of Meal are you looking for?"
        help="This cannot be changed when submitted"
        showOptional
      >
        <Radio id="frontend-track" name="track" labelText="Frontend Development" onChange={this.handleOnChange} value="backend" />
        <Radio id="backend-track" name="track" labelText="Backend Development" onChange={this.handleOnChange} value="frontend" />
        <Radio id="devops-track" name="track" labelText="DevOps" onChange={this.handleOnChange} value="devops" />
      </RadioField>
    );
  }
}
