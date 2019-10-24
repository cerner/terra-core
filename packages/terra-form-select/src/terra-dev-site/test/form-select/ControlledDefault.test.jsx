import React from 'react';
import classNames from 'classnames/bind';
import Select from '../../../Select';
import styles from './common/Select.test.module.scss';

const cx = classNames.bind(styles);

class ControlledDefault extends React.Component {
  constructor() {
    super();

    this.state = { value: 'blue' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div className={cx('content-wrapper')}>
        <Select placeholder="Select a color" onChange={this.handleChange} id="default" value={this.state.value}>
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

export default ControlledDefault;
