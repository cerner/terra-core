import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Radio from 'terra-form-radio/lib/Radio';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Radio from 'terra-form-radio/lib/RadioField';

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
    let errorMessage = 'An answer must be chosen';
    let isInvalid = false;

    if (this.state.selectedAnswer === 'mcdonalds') {
      errorMessage = 'We only serve adult meals here.';
      isInvalid = true;
    } else if (this.state.selectedAnswer === undefined) {
      isInvalid = true;
    }

    return (
      <RadioField
        legend="Which Type of Meal are you looking for?"
        help="This cannot be changed when submitted"
        isInvalid={isInvalid}
        error={errorMessage}
        required
      >
        <Radio id="chicken-meal" name="meal" labelText="Chicken" onChange={this.handleOnChange} value="chicken" />
        <Radio id="salmon-meal" name="meal" labelText="Salmon" onChange={this.handleOnChange} value="salmon" />
        <Radio id="mcdonalds-meal" name="meal" labelText="McDonalds (Not a valid choice)" onChange={this.handleOnChange} value="mcdonalds" />
      </RadioField>
    );
  }
}
