import React from 'react';
import classNames from 'classnames/bind';
import Spacer from '../../../Spacer';
import styles from './SpacerTest.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <div>
    <h3>Background color added for context. The light orange background shows margin, the green background shows padding.</h3>
    <div>Margin with value medium applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerMarginMedium" className={cx('spacer')} marginTop="medium" marginBottom="medium" marginLeft="medium" marginRight="medium">
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
    <div>Padding with value medium applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerPaddingMedium" className={cx('spacer')} paddingTop="medium" paddingBottom="medium" paddingLeft="medium" paddingRight="medium">
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
    <div>Margin and Padding with value medium applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerMarginPaddingMedium" className={cx('spacer')} marginTop="medium" marginBottom="medium" marginLeft="medium" marginRight="medium" paddingTop="medium" paddingBottom="medium" paddingLeft="medium" paddingRight="medium">
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
    <div>Margin Padding with value medium and isInlineBlock prop applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerMarginPaddingMediumInlineBlock" className={cx('spacer')} marginTop="medium" marginBottom="medium" marginLeft="medium" marginRight="medium" paddingTop="medium" paddingBottom="medium" paddingLeft="medium" paddingRight="medium" isInlineBlock>
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
  </div>
);
