import React from 'react';

import Textarea from '../../../../lib/components/Textarea';

const textarea = () => (
  <Textarea
    name="name"
    required
    value="Mike"
    isInline
  />
);

export default textarea;
