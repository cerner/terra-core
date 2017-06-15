# Controlled Input Example

```jsx
import React from 'react';
import Button from 'terra-button';
import Fieldset from 'terra-form/lib/Fieldset';
import TextField from 'terra-form/lib/TextField';
import TextareaField from 'terra-form/lib/TextareaField';
import NumberField from 'terra-form/lib/NumberField';

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        jobTitle: '',
        first: '',
        middle: '',
        last: '',
        travelPercentage: 0,
      },
    };

    this.handleEmploymentUpdate = this.handleEmploymentUpdate.bind(this);
    this.handleNameUpdate = this.handleNameUpdate.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleTravelPercentageChange = this.handleTravelPercentageChange.bind(this);
    this.handleExperienceUpdate = this.handleExperienceUpdate.bind(this);
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

  handleTravelPercentageChange(e) {
    const formData = Object.assign({}, this.state.formData);
    formData.travelPercentage = e.target.value;
    this.setState({ formData });
  }

  handleExperienceUpdate(e) {
    const formData = Object.assign({}, this.state.formData);
    formData.experience = e.target.value;
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
        <TextField
          label="Current or Most Recent Employment Title"
          help="This is your most recent employment position"
          value={this.state.formData.jobTitle}
          onChange={this.handleEmploymentUpdate}
          name="employment"
          type="text"
          required
        />
        <Fieldset
          legend="Name"
          required
        >
          <TextField
            label="First"
            value={this.state.formData.first}
            onChange={this.handleNameUpdate}
            name="first"
            type="text"
            isInline
            required
          />
          <TextField
            label="Middle"
            value={this.state.formData.middle}
            onChange={this.handleNameUpdate}
            name="middle"
            type="text"
            isInline
          />
          <TextField
            label="Last"
            value={this.state.formData.last}
            onChange={this.handleNameUpdate}
            name="last"
            type="text"
            isInline
            required
          />
        </Fieldset>
        <NumberField
          label="What percentage of work are you willing to travel?"
          help="This will help determine your placement in positions requiring travel"
          value={this.state.formData.travelPercentage}
          onChange={this.handleTravelPercentageChange}
          name="travel_percentage"
          min={0}
          max={100}
          step={10}
          required
        />
        <TextareaField
          label="Experience"
          name="experience"
          help="List all the different languages and build tools you have 3+ months experience with"
          value={this.state.formData.experience}
          onChange={this.handleExperienceUpdate}
        />
        <Button text="Submit" type="submit" />
        {this.state.submittedData && <div><hr /><p>Form was submitted with {JSON.stringify(this.state.submittedData)}</p></div>}
      </form>
    );
  }
}

export default ControlledInput;
```
