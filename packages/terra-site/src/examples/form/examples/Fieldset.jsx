import React from 'react';
import Field from 'terra-form/lib/Field';
import Fieldset from 'terra-form/lib/Fieldset';
import Input from 'terra-form/lib/Input';

class FieldsetExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      middle: '',
      last: '',
    };
    this.handleFirstChange = this.handleFirstChange.bind(this);
    this.handleMiddleChange = this.handleMiddleChange.bind(this);
    this.handleLastChange = this.handleLastChange.bind(this);
  }

  handleFirstChange(event) {
    this.setState({ first: event.target.value });
  }

  handleMiddleChange(event) {
    this.setState({ middle: event.target.value });
  }

  handleLastChange(event) {
    this.setState({ last: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <Fieldset
            type="checkbox"
            legend="Give your full name here"
            name="children_present"
            value="children_present"
            error="All fields must be filled out"
            help="Families are eligible for family package plans"
            required
          >
            <Field label="First" isInline required htmlFor="test">
              <Input id="test" type="text" name="first" defaultValue="" onChange={this.handleFirstChange} />
            </Field>
            <Field label="Middle" isInline required>
              <Input type="text" name="middle" defaultValue="" onChange={this.handleMiddleChange} />
            </Field>
            <Field label="Last" isInline required>
              <Input type="text" name="last" defaultValue="" onChange={this.handleLastChange} />
            </Field>
          </Fieldset>
        </form>
        <hr />
        <p>Full Name Provided: {this.state.first} {this.state.middle} {this.state.last}</p>
        <br />
      </div>
    );
  }
}
export default FieldsetExamples;
