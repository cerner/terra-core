import React from 'react';
import classNames from 'classnames/bind';
import InputField from 'terra-form-input/lib/InputField';
import styles from './common/Input.test.module.scss';

const cx = classNames.bind(styles);

const unsupportedTypes = ['date', 'datetime-local', 'month', 'time', 'week', 'color', 'file', 'range', 'checkbox', 'radio', 'button', 'reset', 'submit'];

class UnsupportedTypesInputField extends React.Component {
  constructor() {
    super();

    this.state = {
      isInvalid: false,
      isIncomplete: false,
      required: false,
    };

    this.toggleInvalid = this.toggleInvalid.bind(this);
    this.toggleIncomplete = this.toggleIncomplete.bind(this);
  }

  createInputFieldTypeExamples(arr) {
    const inputFieldTypeExamples = [];
    for (let i = 0; i < arr.length; i += 1) {
      inputFieldTypeExamples.push((
        <div className={cx('content-wrapper')}>
          <InputField
            inputId={`unsupported-${arr[i]}-input`}
            error="Error message."
            help="Help message."
            isInvalid={this.state.isInvalid}
            isIncomplete={this.state.isIncomplete}
            required={this.state.required}
            inputAttrs={{
              id: `html-original-${arr[i]}-input`,
              type: arr[i],
            }}
            label={`Input type=${arr[i]}`}
          />
        </div>
      ));
    }
    return inputFieldTypeExamples;
  }

  toggleInvalid() {
    this.setState(prevState => ({
      isInvalid: !prevState.isInvalid,
    }));
  }

  toggleIncomplete() {
    this.setState(prevState => ({
      isIncomplete: !prevState.isIncomplete,
      required: !prevState.required,
    }));
  }

  render() {
    return (
      <React.Fragment>
        <div className={cx('content-wrapper')}>
          <button type="button" id="validity-toggle" onClick={this.toggleInvalid}>Toggle All: isInvalid</button>
          <button type="button" id="incomplete-toggle" onClick={this.toggleIncomplete}>Toggle All: isIncomplete + required</button>
          <div>
            {`isInvalid: ${this.state.isInvalid}`}
          </div>
          <div>
            {`isIncomplete: ${this.state.isIncomplete}`}
          </div>
          <div>
            {`required: ${this.state.required}`}
          </div>
        </div>
        {this.createInputFieldTypeExamples(unsupportedTypes)}
      </React.Fragment>
    );
  }
}

export default UnsupportedTypesInputField;
