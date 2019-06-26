/* eslint-disable no-console */
import React from 'react';
import classnames from 'classnames/bind';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DropdownButton from '../../../DropdownButton';
import styles from './BoundedDropdownButton.scss';

const cx = classnames.bind(styles);

export default () => (
  <div className={cx('container')}>
    <DropdownButton
      label="Primary"
      callback={() => { console.log('primary option'); }}
      className={cx('top-left')}
      type="split"
      id="top-left"
    >
      <DropdownButton.Option label="1st Option Lorem Ipsum Dolor" callback={() => { console.log('hi'); }} />
      <DropdownButton.Option label="2nd Option" callback={() => { console.log('bye'); }} />
    </DropdownButton>
    <DropdownButton
      label="Primary"
      callback={() => { console.log('primary option'); }}
      className={cx('top-right')}
      type="split"
      id="top-right"
    >
      <DropdownButton.Option label="1st Option Lorem Ipsum Dolor" callback={() => { console.log('hi'); }} />
      <DropdownButton.Option label="2nd Option" callback={() => { console.log('bye'); }} />
    </DropdownButton>
    <DropdownButton
      label="Primary"
      callback={() => { console.log('primary option'); }}
      className={cx('bottom-left')}
      type="split"
      id="bottom-left"
    >
      <DropdownButton.Option label="1st Option Lorem Ipsum Dolor" callback={() => { console.log('hi'); }} />
      <DropdownButton.Option label="2nd Option" callback={() => { console.log('bye'); }} />
    </DropdownButton>
    <DropdownButton
      label="Primary"
      callback={() => { console.log('primary option'); }}
      className={cx('bottom-right')}
      type="split"
      id="bottom-right"
    >
      <DropdownButton.Option label="1st Option Lorem Ipsum Dolor" callback={() => { console.log('hi'); }} />
      <DropdownButton.Option label="2nd Option" callback={() => { console.log('bye'); }} />
    </DropdownButton>
  </div>
);
