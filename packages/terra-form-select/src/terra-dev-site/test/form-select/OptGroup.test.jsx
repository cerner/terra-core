import React from 'react';
import classNames from 'classnames/bind';
import Select from '../../../Select';
import styles from './common/Select.test.module.scss';

const cx = classNames.bind(styles);

const OptGroupExample = () => (
  <div className={cx('content-wrapper')}>
  	<Select placeholder="Select a color" id="opt-group" defaultValue="green">
      <Select.OptGroup label="Colors">
        <Select.Option value="blue" display="Blue" />
        <Select.Option value="green" display="Green" />
        <Select.Option value="purple" display="Purple" />
        <Select.Option value="red" display="Red" />
        <Select.Option value="violet" display="Violet" />
      </Select.OptGroup>
    </Select>
  </div>
);

export default OptGroupExample;
