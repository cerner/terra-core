import React from 'react';
import classNames from 'classnames/bind';
import Select from '../../../Select';
import styles from './common/Select.test.module.scss';

const cx = classNames.bind(styles);

class ControlledCombobox extends React.Component {
  constructor() {
    super();

    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div className={cx('content-wrapper')}>
        <Select
          id="combobox"
          onChange={this.handleChange}
          placeholder="Select a color"
          required
          value={this.state.value}
          variant="combobox"
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

export default ControlledCombobox;
