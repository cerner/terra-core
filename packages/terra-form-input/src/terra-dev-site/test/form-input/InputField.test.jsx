import React from 'react';
import classNames from 'classnames/bind';
import InputField from '../../../InputField';
import styles from './common/Input.test.module.scss';

const cx = classNames.bind(styles);

class InputFieldExample extends React.Component {
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
      <div className={cx('content-wrapper')}>
        <button type="button" id="validity-toggle" onClick={this.toggleInvalid}>Toggle Validity</button>
        <button type="button" id="incomplete-toggle" onClick={this.toggleIncomplete}>Toggle Incomplete</button>
        <InputField
          inputId="test-input"
          defaultValue="Value"
          error="Error message."
          help="Help message."
          hideRequired
          inputAttrs={{
            name: 'test',
            type: 'text',
          }}
          isInvalid={this.state.isInvalid}
          isIncomplete={this.state.isIncomplete}
          required={this.state.required}
          label="Label Text"
          labelAttrs={{
            className: 'label',
          }}
          showOptional
        />
      </div>
    );
  }
}

export default InputFieldExample;
