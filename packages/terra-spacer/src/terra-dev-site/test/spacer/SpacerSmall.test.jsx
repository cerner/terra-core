import React from 'react';
import classNames from 'classnames/bind';
import Spacer from '../../../Spacer';
import styles from './SpacerTest.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <div>
    <h3>Background color added for context. The light orange background shows margin, the green background shows padding.</h3>
    <div>Margin with value small applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerMarginSmall" className={cx('spacer')} marginTop="small" marginBottom="small" marginLeft="small" marginRight="small">
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
    <div>Padding with value small applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerPaddingSmall" className={cx('spacer')} paddingTop="small" paddingBottom="small" paddingLeft="small" paddingRight="small">
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
    <div>Margin and Padding with value small applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerMarginPaddingSmall" className={cx('spacer')} marginTop="small" marginBottom="small" marginLeft="small" marginRight="small" paddingTop="small" paddingBottom="small" paddingLeft="small" paddingRight="small">
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
    <div>Margin, Padding with value small and isInlineBlock prop applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerMarginPaddingSmallInlineBlock" className={cx('spacer')} marginTop="small" marginBottom="small" marginLeft="small" marginRight="small" paddingTop="small" paddingBottom="small" paddingLeft="small" paddingRight="small" isInlineBlock>
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
  </div>
);
