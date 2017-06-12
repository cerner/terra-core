import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import TextareaField from 'terra-form/lib/TextareaField';

const TextareaFieldExamples = () => (
  <form>
    <TextareaField
      label="Name"
      name="name"
      defaultValue="Mike"
      error="Name is required"
      help="The name given to you at birth."
    />
    <TextareaField
      label="Profile Description"
      name="profile_description"
      error="Name is required"
      help="The name given to you at birth."
      cols={10}
      maxLength={15}
      minLength={5}
      rows={10}
      required
    />
    <div>
      <TextareaField
        label="Tell us about your most difficult programming problem"
        name="difficult_problem"
        isInline
        error="This field is required"
      />
      <TextareaField
        label="How well do you work in a team?"
        name="teamwork"
        isInline
        error="This field is required"
        help="The name given to you at birth."
        maxLength={15}
        minLength={5}
        required
      />
    </div>
  </form>
);

export default TextareaFieldExamples;
