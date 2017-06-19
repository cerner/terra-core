import React from 'react';

import Select from '../../../lib/Select';

const select = () => (
  <Select
    choices={['moo', 'boo']}
    name="zounds"
    defaultValue="boo"
    required
  />
);

export default select;
