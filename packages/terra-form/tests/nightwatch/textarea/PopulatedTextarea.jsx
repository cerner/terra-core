import React from 'react';

import Textarea from '../../../lib/Textarea';

const textarea = () =>
  <Textarea
    name="job_experience"
    defaultValue=""
    isInline
    required
  />;

export default textarea;
