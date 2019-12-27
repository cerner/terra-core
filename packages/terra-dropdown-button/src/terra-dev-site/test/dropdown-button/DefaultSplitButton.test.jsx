import React from 'react';
import classnames from 'classnames/bind';
import SplitButton, { Item } from '../../../SplitButton';
import styles from './ExtraSpacing.module.scss';

const cx = classnames.bind(styles);

export default () => (
  <div className={cx('container-spacing-wrapper')}>
    <SplitButton primaryOptionLabel="Split" metaData={{ key: 'primary-button' }} onSelect={(event, metaData) => { console.log('Metdata of :', metaData.key); }} id="split">
      <Item label="1st" metaData={{ key: '1st-option' }} onSelect={(event, metaData) => { console.log('Metdata of :', metaData.key); }} />
      <Item label="2nd" metaData={{ key: '2nd-option' }} onSelect={(event, metaData) => { console.log('Metdata of :', metaData.key); }} />
      <Item label="3rd" metaData={{ key: '3rd-option' }} onSelect={(event, metaData) => { console.log('Metdata of :', metaData.key); }} />
    </SplitButton>
  </div>
);
