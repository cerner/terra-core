import React from 'react';
import classNames from 'classnames/bind';
import Spacer from '../../../Spacer';
import styles from './SpacerTest.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <div>
    <h3>Background color added for context. The light orange background shows margin, the green background shows padding.</h3>
    <div>Margin with value large applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerMarginLarge" className={cx('spacer')} marginTop="large" marginBottom="large" marginLeft="large" marginRight="large">
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
    <div>Padding with value large applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerPaddingLarge" className={cx('spacer')} paddingTop="large" paddingBottom="large" paddingLeft="large" paddingRight="large">
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
    <div>Margin and Padding with value large applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerMarginPaddingLarge" className={cx('spacer')} marginTop="large" marginBottom="large" marginLeft="large" marginRight="large" paddingTop="large" paddingBottom="large" paddingLeft="large" paddingRight="large">
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
    <div>Margin Padding with value large and isInlineBlock prop applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerMarginPaddingLargeInlineBlock" className={cx('spacer')} marginTop="large" marginBottom="large" marginLeft="large" marginRight="large" paddingTop="large" paddingBottom="large" paddingLeft="large" paddingRight="large" isInlineBlock>
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
  </div>
);
