import React from 'react';

import Button from '../../lib/Button';

const text = 'Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long';

const LongTextButton = () => <Button id="longTextButton" text={text} />;
const LongTextBlockButton = () => <Button id="longTextButton" text={text} isBlock />;

export {
  LongTextButton,
  LongTextBlockButton,
};
