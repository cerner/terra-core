import React from 'react';
import TextareaField from 'terra-form/lib/TextareaField';

class TextareaFieldExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Mike',
      description: 'Michael',
      problem: 'Chicken McNuggets',
      teamwork: 'Tron',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleProblemsChange = this.handleProblemsChange.bind(this);
    this.handleTeamworkChange = this.handleTeamworkChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  handleProblemsChange(event) {
    this.setState({ problem: event.target.value });
  }

  handleTeamworkChange(event) {
    this.setState({ teamwork: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <TextareaField
            inputId="name"
            label="Name"
            name="name"
            defaultValue="Mike"
            error="Name is required"
            help="The name given to you at birth."
            onChange={this.handleNameChange}
          />
          <TextareaField
            inputId="profile-description"
            label="Profile Description"
            name="profile_description"
            error="Profile Descirption is required"
            help="How would you describe your current position?"
            cols={10}
            minLength={5}
            rows={10}
            required
            onChange={this.handleDescriptionChange}
          />
          <div>
            <TextareaField
              inputId="difficult-problems"
              label="Tell us about your most difficult programming problem"
              name="difficult_problem"
              isInline
              error="This field is required"
              onChange={this.handleProblemsChange}
            />
            <TextareaField
              label="How well do you work in a team?"
              name="teamwork"
              inputId="teamwork"
              isInline
              error="This field is required"
              help="Think on a scale of 1 to 10."
              minLength={5}
              required
              onChange={this.handleTeamworkChange}
            />
          </div>
        </form>
        <hr />
        <ul>Input Provided:
          <li style={{ margin: '10px' }}>Name - {this.state.name}</li>
          <li style={{ margin: '10px' }}>Profile Description - {this.state.description}</li>
          <li style={{ margin: '10px' }}>Difficult Problem - {this.state.problem}</li>
          <li style={{ margin: '10px' }}>Teamwork - {this.state.teamwork}</li>
        </ul>
        <br />
      </div>
    );
  }
}
export default TextareaFieldExamples;
