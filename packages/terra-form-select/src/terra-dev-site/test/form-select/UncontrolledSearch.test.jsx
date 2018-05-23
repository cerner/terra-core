import React from 'react';
import Select from '../../../Select';

const UncontrolledSearch = () => (
  <Select placeholder="Select a color" variant="search" id="search">
    <Select.Option value="blue" display="Blue" />
    <Select.Option value="green" display="Green" />
    <Select.Option value="purple" display="Purple" />
    <Select.Option value="red" display="Red" />
    <Select.Option value="violet" display="Violet" />
  </Select>
);

export default UncontrolledSearch;
