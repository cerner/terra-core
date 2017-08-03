import React from 'react';
import Field from 'terra-form/lib/Field';
import Input from 'terra-form/lib/Input';

class FieldExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: 'Element' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <Field
            type="checkbox"
            label="Where do you work"
            name="work_location"
            error="This field is required"
            help="We need to to verify if you work for a big or small company"
            required
          >
            <Input type="text" defaultValue="Element" onChange={this.handleChange} />
          </Field>
        </form>
        <hr /><p>Input Provided: {this.state.input}</p>
        <br />
      </div>
    );
  }
}
export default FieldExamples;
