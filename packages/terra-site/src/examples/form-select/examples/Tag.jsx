import React from 'react';
import Select from 'terra-form-select';

const TagExample = () => (
  <Select placeholder="Select a color" variant="tag" style={{ width: '300px' }}>
    <Select.Option value="blue" display="Blue" />
    <Select.Option value="green" display="Green" />
    <Select.Option value="purple" display="Purple" />
    <Select.Option value="red" display="Red" />
    <Select.Option value="violet" display="Violet" />
  </Select>
);

export default TagExample;
