import React from 'react';
import SelectField from 'terra-form/lib/SelectField';

class SelectFieldExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 'Snappers' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ selected: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <SelectField
            choices={['Puppies', 'Kittens', 'Snappers', 'Bumblers', 'Joeys', 'Microprocessors']}
            help="TO DETERMINE IF YOU ARE A HUMAN, PLEASE PICK YOUR FAVORITE SMALL ANIMAL"
            label="Human Test"
            name="zibby"
            defaultValue="Snappers"
            required
            onChange={this.handleChange}
          />
        </form>
        <hr /><p>Item Selected: {this.state.selected}</p>
        <br />
      </div>
    );
  }
}
export default SelectFieldExamples;
