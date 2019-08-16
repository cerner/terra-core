import React from 'react';
import Radio from '../../../../Radio';

const radio = () => (
  // TODO: Test this with next release of jsx-a11y, this rule seems to have a bug in the current version
  // eslint-disable-next-line jsx-a11y/aria-proptypes
  <div role="group" aria-labelledby="mainLabel">
    <div id="mainLabel" aria-label="Main Label" />
    <Radio id="first" labelText="First Radio" name="multiple" defaultChecked />
    <Radio id="second" labelText="Second Radio" name="multiple" />
    <Radio id="third" labelText="Third Radio" name="multiple" />
  </div>
);

export default radio;
