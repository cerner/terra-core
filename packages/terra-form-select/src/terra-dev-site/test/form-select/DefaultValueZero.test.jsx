import React from 'react';
import Select from '../../../Select';

const DefaultValueZero = () => (
  <Select defaultValue={0} id="defaultValueZero">
    <Select.Option value={0} display="0" />
    <Select.Option value={1} display="1" />
    <Select.Option value={2} display="2" />
  </Select>
);

export default DefaultValueZero;
