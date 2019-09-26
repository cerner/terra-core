import React from 'react';
import MultiSelect from '../../../MultiSelect';

const IsTouchAccessibleMultiSelect = () => (
  <div>
    <MultiSelect placeholder="Select a color" id="multiple" isTouchAccessible>
      <MultiSelect.Option value="blue" display="Blue" />
      <MultiSelect.Option value="green" display="Green" />
      <MultiSelect.Option value="purple" display="Purple" />
      <MultiSelect.Option value="red" display="Red" />
      <MultiSelect.Option value="violet" display="Violet" />
    </MultiSelect>
    <p>Anim ad nulla est ipsum mollit mollit cillum consectetur.</p>
  </div>
);

export default IsTouchAccessibleMultiSelect;
