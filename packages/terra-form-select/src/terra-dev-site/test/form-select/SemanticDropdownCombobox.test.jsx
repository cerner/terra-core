import React from 'react';
import Combobox from '../../../Combobox';

const SemanticDropdownCombobox = () => (
  <div>
    <Combobox placeholder="Select a color" id="combobox" useSemanticDropdown>
      <Combobox.Option value="blue" display="Blue" />
      <Combobox.Option value="green" display="Green" />
      <Combobox.Option value="purple" display="Purple" />
      <Combobox.Option value="red" display="Red" />
      <Combobox.Option value="violet" display="Violet" />
    </Combobox>
    <p>Anim ad nulla est ipsum mollit mollit cillum consectetur.</p>
  </div>
);

export default SemanticDropdownCombobox;
