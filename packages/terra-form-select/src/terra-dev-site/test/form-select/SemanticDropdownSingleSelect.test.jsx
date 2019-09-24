import React from 'react';
import Select from '../../../Select';

const SemanticDropdownSingleSelect = () => (
  <div>
    <Select placeholder="Select a color" id="default" defaultValue="green" useSemanticDropdown>
      <Select.Option value="blue" display="Blue" />
      <Select.Option value="green" display="Green" />
      <Select.Option value="purple" display="Purple" />
      <Select.Option value="red" display="Red" />
      <Select.Option value="violet" display="Violet" />
    </Select>
    <p>Anim ad nulla est ipsum mollit mollit cillum consectetur.</p>
  </div>
);

export default SemanticDropdownSingleSelect;
