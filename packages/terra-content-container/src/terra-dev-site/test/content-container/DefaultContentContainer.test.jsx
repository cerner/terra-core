import React from 'react';
import classNames from 'classnames/bind';

import ContentContainer from '../../../ContentContainer';
import styles from './ContentContainerTestCommon.module.scss';

const cx = classNames.bind(styles);

const header = <header className={cx('header')}>header</header>;
const content = <div className={cx('content')}>content</div>;
const footer = <footer className={cx('footer')}>footer</footer>;

const container = () => (
  <div className={cx('content-container-wrapper')}>
    <ContentContainer id="content-container" header={header} footer={footer}>
      {content}
    </ContentContainer>
  </div>
);

export default container;
