import React from 'react';
import classNames from 'classnames/bind';
import TextareaField from '../../../TextareaField';
import styles from './common/Textarea.test.module.scss';

const cx = classNames.bind(styles);

class TextareaFieldExample extends React.Component {
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
        <TextareaField
          defaultValue="Value"
          inputId="test-input"
          error="Error message."
          help="Help message."
          hideRequired
          inputAttrs={{
            name: 'test',
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

export default TextareaFieldExample;
