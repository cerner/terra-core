import React from 'react';
import IconSquare from 'terra-icon/lib/icon/decorative/IconSquareSymbol';
import classNames from 'classnames/bind';
import Button, { IconButton } from 'terra-button';
import styles from './ButtonTestCommon.module.scss';

const cx = classNames.bind(styles);

const text = 'Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long';
const words = 'Art artisan blog future next level odd park party polaroid truffaut. Apparel banksy beard belly bespoke biodiesel craft dreamcatcher ethical high pork quinoa retro semiotics squid tumblr. AnIncrediblyIncrediblyIncrediblyIncrediblyIncrediblyIncrediblyIncrediblyIncrediblyIncrediblyIncrediblyIncrediblyLongWord.';

const LongTextButton = () => <Button id="long-text" text={text} />;
const LongTextBlockButton = () => <Button id="long-text-block" text={text} isBlock />;

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
    <IconButton icon={<IconSquare />} iconType="decorative" text={words} />
    <div className={cx('spacing')} />
    <IconButton icon={<IconSquare />} iconType="decorative" text={words} isReversed />
  </div>
);
