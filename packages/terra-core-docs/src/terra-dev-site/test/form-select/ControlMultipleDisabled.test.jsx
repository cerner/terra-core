import React from 'react';
import classNames from 'classnames/bind';
import Select from 'terra-form-select';
import styles from './common/Select.test.module.scss';

const cx = classNames.bind(styles);

class ControlledMultipleDisabled extends React.Component {
  constructor() {
    super();

    this.state = { value: ['blue', 'red'] };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div className={cx('content-wrapper')}>
        <Select
          id="multiple"
          onChange={this.handleChange}
          placeholder="Select a color"
          value={this.state.value}
          variant="multiple"
          disabled
        >
          <Select.Option value="blue" display="Blue" />
          <Select.Option value="green" display="Green" />
          <Select.Option value="purple" display="Purple" />
          <Select.Option value="red" display="Red" />
          <Select.Option value="violet" display="Violet" />
        </Select>
      </div>
    );
  }
}

export default ControlledMultipleDisabled;
