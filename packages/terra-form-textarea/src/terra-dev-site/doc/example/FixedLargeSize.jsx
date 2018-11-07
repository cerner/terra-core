import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Textarea from 'terra-form-textarea/lib/Textarea';

const FixedLargeSizeExample = () => (
  <Textarea
    size="large"
    style={{ resize: 'none' }}
  />
);

export default FixedLargeSizeExample;
