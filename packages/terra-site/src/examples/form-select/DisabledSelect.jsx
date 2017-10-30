import React from 'react';
import Select from 'terra-form-select';
import styles from '../../site.scss';

class SelectExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 'snappers' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, selectedValue) {
    this.setState({ selected: selectedValue });
  }

  render() {
    return (
      <div>
        <form>
          <Select
            name="zibby"
            defaultValue="snappers"
            required
            disabled
            onChange={this.handleChange}
          >
            <Select.Option value="puppies" display="Puppies" key="puppies" />
            <Select.Option value="kittens" display="Kittens" key="kittens" />
            <Select.Option value="snappers" display="Snappers" key="snappers" />
            <Select.Option value="bumblers" display="Bumblers" disabled key="bumblers" />
            <Select.Option value="joeys" display="Joeys" key="joeys" />
            <Select.Option value="micros" display="Microprocessors" disabled key="miros" />
          </Select>
        </form>
        <br /><p>Option Selected: <span className={styles['site-input-display']}>{this.state.selected}</span></p>
        <br />
      </div>
    );
  }
}
export default SelectExamples;
