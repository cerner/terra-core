import React from 'react';
import SelectField from 'terra-form/lib/SelectField';
import styles from '../../../site.scss';

class SelectFieldExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 'snappers', isInvalid: false };
    this.handleChange = this.handleChange.bind(this);
    this.toggleIsInvalid = this.toggleIsInvalid.bind(this);
  }

  toggleIsInvalid() {
    this.setState({ isInvalid: !this.state.isInvalid });
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
            error="This Field is Required"
            label="Human Test"
            name="zibby"
            defaultValue="snappers"
            required
            isInvalid={this.state.isInvalid}
            onChange={this.handleChange}
          />
        </form>
        <hr />
        <p>If a select feild is invalid, an error icon will be displayed. <button onClick={this.toggleIsInvalid}>Toggle Invalid State</button></p>
        <p>Option Selected: <span className={styles['site-input-display']}>{this.state.selected}</span></p>
        <br />
      </div>
    );
  }
}
export default SelectFieldExamples;
