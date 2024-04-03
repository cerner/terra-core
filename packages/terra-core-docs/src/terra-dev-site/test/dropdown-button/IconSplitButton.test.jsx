import React from 'react';
import classnames from 'classnames/bind';
import { SplitButton, Item } from 'terra-dropdown-button';
import { IconFeaturedOutlineYellow } from 'terra-icon';
import styles from './ExtraSpacing.module.scss';

const cx = classnames.bind(styles);

const RightIconSplitButton = () => {
  return (
    <div className={cx('container-spacing-wrapper')}>
      <div className={cx('button-spacing-wrapper')}>
        <SplitButton
          primaryOptionLabel="Split"
          icon={<IconFeaturedOutlineYellow />}
          metaData={{ key: 'primary-button' }}
          onSelect={() => {}}
          id="left-icon"
        >
          <Item id="opt1" label="1st" metaData={{ key: '1st Option' }} onSelect={() => {}} />
          <Item id="opt2" label="2nd" metaData={{ key: '2nd Option' }} onSelect={() => {}} />
          <Item id="opt3" label="3rd" metaData={{ key: '3rd Option' }} onSelect={() => {}} />
        </SplitButton>
      </div>
      <div className={cx('button-spacing-wrapper')}>
        <SplitButton
          primaryOptionLabel="Split"
          icon={<IconFeaturedOutlineYellow />}
          isReversed
          metaData={{ key: 'primary-button' }}
          onSelect={() => {}}
          id="right-icon"
        >
          <Item id="opt1" label="1st" metaData={{ key: '1st Option' }} onSelect={() => {}} />
          <Item id="opt2" label="2nd" metaData={{ key: '2nd Option' }} onSelect={() => {}} />
          <Item id="opt3" label="3rd" metaData={{ key: '3rd Option' }} onSelect={() => {}} />
        </SplitButton>
      </div>
      <div className={cx('button-spacing-wrapper')}>
        <SplitButton
          primaryOptionLabel="Split"
          icon={<IconFeaturedOutlineYellow />}
          isIconOnly
          metaData={{ key: 'primary-button' }}
          onSelect={() => {}}
          id="icon-only"
        >
          <Item id="opt1" label="1st" metaData={{ key: '1st Option' }} onSelect={() => {}} />
          <Item id="opt2" label="2nd" metaData={{ key: '2nd Option' }} onSelect={() => {}} />
          <Item id="opt3" label="3rd" metaData={{ key: '3rd Option' }} onSelect={() => {}} />
        </SplitButton>
      </div>
    </div>
  );
};

export default RightIconSplitButton;
