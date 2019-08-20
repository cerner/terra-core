import React from 'react';
import Field from 'terra-form-field';
import classNames from 'classnames/bind';
import styles from './FieldExamples.module.scss';

const cx = classNames.bind(styles);

class FieldExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isInvalid: false };
    this.toggleIsInvalid = this.toggleIsInvalid.bind(this);
  }

  toggleIsInvalid() {
    this.setState(prevState => ({ isInvalid: !prevState.isInvalid }));
  }

  render() {
    return (
      <div>
        <h2> Field Examples </h2>
        <Field
          label="Field Label"
          help="This is a standard, non-required field."
          error="Error Message"
          isInvalid={this.state.isInvalid}
        >
          <div className={cx('field-content')}>Control Placeholder</div>
        </Field>
        <Field
          label="Field Label"
          help="This is an optional field."
          error="Error Message"
          isInvalid={this.state.isInvalid}
          isInline
          showOptional
        >
          <div className={cx('field-content')}>Control Placeholder</div>
        </Field>

        <Field
          label="Field Label"
          help="This is a required field."
          error="Error Message"
          isInvalid={this.state.isInvalid}
          isInline
          required
        >
          <div className={cx('field-content')}>Control Placeholder</div>
        </Field>

        <Field
          label="Field Label"
          help="This is a required field, but the required indicator is hidden until the field is in error."
          error="Now the required indicator is showing because the field is in error."
          isInvalid={this.state.isInvalid}
          isInline
          required
          hideRequired
        >
          <div className={cx('field-content')}>Control Placeholder</div>
        </Field>
        <hr />
        <p>
If a field is invalid, an error icon will be displayed.
          <button type="button" onClick={this.toggleIsInvalid}>Toggle Invalid State</button>
        </p>
      </div>
    );
  }
}
export default FieldExamples;
