import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Checkbox from 'terra-form-checkbox/lib/Checkbox';

const longTextExample = () => (
  <Checkbox
    id="longTextCheckbox"
    labelText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ' +
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
  />
);

export default longTextExample;
