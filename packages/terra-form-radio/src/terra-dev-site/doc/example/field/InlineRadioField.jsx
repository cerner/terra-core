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
      toggleInline: false,
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnChange(e) {
    this.setState({ selectedAnswer: e.currentTarget.value });
  }

  handleOnClick() {
    this.setState(prevState => ({
      toggleInline: !prevState.toggleInline,
    }));
  }

  render() {
    let errorMessage = 'An answer must be chosen';
    let isInvalid;

    if (this.state.selectedAnswer === 'mcdonalds') {
      errorMessage = 'Invalid option selected.';
      isInvalid = true;
    } else if (this.state.selectedAnswer === undefined) {
      isInvalid = true;
    }

    return (
      <div>
        <button style={{ marginBottom: '5px' }} type="button" aria-label="Toggle Inline" onClick={this.handleOnClick}>Toggle Inline</button>
        <hr />
        <div>
          <RadioField
            legend="Which Type of Meal are you looking for?"
            help="This cannot be changed when submitted"
            isInline={this.state.toggleInline}
            isInvalid={isInvalid}
            error={errorMessage}
            required
          >
            <Radio id="inline-chicken-meal" name="meal" labelText="Chicken" onChange={this.handleOnChange} value="chicken" />
            <Radio id="inline-salmon-meal" name="meal" labelText="Salmon" onChange={this.handleOnChange} value="salmon" />
            <Radio id="inline-mcdonalds-meal" name="meal" labelText="McDonalds (Not a valid choice)" onChange={this.handleOnChange} value="mcdonalds" />
          </RadioField>
          <RadioField
            legend="Which Type of Sides do you want?"
            help="This cannot be changed when submitted"
            isInline={this.state.toggleInline}
            required
          >
            <Radio id="fries" name="side" labelText="Fries" value="fries" />
            <Radio id="fruit" name="side" labelText="Fruit" value="fruit" />
            <Radio id="salad" name="side" labelText="Salad" value="salad" />
          </RadioField>
        </div>
      </div>
    );
  }
}
