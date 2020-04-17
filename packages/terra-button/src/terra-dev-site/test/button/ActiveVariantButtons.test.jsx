import React from 'react';
import IconSquare from 'terra-icon/lib/icon/IconSquareSymbol';
import classNames from 'classnames/bind';
import buttonStyles from 'terra-button/lib/Button.module.scss';
import Button from '../../../Button';
import styles from './ButtonTestCommon.module.scss';

const cx = classNames.bind(styles);
const cy = classNames.bind(buttonStyles);

const NeutralButton = () => (
  <div id="neutral" className={cx('spacing')}>
    <Button id="neutralActive" text="Neutral-Active" variant="neutral" className={cy('is-active')} />
    <span id="neutralActiveFocusSpan" className={cx('spacing')}>
      <Button id="neutralActiveFocus" text="Neutral-Active+Focus" variant="neutral" className={cy(['is-active', 'is-focused'])} />
    </span>
  </div>
);

const EmphasisButton = () => (
  <div id="emphasis" className={cx('spacing')}>
    <Button id="emphasisActive" text="Emphasis-Active" variant="emphasis" className={cy('is-active')} />
    <span id="emphasisActiveFocusSpan" className={cx('spacing')}>
      <Button id="emphasisActiveFocus" text="Emphasis-Active+Focus" variant="emphasis" className={cy(['is-active', 'is-focused'])} />
    </span>
  </div>
);

const GhostButton = () => (
  <div id="ghost" className={cx('spacing')}>
    <Button id="ghostActive" text="Ghost-Active" variant="ghost" className={cy('is-active')} />
    <span id="ghostActiveFocusSpan" className={cx('spacing')}>
      <Button id="ghostActiveFocus" text="Ghost-Active+Focus" variant="ghost" className={cy(['is-active', 'is-focused'])} />
    </span>
  </div>
);

const DeemphasisButton = () => (
  <div id="deempshasis" className={cx('spacing')}>
    <Button id="de-emphasisActive" text="De-emphasis-Active" variant="de-emphasis" className={cy('is-active')} />
    <span id="de-emphasisActiveFocusSpan" className={cx('spacing')}>
      <Button id="de-emphasisActiveFocus" text="De-emphasis-Active+Focus" variant="de-emphasis" className={cy(['is-active', 'is-focused'])} />
    </span>
  </div>
);

const ActionButton = () => (
  <div id="action" className={cx('spacing')}>
    <Button id="actionActive" text="Action-Active" icon={<IconSquare />} variant="action" className={cy('is-active')} />
    <span id="actionActiveFocusSpan" className={cx('spacing')}>
      <Button id="actionActiveFocus" text="Action-Active+Focus" icon={<IconSquare />} variant="action" className={cy(['is-active', 'is-focused'])} />
    </span>
  </div>
);

const UtilityButton = () => (
  <div id="utility" className={cx('spacing')}>
    <Button id="utilityActive" text="Utility-Active" icon={<IconSquare />} variant="utility" className={cy('is-active')} />
    <span id="utilityActiveFocusSpan" className={cx('spacing')}>
      <Button id="utilityButtonActiveFocus" text="Utility-Active+Focus" icon={<IconSquare />} variant="utility" className={cy(['is-active', 'is-focused'])} />
    </span>
  </div>
);

const activeButtons = () => (
  <div>
    <NeutralButton />
    <EmphasisButton />
    <GhostButton />
    <DeemphasisButton />
    <ActionButton />
    <UtilityButton />
  </div>
);

export default activeButtons;
