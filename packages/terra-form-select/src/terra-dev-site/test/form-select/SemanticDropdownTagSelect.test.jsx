import React from 'react';
import TagSelect from '../../../TagSelect';

const SemanticDropdownTagSelect = () => (
  <div>
    <TagSelect placeholder="Select a color" id="tag" useSemanticDropdown>
      <TagSelect.Option value="blue" display="Blue" />
      <TagSelect.Option value="green" display="Green" />
      <TagSelect.Option value="purple" display="Purple" />
      <TagSelect.Option value="red" display="Red" />
      <TagSelect.Option value="violet" display="Violet" />
    </TagSelect>
    <p>Anim ad nulla est ipsum mollit mollit cillum consectetur.</p>
  </div>
);

export default SemanticDropdownTagSelect;
