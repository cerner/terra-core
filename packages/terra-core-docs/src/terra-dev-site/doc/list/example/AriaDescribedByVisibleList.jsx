import React from 'react';
import List, { Item } from 'terra-list/lib/index';
import { Placeholder } from '@cerner/terra-docs';
import classNames from 'classnames/bind';
import styles from './ListDocCommon.module.scss';

const cx = classNames.bind(styles);

const AriaDescribedByVisibleList = () => (
  <>
    <p id="list-help">
      Here are some instructions for using this list.
    </p>
    <List ariaDescribedBy="list-help">
      <Item key="123">
        <Placeholder title="John Smith" className={cx('placeholder')} />
      </Item>
      <Item key="124">
        <Placeholder title="Mary Jones" className={cx('placeholder')} />
      </Item>
      <Item key="125">
        <Placeholder title="Sam Brown" className={cx('placeholder')} />
      </Item>
    </List>
  </>
);

export default AriaDescribedByVisibleList;
