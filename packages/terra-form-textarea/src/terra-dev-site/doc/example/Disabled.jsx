import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Textarea from 'terra-form-textarea/lib/Textarea';

const DisabledExample = () => (
  <Textarea
    disabled
    size="small"
    value="I'm disabled."
  />
);

export default DisabledExample;
