import React from 'react';
import Select from 'terra-form-select';

const OptGroupExample = () => (
  <Select placeholder="Select a color" dropdownAttrs={{ style: { maxHeight: '300px' } }} style={{ width: '300px' }}>
    <Select.OptGroup label="Shade of blue">
      <Select.Option value="blue" display="Blue" />
      <Select.Option value="cyan" display="Cyan" />
      <Select.Option value="teal" display="Teal" />
      <Select.Option value="azul" display="Azul" />
      <Select.Option value="aqua" display="Aqua" />
    </Select.OptGroup>
    <Select.OptGroup label="Shades of green">
      <Select.Option value="green" display="Green" />
      <Select.Option value="forest" display="Forest Green" />
      <Select.Option value="dark" display="Dark Green" />
      <Select.Option value="neon" display="Neon Green" />
    </Select.OptGroup>
    <Select.OptGroup label="Other colors">
      <Select.Option value="purple" display="Purple" />
      <Select.Option value="red" display="Red" />
      <Select.Option value="violet" display="Violet" />
    </Select.OptGroup>
  </Select>
);

export default OptGroupExample;
