import React from 'react';
import classNames from 'classnames/bind';
import styles from './MixinsExample.module.scss';

/**
  MixinsExample.module.scss

  @import 'terra-breakpoints/mixins';

  :local {
    .content::after {
      content: 'The active breakpoint is: tiny';

      @include terra-mq-small-up {
        content: 'The active breakpoint is: small';
      }

      @include terra-mq-medium-up {
        content: 'The active breakpoint is: medium';
      }

      @include terra-mq-large-up {
        content: 'The active breakpoint is: large';
      }

      @include terra-mq-huge-up {
        content: 'The active breakpoint is: huge';
      }

      @include terra-mq-enormous-up {
        content: 'The active breakpoint is: enormous';
      }
    }
  }
*/

const cx = classNames.bind(styles);

const MixinsExample = () => (
  <div>
    <p>This example uses SASS mixins to determine the active breakpoint.</p>
    <p className={cx('content')} />
  </div>
);

export default MixinsExample;
