import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Textarea from 'terra-form-textarea/lib/Textarea';

const ResizableExample = () => (
  <Textarea
    isAutoResizable
    size="small"
    defaultValue="I automatically resize as you type in more information (except in mobile)."
  />
);

export default ResizableExample;
