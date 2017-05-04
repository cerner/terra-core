import React from 'react';
import { TextField } from 'terra-form';

const TextareaFieldExamples = () => (
  <form>
    <TextField
      label="Name"
      name="name"
      defaultValue="Mike"
      error="Name is required"
      help="The name given to you at birth."
    />
    <TextField
      label="Name"
      name="name"
      defaultValue="Mike"
      error="Name is required"
      help="The name given to you at birth."
      maxLength={15}
      required
    />
    <div>
      <TextField
        label="Favorite Food"
        name="favorite_food"
        isInline
        defaultValue="Chicken McNuggets"
        error="Name is required"
        help="Our team loves catering birthday lunches!"
      />
      <TextField
        label="Favorite Movie"
        name="favorite_movie"
        isInline
        defaultValue="Tron"
        help="We like to do movie outings!"
        maxLength={50}
        required
      />
    </div>
  </form>
);

export default TextareaFieldExamples;
