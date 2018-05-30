import React from 'react';
import Select from '../../../Select';

const UncontrolledTag = () => (
  <Select placeholder="Select a color" variant="tag" id="tag">
    <Select.Option value="blue" display="Blue" />
    <Select.Option value="green" display="Green" />
    <Select.Option value="purple" display="Purple" />
    <Select.Option value="red" display="Red" />
    <Select.Option value="violet" display="Violet" />
  </Select>
);

export default UncontrolledTag;
