import React from 'react';
import Base from 'terra-base';
import Select from '../../lib/Select';

const UncontrolledMultiple = () => (
  <Base locale="en-US">
    <Select placeholder="Select a color" variant="multiple" id="multiple">
      <Select.Option value="blue" display="Blue" />
      <Select.Option value="green" display="Green" />
      <Select.Option value="purple" display="Purple" />
      <Select.Option value="red" display="Red" />
      <Select.Option value="violet" display="Violet" />
    </Select>
  </Base>
);

export default UncontrolledMultiple;
