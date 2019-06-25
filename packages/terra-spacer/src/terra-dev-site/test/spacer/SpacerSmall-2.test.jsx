import React from 'react';
import classNames from 'classnames/bind';
import Spacer from '../../../Spacer';
import styles from './SpacerTest.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <div>
    <h3>Background color added for context. The light orange background shows margin, the green background shows padding.</h3>
    <div>Margin with value small-2 applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerMarginSmall2" className={cx('spacer')} marginTop="small-2" marginBottom="small-2" marginLeft="small-2" marginRight="small-2">
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
    <div>Padding with value small-2 applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerPaddingSmall2" className={cx('spacer')} paddingTop="small-2" paddingBottom="small-2" paddingLeft="small-2" paddingRight="small-2">
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
    <div>Margin and Padding with value small-2 applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerMarginPaddingSmall2" className={cx('spacer')} marginTop="small-2" marginBottom="small-2" marginLeft="small-2" marginRight="small-2" paddingTop="small-2" paddingBottom="small-2" paddingLeft="small-2" paddingRight="small-2">
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
    <div>Margin, Padding with value small-2 and isInlineBlock prop applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerMarginPaddingSmall2InlineBlock" className={cx('spacer')} marginTop="small-2" marginBottom="small-2" marginLeft="small-2" marginRight="small-2" paddingTop="small-2" paddingBottom="small-2" paddingLeft="small-2" paddingRight="small-2" isInlineBlock>
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
  </div>
);
