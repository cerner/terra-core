import React from 'react';
import classNames from 'classnames/bind';
import styles from './MixinsExample.module.scss';

/**
  MixinsExample.module.scss

  @import 'terra-breakpoints/mixins';

  :local {
    @include terra-mq-tiny-up {
      .content::after {
        content: 'The active breakpoint is: tiny';
      }
    }

    @include terra-mq-small-up {
      .content::after {
        content: 'The active breakpoint is: small';
      }
    }

    @include terra-mq-medium-up {
      .content::after {
        content: 'The active breakpoint is: medium';
      }
    }

    @include terra-mq-large-up {
      .content::after {
        content: 'The active breakpoint is: large';
      }
    }

    @include terra-mq-huge-up {
      .content::after {
        content: 'The active breakpoint is: huge';
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
