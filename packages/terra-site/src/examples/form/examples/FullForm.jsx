import React from 'react';

import {
  ChoiceField,
  MultiChoiceField,
  NumberField,
  TextareaField,
  TextField,
} from 'terra-form';

class FullForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        name: '',
        language: '',
        area: [],
        location: [],
        salary: 75000,
        experience: '',
      },
      formErrors: {},
      submittedData: {},
    };

    this.submitForm = this.submitForm.bind(this);
    this.updateFormInput = this.updateFormInput.bind(this);
  }

  submitForm(e) {
    e.preventDefault();

    const formErrors = {};
    const textRequiredKeys = ['name', 'language', 'salary', 'experience'];
    const multiChoiceRequiredKeys = ['area', 'location'];

    textRequiredKeys.forEach((key) => {
      if (!this.state.formData[key]) {
        formErrors[key] = 'This field is required';
      }
    });

    multiChoiceRequiredKeys.forEach((key) => {
      if (this.state.formData[key].length === 0) {
        formErrors[key] = 'At least one option should be selected';
      }
    });

    this.setState({
      submittedData: Object.assign({}, this.state.formData),
      formErrors,
    });
  }

  updateFormInput(e) {
    const formData = Object.assign({}, this.state.formData);

    if (e.target.type === 'checkbox') {
      const currentMultiChoiceSelection = this.state.formData[e.target.name];
      const currentElementIndex = currentMultiChoiceSelection.indexOf(e.target.value);

      if (currentElementIndex > -1) {
        currentMultiChoiceSelection.splice(currentElementIndex, 1);
      } else {
        currentMultiChoiceSelection.push(e.target.value);
      }
    } else {
      formData[e.target.name] = e.target.value;
    }

    this.setState({ formData });
  }

  renderSubmittedFormData() {
    let display = null;

    if (this.state.submittedData && Object.keys(this.state.formErrors).length > 0) {
      display = (
        <div>
          <p>The form was submitted with errors</p>
          <hr />
        </div>
      );
    } else if (Object.keys(this.state.submittedData).length > 0) {
      display = (
        <div>
          <p>This form was submitted with the following data</p>
          <pre>
            {JSON.stringify(this.state.submittedData)}
          </pre>
          <hr />
        </div>
      );
    }

    return display;
  }

  render() {
    return (
      <section>
        <br />
        <h1>Full Form Example</h1>
        <hr />
        {this.renderSubmittedFormData()}
        <form onSubmit={this.submitForm}>
          <TextField
            label="Name"
            name="name"
            required
            error={this.state.formErrors.name}
            value={this.state.formData.name}
            help="Please enter your full name."
            onChange={this.updateFormInput}
          />
          <ChoiceField
            label="Prime Programming Language"
            name="language"
            help="This is the programming language you are looking to work with most"
            required
            choiceName="name"
            choiceValue="value"
            error={this.state.formErrors.language}
            value={this.state.formData.language}
            onChange={this.updateFormInput}
            choices={[
              { name: 'C', value: 'c' },
              { name: 'Java', value: 'java' },
              { name: 'Ruby', value: 'ruby' },
              { name: 'C++', value: 'c++' },
              { name: 'JavaScript', value: 'javascript' },
            ]}
          />
          <div>
            <MultiChoiceField
              label="Which Areas of Development are you looking to get involved with?"
              name="area"
              help="We have specialized areas we try to get our developers matched with"
              required
              isInline
              choiceName="title"
              choiceValue="project"
              error={this.state.formErrors.area}
              onChange={this.updateFormInput}
              choices={[
                { project: 'ux', title: 'UX' },
                { project: 'data_science', title: 'Data Science' },
                { project: 'full_stack_developer', title: 'Full Stack Developer' },
                { project: 'infra_deployment', title: 'Infrastructure Deployment' },
              ]}
              value={this.state.formData.area}
            />
            <MultiChoiceField
              label="What locations are you willing to work at?"
              name="location"
              required
              isInline
              error={this.state.formErrors.location}
              choiceName="title"
              choiceValue="location"
              onChange={this.updateFormInput}
              choices={[
                { location: 'downtown_kc', title: 'Downtown Kansas City' },
                { location: 'north_kc', title: 'North Kansas City' },
                { location: 'midtown_kc', title: 'Midtown Kansas City' },
                { location: 'plaza_kc', title: 'Country Club Plaza' },
              ]}
              value={this.state.formData.location}
            />
          </div>
          <NumberField
            label="Desired Salary"
            name="salary"
            required
            isInline
            error={this.state.formErrors.salary}
            max={120000}
            min={70000}
            onChange={this.updateFormInput}
            step={1000}
            value={this.state.formData.salary}
          />
          <TextareaField
            name="experience"
            label="Job Experience"
            required
            error={this.state.formErrors.experience}
            help="Talk about your previous Job Experience"
            value={this.state.formData.experience}
            onChange={this.updateFormInput}
          />
          <input type="submit" value="Submit" />
        </form>
      </section>
    );
  }
}

export default FullForm;
