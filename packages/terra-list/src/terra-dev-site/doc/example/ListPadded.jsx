import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List, { Item } from 'terra-list/lib/index';
import Placeholder from 'terra-doc-template/lib/Placeholder';
import classNames from 'classnames/bind';
import styles from './ListDocCommon.module.scss';

const cx = classNames.bind(styles);

const ListPaddedExample = () => (
  <React.Fragment>
    <List paddingStyle="standard">
      <Item key="123">
        <Placeholder title="Standard Padding Item 0" className={cx('placeholder')} />
      </Item>
      <Item key="124">
        <Placeholder title="Standard Padding Item 1" className={cx('placeholder')} />
      </Item>
      <Item key="125">
        <Placeholder title="Standard Padding Item 2" className={cx('placeholder')} />
      </Item>
    </List>
    <br />
    <List paddingStyle="compact">
      <Item key="123">
        <Placeholder title="Compact Padding Item 0" className={cx('placeholder')} />
      </Item>
      <Item key="124">
        <Placeholder title="Compact Padding Item 1" className={cx('placeholder')} />
      </Item>
      <Item key="125">
        <Placeholder title="Compact Padding Item 2" className={cx('placeholder')} />
      </Item>
    </List>
  </React.Fragment>
);

export default ListPaddedExample;
