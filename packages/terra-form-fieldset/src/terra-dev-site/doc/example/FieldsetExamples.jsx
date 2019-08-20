import React from 'react';
import Field from 'terra-form-field';
import Input from 'terra-form-input';
import Fieldset from 'terra-form-fieldset';
import classNames from 'classnames/bind';
import styles from './FieldsetExamples.module.scss';

const cx = classNames.bind(styles);

class FieldsetExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      middle: '',
      last: '',
    };
    this.handleFirstChange = this.handleFirstChange.bind(this);
    this.handleMiddleChange = this.handleMiddleChange.bind(this);
    this.handleLastChange = this.handleLastChange.bind(this);
  }

  handleFirstChange(event) {
    this.setState({ first: event.target.value });
  }

  handleMiddleChange(event) {
    this.setState({ middle: event.target.value });
  }

  handleLastChange(event) {
    this.setState({ last: event.target.value });
  }

  render() {
    return (
      <div>
        <Fieldset
          type="checkbox"
          legend="Give your full name here"
          name="children_present"
          value="children_present"
          error="All fields must be filled out"
          help="Families are eligible for family package plans"
          required
        >
          <Field label="First" isInline required htmlFor="first">
            <Input id="first" type="text" name="first" defaultValue="" onChange={this.handleFirstChange} ariaLabel="first-label" />
          </Field>
          <Field label="Middle" isInline required htmlFor="middle">
            <Input id="middle" type="text" name="middle" defaultValue="" onChange={this.handleMiddleChange} ariaLabel="middle-label" />
          </Field>
          <Field label="Last" isInline required htmlFor="last">
            <Input id="last" type="text" name="last" defaultValue="" onChange={this.handleLastChange} ariaLabel="middle-label" />
          </Field>
        </Fieldset>
        <hr />
        <p>
          Full Name Provided:
          <span className={cx('fieldset-wrapper')}>
            {this.state.first}
            {' '}
            {this.state.middle}
            {' '}
            {this.state.last}
          </span>
        </p>
        <br />
      </div>
    );
  }
}
export default FieldsetExamples;
