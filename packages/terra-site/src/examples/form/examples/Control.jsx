import React from 'react';
import { Control } from 'terra-form';

const ControlExamples = () => (
  <form>
    <Control
      type="checkbox"
      label="Are you willing to locate?"
      name="relocation"
      value="relocation"
    />
    <Control
      type="radio"
      label="I have Children"
      name="children_present"
      value="has_children"
    />
    <Control
      type="radio"
      label="I do not have Children"
      name="children_present"
      value="has_no_children"
    />
    <div>
      <Control
        type="radio"
        isInline
        name="language"
        value="c++"
        label="C++"
      />
      <Control
        type="radio"
        isInline
        name="language"
        value="java"
        label="Java"
      />
      <Control
        type="radio"
        isInline
        name="language"
        value="ruby"
        label="Ruby"
      />
      <Control
        type="radio"
        isInline
        name="language"
        value="javascript"
        label="JavaScript"
      />
    </div>
  </form>
);

export default ControlExamples;
