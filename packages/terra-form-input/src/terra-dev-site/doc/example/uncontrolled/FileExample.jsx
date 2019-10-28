import React from 'react';
import Field from 'terra-form-field';
import Input from 'terra-form-input';

const FileExample = () => (
  <div>
    <Field label="File">
      <Input
        name="file input"
        type="file"
        ariaLabel="File"
      />
    </Field>
  </div>
);

export default FileExample;
