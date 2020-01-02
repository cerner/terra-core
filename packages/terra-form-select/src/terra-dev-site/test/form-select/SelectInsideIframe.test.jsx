import React from 'react';
import classNames from 'classnames/bind';
import styles from './common/Select.test.module.scss';

const cx = classNames.bind(styles);

const SelectInsideIframe = () => (
  <div id="frame-container" className={cx('content-wrapper')}>
    <iframe id="frmSelectFrame" title="form-selectFrame" src="/#/raw/tests/terra-form-select/form-select/many-options" height="650" width="355" />
  </div>
);

export default SelectInsideIframe;
