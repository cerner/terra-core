import React from 'react';
import Checkbox from 'terra-form-checkbox';
import CheckboxField from 'terra-form-checkbox/lib/CheckboxField';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isInvalid: false,
      selectedAnswers: [],
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnChange(e) {
    const { selectedAnswers } = this.state;

    if (e.currentTarget.checked) {
      selectedAnswers.push(e.currentTarget.value);
    } else {
      selectedAnswers.splice(selectedAnswers.indexOf(e.currentTarget.value), 1);
    }

    this.setState({ selectedAnswers });
  }

  handleOnClick() {
    this.setState(prevState => ({ isInvalid: !prevState.isInvalid }));
  }

  render() {
    const errorMessage = 'All options are now invalid';

    return (
      <div>
        <div>
          <CheckboxField
            error={errorMessage}
            isInvalid={this.state.isInvalid}
            legend="Do you wish to use any of our services for new hires?"
            help="These are not required, but make it easier to transition to our city"
            showOptional
          >
            <Checkbox id="roommate-service" name="service[]" labelText="Roommate Search" onChange={this.handleOnChange} value="roommate" />
            <Checkbox id="location-service" name="service[]" labelText="Relocation Assistance" onChange={this.handleOnChange} value="relocation" />
            <Checkbox id="city-tour-service" name="service[]" labelText="City Tours" onChange={this.handleOnChange} value="city_tours" />
          </CheckboxField>
        </div>
        <hr />
        <button type="button" aria-label="Toggle Invalid Status" onClick={this.handleOnClick}>Toggle Invalid Status</button>
      </div>
    );
  }
}
