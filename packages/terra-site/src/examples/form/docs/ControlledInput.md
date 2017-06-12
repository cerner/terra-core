# Controlled Example

```jsx
import React from 'react';
import Button from 'terra-button';
import Field from 'terra-form/lib/Field';
import Fieldset from 'terra-form/lib/Fieldset';
import Input from 'terra-form/lib/Input';
import Control from 'terra-form/lib/Control';

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        jobTitle: '',
        first: '',
        middle: '',
        last: '',
        preferredLocation: '',
        interestedDivisions: []
      },
    };

    this.handleEmploymentUpdate = this.handleEmploymentUpdate.bind(this);
    this.handleNameUpdate = this.handleNameUpdate.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handlePreferredLocation = this.handlePreferredLocation.bind(this);
    this.handleInterestedDivisions = this.handleInterestedDivisions.bind(this);
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

  handlePreferredLocation(e) {
    const formData = Object.assign({}, this.state.formData);
    formData.preferredLocation = e.target.value;
    this.setState({ formData });
  }

  handleInterestedDivisions(e) {
    const formData = Object.assign({}, this.state.formData);
    formData.interestedDivisions = this.state.formData.interestedDivisions.slice(0);

    if (e.target.checked) {
      formData.interestedDivisions.push(e.target.value);
    } else {
      const targetIndex = formData.interestedDivisions.indexOf(e.target.value);
      formData.interestedDivisions.splice(targetIndex, 1);
    }

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
        <Fieldset
          legend="Preferred Location"
        >
          <Control
            type="radio"
            value="north"
            labelText="North Campus"
            checked={this.state.formData.preferredLocation === "north"}
            onChange={this.handlePreferredLocation}
            name="preferred_location"
            isInline
          />
          <Control
            type="radio"
            value="south"
            labelText="South Campus"
            checked={this.state.formData.preferredLocation === "south"}
            onChange={this.handlePreferredLocation}
            name="preferred_location"
            isInline
          />
          <Control
            type="radio"
            value="east"
            labelText="East Campus"
            checked={this.state.formData.preferredLocation === "east"}
            onChange={this.handlePreferredLocation}
            name="preferred_location"
            isInline
          />
        </Fieldset>
        <Fieldset
          legend="What divisions are you most interested in?"
        >
          <Control
            type="checkbox"
            value="ux"
            labelText="User Experience Development"
            checked={this.state.formData.interestedDivisions.includes("ux")}
            onChange={this.handleInterestedDivisions}
            name="interested_division[]"
          />
          <Control
            type="checkbox"
            value="system_engineer"
            labelText="System Engineer"
            checked={this.state.formData.interestedDivisions.includes("system_engineer")}
            onChange={this.handleInterestedDivisions}
            name="interested_division[]"
          />
          <Control
            type="checkbox"
            value="software_engineer"
            labelText="Software Engineer"
            checked={this.state.formData.interestedDivisions.includes("software_engineer")}
            onChange={this.handleInterestedDivisions}
            name="interested_division[]"
          />
        </Fieldset>
        <Button text="Submit" type="submit" />
        {this.state.submittedData && [<hr />, <p>Form was submitted with {JSON.stringify(this.state.submittedData)}</p>]}
      </form>
    );
  }
}

export default ControlledInput;

```
