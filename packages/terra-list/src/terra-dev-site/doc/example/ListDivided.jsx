import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List, { Item } from 'terra-list/lib/index';
import Placeholder from 'terra-doc-template/lib/Placeholder';
import classNames from 'classnames/bind';
import styles from './ListDocCommon.module.scss';

const cx = classNames.bind(styles);

const ListDividedExample = () => (
  <React.Fragment>
    <List dividerStyle="standard">
      <Item key="123">
        <Placeholder title="Standard Divider Item 0" className={cx('placeholder')} />
      </Item>
      <Item key="124">
        <Placeholder title="Standard Divider Item 1" className={cx('placeholder')} />
      </Item>
      <Item key="125">
        <Placeholder title="Standard Divider Item 2" className={cx('placeholder')} />
      </Item>
    </List>
    <br />
    <List dividerStyle="bottom-only">
      <Item key="123">
        <Placeholder title="Bottom Divider Item 0" className={cx('placeholder')} />
      </Item>
      <Item key="124">
        <Placeholder title="Bottom Divider Item 1" className={cx('placeholder')} />
      </Item>
      <Item key="125">
        <Placeholder title="Bottom Divider Item 2" className={cx('placeholder')} />
      </Item>
    </List>
  </React.Fragment>
);

export default ListDividedExample;
