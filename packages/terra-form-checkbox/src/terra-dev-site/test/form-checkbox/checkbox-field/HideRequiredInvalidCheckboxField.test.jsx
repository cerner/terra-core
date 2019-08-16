import React from 'react';
import Checkbox from '../../../../Checkbox';
import CheckboxField from '../../../../CheckboxField';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAnswers: [],
    };

    this.handleOnChange = this.handleOnChange.bind(this);
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

  render() {
    return (
      <CheckboxField
        id="testing-checkbox-field"
        legend="What departments are you looking to work for?"
        help="These are the core areas we need for graphic designers"
        isInvalid={this.state.selectedAnswers.length <= 0}
        error="You must be willing to work in one of these departments"
        isInline
        required
        hideRequired
      >
        <Checkbox id="ux-dept" name="dept[]" labelText="UX/Interaction Design" onChange={this.handleOnChange} value="ux" />
        <Checkbox id="magazine-dept" name="dept[]" labelText="Magazine Advertisements" onChange={this.handleOnChange} value="magazine" />
        <Checkbox id="website-dept" name="dept[]" labelText="Website Advertisements" onChange={this.handleOnChange} value="website" />
        <Checkbox id="events-dept" name="dept[]" labelText="Event Promotions" onChange={this.handleOnChange} value="events" />
      </CheckboxField>
    );
  }
}
