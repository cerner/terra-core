import React from 'react';
import { Item, SplitButton } from 'terra-dropdown-button';
import { IconFeaturedOutlineYellow } from 'terra-icon';

import classNames from 'classnames/bind';
import styles from './IconSplitButton.module.scss';

const cx = classNames.bind(styles);

const Example = () => {
  return (
    <>
      <SplitButton
        primaryOptionLabel="Reply"
        icon={<IconFeaturedOutlineYellow />}
        onSelect={() => setMessage('Reply clicked')}
        buttonAttrs={{
          'aria-label': 'icon split',
        }}
        className={cx('icon-button')}
      >
        <Item label="Reply All" onSelect={() => setMessage('Reply All clicked')} />
        <Item label="Forward" onSelect={() => setMessage('Forward clicked')} />
        <Item label="Reply in 10 minutes" onSelect={() => setMessage('Reply in 10 minutes clicked')} />
        <Item label="Selective Reply" onSelect={() => setMessage('Selective Reply clicked')} />
      </SplitButton>
      <SplitButton
        primaryOptionLabel="Reply"
        icon={<IconFeaturedOutlineYellow />}
        isReversed
        onSelect={() => setMessage('Reply clicked')}
        buttonAttrs={{
          'aria-label': 'reverse icon split',
        }}
        className={cx('icon-button')}
      >
        <Item label="Reply All" onSelect={() => setMessage('Reply All clicked')} />
        <Item label="Forward" onSelect={() => setMessage('Forward clicked')} />
        <Item label="Reply in 10 minutes" onSelect={() => setMessage('Reply in 10 minutes clicked')} />
        <Item label="Selective Reply" onSelect={() => setMessage('Selective Reply clicked')} />
      </SplitButton>
      <SplitButton
        primaryOptionLabel="Reply"
        icon={<IconFeaturedOutlineYellow />}
        isIconOnly
        onSelect={() => setMessage('Reply clicked')}
        buttonAttrs={{
          'aria-label': 'icon only split',
        }}
        className={cx('icon-button')}
      >
        <Item label="Reply All" onSelect={() => setMessage('Reply All clicked')} />
        <Item label="Forward" onSelect={() => setMessage('Forward clicked')} />
        <Item label="Reply in 10 minutes" onSelect={() => setMessage('Reply in 10 minutes clicked')} />
        <Item label="Selective Reply" onSelect={() => setMessage('Selective Reply clicked')} />
      </SplitButton>
    </>
  );
};

export default Example;
