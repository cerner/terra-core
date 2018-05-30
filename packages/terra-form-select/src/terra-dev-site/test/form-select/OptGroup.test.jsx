import React from 'react';
import Select from '../../../Select';

const OptGroupExample = () => (
  <Select placeholder="Select a color" id="opt-group" defaultValue="green">
    <Select.OptGroup label="Colors">
      <Select.Option value="blue" display="Blue" />
      <Select.Option value="green" display="Green" />
      <Select.Option value="purple" display="Purple" />
      <Select.Option value="red" display="Red" />
      <Select.Option value="violet" display="Violet" />
    </Select.OptGroup>
  </Select>
);

export default OptGroupExample;
