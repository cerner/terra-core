import React from 'react';
import classNames from 'classnames/bind';
import Spacer from '../../../Spacer';
import styles from './SpacerTest.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <div>
    <h3>Background color added for context. The light orange background shows margin, the green background shows padding.</h3>
    <div>Margin with value small-1 applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerMarginSmall1" className={cx('spacer')} marginTop="small-1" marginBottom="small-1" marginLeft="small-1" marginRight="small-1">
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
    <div>Padding with value small-1 applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerPaddingSmall1" className={cx('spacer')} paddingTop="small-1" paddingBottom="small-1" paddingLeft="small-1" paddingRight="small-1">
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
    <div>Margin and Padding with value small-1 applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerMarginPaddingSmall1" className={cx('spacer')} marginTop="small-1" marginBottom="small-1" marginLeft="small-1" marginRight="small-1" paddingTop="small-1" paddingBottom="small-1" paddingLeft="small-1" paddingRight="small-1">
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
    <div>Margin, Padding with value small-1 and isInlineBlock prop applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerMarginPaddingSmall1InlineBlock" className={cx('spacer')} marginTop="small-1" marginBottom="small-1" marginLeft="small-1" marginRight="small-1" paddingTop="small-1" paddingBottom="small-1" paddingLeft="small-1" paddingRight="small-1" isInlineBlock>
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
  </div>
);
