import React from 'react';
import classNames from 'classnames/bind';
import Spacer from '../../../Spacer';
import styles from './SpacerTest.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <div>
    <h3>Background color added for context. The light orange background shows margin, the green background shows padding.</h3>
    <div>Margin with value large+3 applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerMarginLarge3" className={cx('spacer')} marginTop="large+3" marginBottom="large+3" marginLeft="large+3" marginRight="large+3">
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
    <div>Padding with value large+3 applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerPaddingLarge3" className={cx('spacer')} paddingTop="large+3" paddingBottom="large+3" paddingLeft="large+3" paddingRight="large+3">
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
    <div>Margin and Padding with value large+3 applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerMarginPaddingLarge3" className={cx('spacer')} marginTop="large+3" marginBottom="large+3" marginLeft="large+3" marginRight="large+3" paddingTop="large+3" paddingBottom="large+3" paddingLeft="large+3" paddingRight="large+3">
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
    <div>Margin Padding with value large+3 and isInlineBlock prop applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerMarginPaddingLarge3InlineBlock" className={cx('spacer')} marginTop="large+3" marginBottom="large+3" marginLeft="large+3" marginRight="large+3" paddingTop="large+3" paddingBottom="large+3" paddingLeft="large+3" paddingRight="large+3" isInlineBlock>
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
  </div>
);
