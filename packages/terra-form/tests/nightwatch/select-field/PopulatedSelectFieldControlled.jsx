import React from 'react';

import SelectField from '../../../lib/SelectField';

class ControlledSelectField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        animal: 'micros',
      },
    };

    this.updateAnimal = this.updateAnimal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateAnimal(e) {
    const formData = Object.assign({}, this.state.formData);
    formData[e.target.name] = e.target.value;
    this.setState({ formData });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      submittedData: Object.assign({}, this.state.formData),
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <SelectField
            id="controlled-populated-select-field"
            name="animal"
            options={[{ value: 'puppies', display: 'Puppies' },
                      { value: 'kittens', display: 'Kittens' },
                      { value: 'micros', display: 'Microprocessors' },
                      { value: 'snaps', display: 'Snappers' }]}
            onChange={this.updateAnimal}
            value={this.state.formData.animal}
          />
          <button id="select-submit" label="Submit" type="submit">Submit</button>
        </form>
        { this.state.submittedData &&
          <div>
            <p id="select-submission">Submitted with data {JSON.stringify(this.state.submittedData)}</p>
          </div>
        }
      </div>
    );
  }
}

export default ControlledSelectField;
