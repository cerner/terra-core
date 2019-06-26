import React from 'react';
import classNames from 'classnames/bind';
import Field from '../../../Field';
import styles from './FormFieldTestCommon.module.scss';

const cx = classNames.bind(styles);

class FieldExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isInvalid: false };
    this.handleIsInvalidChange = this.handleIsInvalidChange.bind(this);
  }

  handleIsInvalidChange() {
    this.setState(prevState => ({ isInvalid: !prevState.isInvalid }));
  }

  render() {
    const field = (
      <Field
        id="default"
        className={cx('form-field')}
        label="Field Label"
        help="Help Message"
        error="Error Message"
        isInvalid={this.state.isInvalid}
      >
        <div className={cx('field-content')}>Control Placeholder</div>
      </Field>
    );

    const optional = (
      <Field
        id="optional"
        className={cx('form-field')}
        label="Field Label"
        help="Help Message"
        error="Error Message"
        isInvalid={this.state.isInvalid}
        showOptional
      >
        <div className={cx('field-content')}>Control Placeholder</div>
      </Field>
    );

    const required = (
      <Field
        id="required"
        className={cx('form-field')}
        label="Field Label"
        help="Help Message"
        error="Error Message"
        isInvalid={this.state.isInvalid}
        required
      >
        <div className={cx('field-content')}>Control Placeholder</div>
      </Field>
    );

    const requiredHidden = (
      <Field
        id="required-hidden"
        className={cx('form-field')}
        label="Field Label"
        help="Help Message"
        error="Error Message"
        isInvalid={this.state.isInvalid}
        required
        hideRequired
      >
        <div className={cx('field-content')}>Control Placeholder</div>
      </Field>
    );

    const hiddenLabel = (
      <Field
        id="label-hidden"
        className={cx('form-field')}
        label="Field Label"
        help="Help Message"
        error="Error Message"
        isInvalid={this.state.isInvalid}
        isLabelHidden
      >
        <div className={cx('field-content')}>Control Placeholder</div>
      </Field>
    );

    const inline = (
      <div>
        <Field
          id="inline-1"
          className={cx('form-field')}
          label="Field Label - Spacing POC"
          error="Error Message"
          isInline
          isInvalid={this.state.isInvalid}
          required
        >
          <div className={cx('field-content')}>Control Placeholder</div>
        </Field>

        <Field
          id="inline-2"
          className={cx('form-field')}
          label="Field Label - Spacing POC"
          error="Error Message"
          isInline
          isInvalid={this.state.isInvalid}
          required
          hideRequired
        >
          <div className={cx('field-content')}>Control Placeholder</div>
        </Field>

        <Field
          id="inline-3"
          className={cx('form-field')}
          label="Field Label - Spacing POC"
          error="Error Message"
          isInline
          isInvalid={this.state.isInvalid}
          showOptional
        >
          <div className={cx('field-content')}>Control Placeholder</div>
        </Field>
      </div>
    );

    return (
      <div>
        <button type="button" id="toggle-is-invalid" onClick={this.handleIsInvalidChange}>Toggle In Error </button>
        <h3>Field</h3>
        {field}
        <h3>Field - Optional</h3>
        {optional}
        <h3>Field - Required</h3>
        {required}
        <h3>Field - Required but Indicator Hidden</h3>
        {requiredHidden}
        <h3>Field - Hidden Label</h3>
        {hiddenLabel}
        <h3>Field - Inline</h3>
        {inline}
      </div>
    );
  }
}

export default FieldExamples;
