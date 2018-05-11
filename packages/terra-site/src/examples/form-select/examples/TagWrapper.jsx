import React from 'react';
import TagExample from './Tag';

const TagWrapper = () => (
  <div>
    <p>A tag variant allows a user to enter multiple custom free text entries or select from the the dropdown.</p>
    <div style={{ paddingBottom: '15px', width: '300px' }}>
      <TagExample />
    </div>
  </div>
);

export default TagWrapper;
