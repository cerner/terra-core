import React from 'react';

import Button from '../../lib/Button';

const spacingStyle = { padding: '20px' };
const text = 'Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long';

const LongTextButton = () => <Button id="long-text" text={text} />;
const LongTextBlockButton = () => <Button id="long-text-block" text={text} isBlock />;

export default () => (
  <div>
    <LongTextButton />
    <div style={spacingStyle} />
    <LongTextBlockButton />
  </div>
);
