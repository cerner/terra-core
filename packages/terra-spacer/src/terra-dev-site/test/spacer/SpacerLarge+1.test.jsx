import React from 'react';
import classNames from 'classnames/bind';
import Spacer from '../../../Spacer';
import styles from './SpacerTest.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <div>
    <h3>Background color added for context. The light orange background shows margin, the green background shows padding.</h3>
    <div>Margin with value large+1 applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerMarginLarge1" className={cx('spacer')} marginTop="large+1" marginBottom="large+1" marginLeft="large+1" marginRight="large+1">
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
    <div>Padding with value large+1 applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerPaddingLarge1" className={cx('spacer')} paddingTop="large+1" paddingBottom="large+1" paddingLeft="large+1" paddingRight="large+1">
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
    <div>Margin and Padding with value large+1 applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerMarginPaddingLarge1" className={cx('spacer')} marginTop="large+1" marginBottom="large+1" marginLeft="large+1" marginRight="large+1" paddingTop="large+1" paddingBottom="large+1" paddingLeft="large+1" paddingRight="large+1">
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
    <div>Margin Padding with value large+1 and isInlineBlock prop applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerMarginPaddingLarge1InlineBlock" className={cx('spacer')} marginTop="large+1" marginBottom="large+1" marginLeft="large+1" marginRight="large+1" paddingTop="large+1" paddingBottom="large+1" paddingLeft="large+1" paddingRight="large+1" isInlineBlock>
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
  </div>
);
