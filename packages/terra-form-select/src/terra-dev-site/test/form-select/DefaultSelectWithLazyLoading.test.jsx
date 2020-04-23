import React from 'react';
import classNames from 'classnames/bind';
import Select from '../../../Select';
import styles from './common/Select.test.module.scss';

const cx = classNames.bind(styles);

const DefaultSelectWithLazyLoading = () => {
  const options = [];

  for (let index = 1; index <= 1000; index += 1) {
    options.push(<Select.Option key={index} value={index} display={`${index}`} />);
  }

  return (
    <div className={cx('content-wrapper')}>
      <p> Default Form Select without isLazyLoadEnabled </p>
      <Select id="defaultWithOutLazyLoad">
        {options}
      </Select>
      <p> Default Form Select with isLazyLoadEnabled </p>
      <Select id="defaultWithLazyLoad" isLazyLoadEnabled>
        {options}
      </Select>
      <p> Default Form Select with maxheight and isLazyLoadEnabled </p>
      <Select id="defaultWithLazyLoad" isLazyLoadEnabled maxHeight={400}>
        {options}
      </Select>
    </div>
  );
};

export default DefaultSelectWithLazyLoading;
