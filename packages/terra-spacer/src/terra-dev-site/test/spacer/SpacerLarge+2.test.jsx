import React from 'react';
import classNames from 'classnames/bind';
import Spacer from '../../../Spacer';
import styles from './SpacerTest.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <div>
    <h3>Background color added for context. The light orange background shows margin, the green background shows padding.</h3>
    <div>Margin with value large+2 applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerMarginLarge2" className={cx('spacer')} marginTop="large+2" marginBottom="large+2" marginLeft="large+2" marginRight="large+2">
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
    <div>Padding with value large+2 applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerPaddingLarge2" className={cx('spacer')} paddingTop="large+2" paddingBottom="large+2" paddingLeft="large+2" paddingRight="large+2">
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
    <div>Margin and Padding with value large+2 applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerMarginPaddingLarge2" className={cx('spacer')} marginTop="large+2" marginBottom="large+2" marginLeft="large+2" marginRight="large+2" paddingTop="large+2" paddingBottom="large+2" paddingLeft="large+2" paddingRight="large+2">
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
    <div>Margin Padding with value large+2 and isInlineBlock prop applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerMarginPaddingLarge2InlineBlock" className={cx('spacer')} marginTop="large+2" marginBottom="large+2" marginLeft="large+2" marginRight="large+2" paddingTop="large+2" paddingBottom="large+2" paddingLeft="large+2" paddingRight="large+2" isInlineBlock>
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
  </div>
);
