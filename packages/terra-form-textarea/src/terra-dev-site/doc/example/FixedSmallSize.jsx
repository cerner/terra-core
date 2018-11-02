import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Textarea from 'terra-form-textarea/lib/Textarea';

const FixedSmallSizeExample = () => (
  <Textarea
    size="small"
    style={{ resize: 'none' }}
  />
);

export default FixedSmallSizeExample;
