import React from 'react';
import Control from '../../../../lib/components/Control';
import RadioGroup from '../../../../lib/components/RadioGroup';

const radioGroup = () => (
  <RadioGroup
    legend="Prime Programming Language"
    name="language"
    help="This is the programming language you are looking to work with most"
    error="One value must be chosen"
    required
  >
    <Control
      type="radio"
      isInline
      value="c"
      label="C"
    />
    <Control
      type="radio"
      isInline
      value="c++"
      label="C++"
    />
    <Control
      type="radio"
      isInline
      value="java"
      label="Java"
    />
    <Control
      type="radio"
      isInline
      value="ruby"
      label="Ruby"
    />
    <Control
      type="radio"
      isInline
      value="javascript"
      label="JavaScript"
    />
  </RadioGroup>
);

export default radioGroup;
