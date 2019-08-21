import React from 'react';
import Textarea from '../../../Textarea';

const textarea = () => (
  <Textarea
    name="job_experience"
    defaultValue=""
    required
    ariaLabel="label"
  />
);

export default textarea;
