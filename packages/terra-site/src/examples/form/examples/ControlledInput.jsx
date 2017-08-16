import React from 'react';
import Button from 'terra-button';
import Fieldset from 'terra-form/lib/Fieldset';
import Control from 'terra-form/lib/Control';
import TextField from 'terra-form/lib/TextField';
import TextareaField from 'terra-form/lib/TextareaField';
import NumberField from 'terra-form/lib/NumberField';
import SelectField from 'terra-form/lib/SelectField';

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        jobTitle: '',
        first: '',
        middle: '',
        last: '',
        operatingSystem: '',
        travelPercentage: 0,
        preferredLocation: '',
        interestedDivisions: [],
      },
    };

    this.handleEmploymentUpdate = this.handleEmploymentUpdate.bind(this);
    this.handleNameUpdate = this.handleNameUpdate.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleTravelPercentageChange = this.handleTravelPercentageChange.bind(this);
    this.handleExperienceUpdate = this.handleExperienceUpdate.bind(this);
    this.handlePreferredLocation = this.handlePreferredLocation.bind(this);
    this.handleInterestedDivisions = this.handleInterestedDivisions.bind(this);
    this.handleOperatingSystemChanged = this.handleOperatingSystemChanged.bind(this);
  }

  handleOperatingSystemChanged(e) {
    const formData = Object.assign({}, this.state.formData);
    formData.operatingSystem = e.target.value;
    this.setState({ formData });
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
          step={5}
          required
        />
        <TextareaField
          label="Experience"
          name="experience"
          help="List all the different languages and build tools you have 3+ months experience with"
          value={this.state.formData.experience}
          onChange={this.handleExperienceUpdate}
        />
        <SelectField
          options={[{ value: '', display: 'Select an Operating System' },
                      { value: 'mac', display: 'Mac OSX' },
                      { value: 'windows', display: 'Microsoft Windows' },
                      { value: 'linux', display: 'Linux' }]}
          help="We try not to restrict dev environment"
          label="Preferred Operating System"
          name="os"
          value={this.state.formData.operatingSystem}
          required
          onChange={this.handleOperatingSystemChanged}
        />
        <Fieldset
          legend="Preferred Location"
        >
          <Control
            type="radio"
            value="north"
            labelText="North Campus"
            checked={this.state.formData.preferredLocation === 'north'}
            onChange={this.handlePreferredLocation}
            name="preferred_location"
            isInline
          />
          <Control
            type="radio"
            value="south"
            labelText="South Campus"
            checked={this.state.formData.preferredLocation === 'south'}
            onChange={this.handlePreferredLocation}
            name="preferred_location"
            isInline
          />
          <Control
            type="radio"
            value="east"
            labelText="East Campus"
            checked={this.state.formData.preferredLocation === 'east'}
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
            checked={this.state.formData.interestedDivisions.includes('ux')}
            onChange={this.handleInterestedDivisions}
            name="interested_division[]"
          />
          <Control
            type="checkbox"
            value="system_engineer"
            labelText="System Engineer"
            checked={this.state.formData.interestedDivisions.includes('system_engineer')}
            onChange={this.handleInterestedDivisions}
            name="interested_division[]"
          />
          <Control
            type="checkbox"
            value="software_engineer"
            labelText="Software Engineer"
            checked={this.state.formData.interestedDivisions.includes('software_engineer')}
            onChange={this.handleInterestedDivisions}
            name="interested_division[]"
          />
        </Fieldset>
        <Button text="Submit" type="submit" />
        {this.state.submittedData && <div><hr /><p>Form was submitted with {JSON.stringify(this.state.submittedData)}</p></div>}
      </form>
    );
  }
}

export default ControlledInput;
