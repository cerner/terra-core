import React from 'react';
import Field from 'terra-form-field';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Textarea from 'terra-form-textarea/lib/Textarea';

const ResizableExample = () => (
  <Field label="Resizable Textarea" htmlFor="resizable">
    <Textarea
      isAutoResizable
      size="small"
      defaultValue="I automatically resize as you type in more information (except in mobile)."
      id="resizable"
      ariaLabel="text-area-label"
    />
  </Field>
);

export default ResizableExample;
