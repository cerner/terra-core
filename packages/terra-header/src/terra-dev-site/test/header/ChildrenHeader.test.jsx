import React from 'react';
import classNames from 'classnames/bind';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Header from 'terra-header/lib/Header';
import Placeholder from 'terra-doc-template/lib/Placeholder';
import styles from '../../doc/example/HeaderDocCommon.scss';

const cx = classNames.bind(styles);

const HeaderExample = () => (
  <div>
    <br />
    <Header>
      <Placeholder className={cx('placeholder-wrapper')} title="Collapsible Menu View" />
    </Header>
    <br />
  </div>
);

export default HeaderExample;
