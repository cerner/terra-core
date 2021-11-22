import React from 'react';
import Textarea from 'terra-form-textarea';

const ResizableExample = () => (
  <Textarea
    isAutoResizable
    size="small"
    defaultValue="I automatically resize as you type in more information (except in mobile)."
    id="resizable"
  />
);

export default ResizableExample;
