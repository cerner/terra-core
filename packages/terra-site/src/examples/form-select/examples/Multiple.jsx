import React from 'react';
import Select from 'terra-form-select';

const MultipleExample = () => (
  <Select placeholder="Select a color" variant="multiple" style={{ width: '300px' }}>
    <Select.Option value="blue" display="Blue" />
    <Select.Option value="green" display="Green" />
    <Select.Option value="purple" display="Purple" />
    <Select.Option value="red" display="Red" />
    <Select.Option value="violet" display="Violet" />
  </Select>
);

export default MultipleExample;
