import React from 'react';
import classNames from 'classnames/bind';
import Card from '../../../Card';
import styles from './CardTestDocCommon.scss';

const cx = classNames.bind(styles);

export default () => (
  <div className={cx('content-wrapper')}>
    <Card>
      <Card.Body id="paddingcard">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Card.Body>
    </Card>
  </div>
);
