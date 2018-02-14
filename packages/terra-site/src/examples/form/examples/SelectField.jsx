import React from 'react';
import SelectField from 'terra-form/lib/SelectField';
import styles from '../../../site.scss';

class SelectFieldExamples extends React.Component {
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
          <SelectField
            options={[{ value: 'puppies', display: 'Puppies' },
                        { value: 'kittens', display: 'Kittens' },
                        { value: 'snappers', display: 'Snappers' },
                        { value: 'bumblers', display: 'Bumblers' },
                        { value: 'joeys', display: 'Joeys' },
                        { value: 'micros', display: 'Microprocessors' }]}
            help="TO DETERMINE IF YOU ARE A HUMAN, PLEASE PICK YOUR FAVORITE SMALL ANIMAL"
            label="Human Test"
            name="zibby"
            defaultValue="snappers"
            required
            onChange={this.handleChange}
          />
        </form>
        <hr /><p>Option Selected: <span className={styles['site-input-display']}>{this.state.selected}</span></p>
        <br />
      </div>
    );
  }
}
export default SelectFieldExamples;
