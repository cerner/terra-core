import React from 'react';
import Select from 'terra-form/lib/Select';

class SelectExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 'snappers' };
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
            options={[{ value: 'puppies', display: 'Puppies' },
                      { value: 'kittens', display: 'Kittens' },
                      { value: 'snappers', display: 'Snappers' },
                      { value: 'bumblers', display: 'Bumblers' },
                      { value: 'joeys', display: 'Joeys' },
                      { value: 'micros', display: 'Microprocessors' }]}
            name="zibby"
            defaultValue="snappers"
            required
            onChange={this.handleChange}
          />
        </form>
        <br /><p>Option Selected: {this.state.selected}</p>
        <br />
      </div>
    );
  }
}
export default SelectExamples;
