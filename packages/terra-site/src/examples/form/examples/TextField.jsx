import React from 'react';
// remove eslint-disable once terra-form has been published
// eslint-disable-next-line import/no-extraneous-dependencies
import TextField from 'terra-form/lib/TextField';

const TextareaFieldExamples = () => (
  <form>
    <TextField
      label="Name"
      name="name"
      inputId="name"
      defaultValue="Mike"
      error="Name is required"
      help="The name given to you at birth."
    />
    <TextField
      label="Name with Maxlength"
      name="name"
      inputId="user-maxlength"
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
        inputId="favorite-food"
        isInline
        defaultValue="Chicken McNuggets"
        error="Name is required"
        help="Our team loves catering birthday lunches!"
      />
      <TextField
        label="Favorite Movie"
        name="favorite_movie"
        isInline
        inputId="favorite-movie"
        defaultValue="Tron"
        help="We like to do movie outings!"
        maxLength={50}
        required
      />
    </div>
  </form>
);

export default TextareaFieldExamples;
