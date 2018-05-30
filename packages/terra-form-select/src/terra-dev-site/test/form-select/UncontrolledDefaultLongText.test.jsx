import React from 'react';
import Select from '../../../Select';

const UncontrolledDefault = () => (
  <Select placeholder="Select a color" id="default" defaultValue="lorem">
    <Select.Option value="lorem" display="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" />
    <Select.Option value="blue" display="Blue" />
    <Select.Option value="purple" display="Purple" />
    <Select.Option value="red" display="Red" />
    <Select.Option value="violet" display="Violet" />
  </Select>
);

export default UncontrolledDefault;
