import React from 'react';
import IconSquare from 'terra-icon/lib/icon/IconSquareSymbol';
import Button from '../../../Button';

const spacingStyle = { padding: '20px' };
const text = 'Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long';
const words = 'Art artisan blog future next level odd park party polaroid truffaut. Apparel banksy beard belly bespoke biodiesel craft dreamcatcher ethical high pork quinoa retro semiotics squid tumblr. AnIncrediblyIncrediblyIncrediblyIncrediblyIncrediblyIncrediblyIncrediblyIncrediblyIncrediblyIncrediblyIncrediblyLongWord.';

const LongTextButton = () => <Button id="long-text" text={text} />;
const LongTextBlockButton = () => <Button id="long-text-block" text={text} isBlock />;

export default () => (
  <div>
    <LongTextButton />
    <div style={spacingStyle} />
    <LongTextBlockButton />
    <div style={spacingStyle} />
    <Button id="long-word" text={words} />
    <div style={spacingStyle} />
    <Button id="long-word-block" text={words} isBlock />
    <div style={spacingStyle} />
    <Button icon={<IconSquare />} text={words} />
    <div style={spacingStyle} />
    <Button icon={<IconSquare />} text={words} isReversed />
  </div>
);
