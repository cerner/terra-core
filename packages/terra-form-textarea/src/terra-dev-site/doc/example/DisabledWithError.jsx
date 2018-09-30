import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Textarea from 'terra-form-textarea/lib/Textarea';

const DisabledWithErrorExample = () => (
  <Textarea
    disabled
    isInvalid
    size="small"
    value="I'm disabled with error."
  />
);

export default DisabledWithErrorExample;
