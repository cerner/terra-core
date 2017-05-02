import React from 'react';
import { Textarea } from 'terra-form';

const TextareaExamples = () => (
  <form>
    <Textarea
      name="name"
      required
    />
    <Textarea
      name="profile_description"
      defaultValue="Hello! I am a Software Engineer in Kansas City!"
      rows={10}
      cols={10}
    />
  </form>
);

export default TextareaExamples;
