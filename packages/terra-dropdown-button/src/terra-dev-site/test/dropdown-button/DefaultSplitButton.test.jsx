import React, { useState } from 'react';
import classnames from 'classnames/bind';
import SplitButton, { Item } from '../../../SplitButton';
import styles from './ExtraSpacing.module.scss';

const cx = classnames.bind(styles);

const DefaultSplitButton = () => {
  const [message, setMessage] = useState(' No option clicked');

  return (
    <div className={cx('container-spacing-wrapper')}>
      <SplitButton primaryOptionLabel="Split" metaData={{ key: 'primary-button' }} onSelect={(event, metaData) => { setMessage(` ${metaData.key}`); }} id="split">
        <Item id="opt1" label="1st" metaData={{ key: '1st Option' }} onSelect={(event, metaData) => { setMessage(` ${metaData.key}`); }} />
        <Item id="opt2" label="2nd" metaData={{ key: '2nd Option' }} onSelect={(event, metaData) => { setMessage(` ${metaData.key}`); }} />
        <Item id="opt3" label="3rd" metaData={{ key: '3rd Option' }} onSelect={(event, metaData) => { setMessage(` ${metaData.key}`); }} />
      </SplitButton>
      <p>
        MetaData of :
        {message}
      </p>
    </div>
  );
};

export default DefaultSplitButton;

