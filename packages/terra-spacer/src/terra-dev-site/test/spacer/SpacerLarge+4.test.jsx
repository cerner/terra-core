import React from 'react';
import classNames from 'classnames/bind';
import Spacer from '../../../Spacer';
import styles from './SpacerTest.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <div>
    <h3>Background color added for context. The light orange background shows margin, the green background shows padding.</h3>
    <div>Margin and Padding with value large+4 applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerMarginPaddingLarge4" className={cx('spacer')} marginTop="large+4" marginBottom="large+4" marginLeft="large+4" marginRight="large+4" paddingTop="large+4" paddingBottom="large+4" paddingLeft="large+4" paddingRight="large+4">
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
    <div>Margin Padding with value large+4 and isInlineBlock prop applied</div>
    <div className={cx(['spacing-demo', 'spacer-demo-margin'])}>
      <Spacer id="spacerMarginPaddingLarge4InlineBlock" className={cx('spacer')} marginTop="large+4" marginBottom="large+4" marginLeft="large+4" marginRight="large+4" paddingTop="large+4" paddingBottom="large+4" paddingLeft="large+4" paddingRight="large+4" isInlineBlock>
        <div className={cx('spacer-content-wrapper')}>Test component</div>
      </Spacer>
    </div>
  </div>
);
