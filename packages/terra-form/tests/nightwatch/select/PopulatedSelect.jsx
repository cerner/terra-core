import React from 'react';

import Select from '../../../lib/Select';

const select = () => (
  <Select
    options={[{ value: 'm', display: 'moo' },
              { value: 'b', display: 'boo' }]}
    name="zounds"
    defaultValue="b"
    required
  />
);

export default select;
