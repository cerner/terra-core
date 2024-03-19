import React from 'react';
import { IconSquareSymbol as IconSquare } from 'terra-icon';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import styles from './ButtonTestCommon.module.scss';

const cx = classNames.bind(styles);

const text = 'Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long';
const words = 'Art artisan blog future next level odd park party polaroid truffaut. Apparel banksy beard belly bespoke biodiesel craft dreamcatcher ethical high pork quinoa retro semiotics squid tumblr. AnIncrediblyIncrediblyIncrediblyIncrediblyIncrediblyIncrediblyIncrediblyIncrediblyIncrediblyIncrediblyIncrediblyLongWord.';

const LongTextButton = () => <Button id="long-text" text={text} />;
const LongTextBlockButton = () => <Button id="long-text-block" text={text} isBlock />;
const LongTextBlockLeftAlignedButton = () => <Button id="long-text-block-left-aligned" text={`Left Aligned: ${text}`} isBlock isLeftAligned />;

export default () => (
  <div>
    <LongTextButton />
    <div className={cx('spacing')} />
    <LongTextBlockButton />
    <div className={cx('spacing')} />
    <Button id="long-word" text={words} />
    <div className={cx('spacing')} />
    <Button id="long-word-block" text={words} isBlock />
    <div className={cx('spacing')} />
    <Button icon={<IconSquare />} text={words} />
    <div className={cx('spacing')} />
    <Button icon={<IconSquare />} text={words} isReversed />
    <div className={cx('spacing')} />
    <LongTextBlockLeftAlignedButton isLeftAligned />
  </div>
);
