import React from 'react';
import Select from 'terra-form/lib/Select';

class SelectExamples extends React.Component {
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
          <Select
            choices={['Puppies', 'Kittens', 'Snappers', 'Bumblers', 'Joeys', 'Microprocessors']}
            name="zibby"
            defaultValue="Snappers"
            required
            onChange={this.handleChange}
          />
        </form>
        <br /><p>Item Selected: {this.state.selected}</p>
        <br />
      </div>
    );
  }
}
export default SelectExamples;
