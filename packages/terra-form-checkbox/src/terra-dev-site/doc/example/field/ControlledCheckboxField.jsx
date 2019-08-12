import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Checkbox from 'terra-form-checkbox/lib/Checkbox';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
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
    this.setState((prevState) => ({ isInvalid: !prevState.isInvalid }));
  }

  render() {
    const errorMessage = 'All options are now invalid';

    return (
      <div>
        <div>
          <CheckboxField
            legend="What departments are you looking to work for?"
            help="These are the core areas we need for graphic designers"
            isInvalid={this.state.isInvalid || this.state.selectedAnswers.length <= 0}
            error={this.state.isInvalid ? errorMessage : 'You must be willing to work in one of these departments'}
            required
          >
            <Checkbox id="ux-dept" name="dept[]" labelText="UX/Interaction Design" onChange={this.handleOnChange} value="ux" />
            <Checkbox id="magazine-dept" name="dept[]" labelText="Magazine Advertisements" onChange={this.handleOnChange} value="magazine" />
            <Checkbox id="website-dept" name="dept[]" labelText="Website Advertisements" onChange={this.handleOnChange} value="website" />
            <Checkbox id="events-dept" name="dept[]" labelText="Event Promotions" onChange={this.handleOnChange} value="events" />
          </CheckboxField>
        </div>
        <hr />
        <button type="button" aria-label="Toggle Invalid Status" onClick={this.handleOnClick}>Toggle Invalid Status</button>
      </div>
    );
  }
}
