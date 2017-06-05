// remove eslint-disable once terra-form has been published
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Button from 'terra-button';
import Field from 'terra-form/lib/Field';
import Fieldset from 'terra-form/lib/Fieldset';
import Input from 'terra-form/lib/Input';
/* eslint-enable import/no-extraneous-dependencies */

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        jobTitle: '',
        first: '',
        middle: '',
        last: '',
      },
    };

    this.handleEmploymentUpdate = this.handleEmploymentUpdate.bind(this);
    this.handleNameUpdate = this.handleNameUpdate.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleEmploymentUpdate(e) {
    const formData = Object.assign({}, this.state.formData);
    formData.jobTitle = e.target.value;
    this.setState({ formData });
  }

  handleNameUpdate(e) {
    const formData = Object.assign({}, this.state.formData);
    formData[e.target.name] = e.target.value;
    this.setState({ formData });
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.setState({
      submittedData: Object.assign({}, this.state.formData),
    });
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <Field
          label="Current or Most Recent Employment Title"
          help="This is your most recent employment position"
          required
        >
          <Input type="text" name="employment" value={this.state.formData.jobTitle} onChange={this.handleEmploymentUpdate} />
        </Field>
        <Fieldset
          legend="Name"
          required
        >
          <Field
            label="First"
            isInline
            required
          >
            <Input type="text" name="first" value={this.state.formDatafirst} onChange={this.handleNameUpdate} />
          </Field>
          <Field
            label="Middle"
            isInline
          >
            <Input type="text" name="middle" value={this.state.formData.middle} onChange={this.handleNameUpdate} />
          </Field>
          <Field
            label="Last"
            isInline
            required
          >
            <Input type="text" name="last" value={this.state.formData.last} onChange={this.handleNameUpdate} />
          </Field>
        </Fieldset>
        <Button text="Submit" type="submit" />
        {this.state.submittedData && [<hr />, <p>Form was submitted with {JSON.stringify(this.state.submittedData)}</p>]}
      </form>
    );
  }
}

export default ControlledInput;
