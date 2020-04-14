import React from 'react';
import SingleSelect from 'terra-form-select/lib/SingleSelect';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const SingleSelectWithLargeData = () => {
  const options = [];

  for (let index = 1; index <= 1000; index += 1) {
    options.push(<SingleSelect.Option key={index} value={index} display={`${index}`} />);
  }

  return (
    <SingleSelect placeholder="Select a number" className={cx('form-select')}>
      {options}
    </SingleSelect>
  );
};

export default SingleSelectWithLargeData;
