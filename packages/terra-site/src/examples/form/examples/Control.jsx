import React from 'react';
import Control from 'terra-form/lib/Control';

const ControlExamples = () => (
  <form>
    <Control
      type="checkbox"
      labelText="Are you willing to locate?"
      name="relocation"
      value="relocation"
    />
    <Control
      type="radio"
      labelText="I have Children"
      name="children_present"
      value="has_children"
    />
    <Control
      type="radio"
      labelText="I do not have Children"
      name="children_present"
      value="has_no_children"
    />
    <div>
      <Control
        type="radio"
        name="language"
        value="c++"
        labelText="C++"
        isInline
      />
      <Control
        type="radio"
        name="language"
        value="java"
        labelText="Java"
        isInline
      />
      <Control
        type="radio"
        name="language"
        value="ruby"
        labelText="Ruby"
        isInline
      />
      <Control
        type="radio"
        name="language"
        value="javascript"
        labelText="JavaScript"
        isInline
      />
    </div>
  </form>
);

export default ControlExamples;
