import React from 'react';
import SearchSelect from '../../../SearchSelect';

const SemanticDropdownSearchSelect = () => (
  <div>
    <SearchSelect placeholder="Select a color" id="search" useSemanticDropdown>
      <SearchSelect.Option value="blue" display="Blue" />
      <SearchSelect.Option value="green" display="Green" />
      <SearchSelect.Option value="purple" display="Purple" />
      <SearchSelect.Option value="red" display="Red" />
      <SearchSelect.Option value="violet" display="Violet" />
    </SearchSelect>
    <p>Anim ad nulla est ipsum mollit mollit cillum consectetur.</p>
  </div>
);

export default SemanticDropdownSearchSelect;
