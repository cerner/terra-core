import React from 'react';

import ChoiceField from '../../../../lib/components/ChoiceField';

const choiceField = () => (
  <ChoiceField
    label="Prime Programming Language"
    name="language"
    help="This is the programming language you are looking to work with most"
    required
    choiceName="name"
    choiceValue="value"
    choices={[
      { name: 'C', value: 'c' },
      { name: 'Java', value: 'java' },
      { name: 'Ruby', value: 'ruby' },
      { name: 'C++', value: 'c++' },
      { name: 'JavaScript', value: 'javascript' },
    ]}
  />
);

export default choiceField;
