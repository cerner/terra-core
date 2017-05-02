import React from 'react';

import MultiChoiceField from '../../../../lib/components/MultiChoiceField';

const multiChoiceField = () => (
  <MultiChoiceField
    label="Mark all of the programming languages you know"
    name="language"
    help="Every check should indicate at least 3 months of experience"
    choices={[
      { name: 'C', value: 'c' },
      { name: 'Java', value: 'java' },
      { name: 'Ruby', value: 'ruby' },
      { name: 'C++', value: 'c++' },
      { name: 'JavaScript', value: 'javascript' },
    ]}
  />
);

export default multiChoiceField;
