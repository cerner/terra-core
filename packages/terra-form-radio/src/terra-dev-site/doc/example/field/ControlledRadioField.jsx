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
      toggleInvalid: false,
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnChange(e) {
    this.setState({ selectedAnswer: e.currentTarget.value });
  }

  handleOnClick() {
    if (this.state.toggleInvalid) {
      this.setState({ toggleInvalid: false });
    } else {
      this.setState({ toggleInvalid: true });
    }
  }

  render() {
    let errorMessage = this.state.toggleInvalid ? 'All options are now invalid' : undefined;
    let isInvalid = false;

    if (this.state.selectedAnswer === 'mcdonalds') {
      errorMessage = 'Invalid option selected.';
      isInvalid = true;
    } else if (this.state.selectedAnswer === undefined) {
      isInvalid = true;
    }

    return (
      <div>
        <div>
          <RadioField
            legend="Which Type of Meal are you looking for?"
            help="This cannot be changed when submitted"
            isInvalid={this.state.toggleInvalid || isInvalid}
            error={errorMessage}
            required
          >
            <Radio id="chicken-meal" name="meal" labelText="Chicken" onChange={this.handleOnChange} value="chicken" />
            <Radio id="salmon-meal" name="meal" labelText="Salmon" onChange={this.handleOnChange} value="salmon" />
            <Radio id="mcdonalds-meal" name="meal" labelText="McDonalds (Not a valid choice)" onChange={this.handleOnChange} value="mcdonalds" />
          </RadioField>
        </div>
        <hr />
        <button style={{ marginBottom: '5px' }} type="button" aria-label="Toggle Invalid Status" onClick={this.handleOnClick}>Toggle Invalid Status</button>
      </div>
    );
  }
}
