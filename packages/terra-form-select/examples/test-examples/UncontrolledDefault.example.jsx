import React from 'react';
import Select from '../../lib/Select';

const UncontrolledDefault = () => (
  <Select placeholder="Select a color" id="default" defaultValue="green">
    <Select.Option value="blue" display="Blue" />
    <Select.Option value="green" display="Green" />
    <Select.Option value="purple" display="Purple" />
    <Select.Option value="red" display="Red" />
    <Select.Option value="violet" display="Violet" />
  </Select>
);

export default UncontrolledDefault;
