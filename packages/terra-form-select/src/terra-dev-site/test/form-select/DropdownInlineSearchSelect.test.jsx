import React from 'react';
import Select from '../../../Select';

const DropdownInlineSearchSelect = () => (
  <div>
    <Select placeholder="Select a color" id="search" variant="search" isDropdownInline>
      <Select.Option value="blue" display="Blue" />
      <Select.Option value="green" display="Green" />
      <Select.Option value="purple" display="Purple" />
      <Select.Option value="red" display="Red" />
      <Select.Option value="violet" display="Violet" />
    </Select>
    <p>Anim ad nulla est ipsum mollit mollit cillum consectetur.</p>
  </div>
);

export default DropdownInlineSearchSelect;
