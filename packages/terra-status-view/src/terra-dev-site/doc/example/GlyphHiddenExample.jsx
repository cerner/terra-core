import React from 'react';
import Button from 'terra-button';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import StatusView from 'terra-status-view/lib/StatusView';
import classNames from 'classnames/bind';
import styles from './StatusViewDocCommon.module.scss';

const cx = classNames.bind(styles);

const GlyphHiddenExample = (
  <StatusView
    className={cx('status-view-width')}
    variant="error"
    message="An exception was thrown"
    isGlyphHidden
    title="500"
  >
    <Button text="OK" key="1" size="medium" />
    <Button text="Cancel" key="2" size="medium" />
  </StatusView>
);

export default GlyphHiddenExample;
