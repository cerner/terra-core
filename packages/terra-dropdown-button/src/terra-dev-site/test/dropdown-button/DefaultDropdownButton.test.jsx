import React from 'react';
import classnames from 'classnames/bind';
import DropdownButton, { Item } from '../../../DropdownButton';
import styles from './ExtraSpacing.module.scss';

const cx = classnames.bind(styles);

export default () => (
  <div className={cx('container-spacing-wrapper')}>
    <DropdownButton label="Dropdown" id="dropdown">
      <Item label="1st" metaData={{ key: '1st Option' }} onSelect={(event, metaData) => { console.log('Metdata of :', metaData.key); }} />
      <Item label="2nd" metaData={{ key: '2nd Option' }} onSelect={(event, metaData) => { console.log('Metdata of :', metaData.key); }} />
      <Item label="3rd" metaData={{ key: '3rd Option' }} onSelect={(event, metaData) => { console.log('Metdata of :', metaData.key); }} />
    </DropdownButton>
  </div>
);
