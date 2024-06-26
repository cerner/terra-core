import React from 'react';
import { Item, SplitButton } from 'terra-dropdown-button';
import { IconReply } from 'terra-icon';

import classNames from 'classnames/bind';
import styles from './IconSplitButton.module.scss';

const cx = classNames.bind(styles);

const Example = () => (
  <>
    <SplitButton
      primaryOptionLabel="Reply"
      icon={<IconReply />}
      onSelect={() => {}}
      buttonAttrs={{
        'aria-label': 'icon split',
      }}
      className={cx('icon-button')}
    >
      <Item label="Reply All" onSelect={() => {}} />
      <Item label="Forward" onSelect={() => {}} />
      <Item label="Reply in 10 minutes" onSelect={() => {}} />
      <Item label="Selective Reply" onSelect={() => {}} />
    </SplitButton>
    <SplitButton
      primaryOptionLabel="Reply"
      icon={<IconReply />}
      isReversed
      onSelect={() => {}}
      buttonAttrs={{
        'aria-label': 'reverse icon split',
      }}
      className={cx('icon-button')}
    >
      <Item label="Reply All" onSelect={() => {}} />
      <Item label="Forward" onSelect={() => {}} />
      <Item label="Reply in 10 minutes" onSelect={() => {}} />
      <Item label="Selective Reply" onSelect={() => {}} />
    </SplitButton>
    <SplitButton
      primaryOptionLabel="Reply"
      icon={<IconReply />}
      isIconOnly
      onSelect={() => {}}
      buttonAttrs={{
        'aria-label': 'icon only split',
      }}
      className={cx('icon-button')}
    >
      <Item label="Reply All" onSelect={() => {}} />
      <Item label="Forward" onSelect={() => {}} />
      <Item label="Reply in 10 minutes" onSelect={() => {}} />
      <Item label="Selective Reply" onSelect={() => {}} />
    </SplitButton>
  </>
);

export default Example;
