import React, { useState } from 'react';
import TagList from '../../../../../../terra-tag-list/src/TagList';
import Tag from '../../../../../../terra-tag-list/src/subcomponents/Tag';

const TagListExample = () => {
  return (
    <div>
        <h1>Tag List Example</h1>
        <TagList ariaLabel="It is incorrect to remove the parent FilterPills">
            <Tag text="Test Tag 1" onClick={() => window.alert('Tag1 has been clicked!')} id={"Tag1"}/>
            <Tag text="Test Tag 2" onClick={() => window.alert('Tag2 has been clicked!')} id={"Tag2"}/>
            <Tag text="Test Tag 3" onClick={() => window.alert('Tag3 has been clicked!')} id={"Tag3"}/>
            <Tag text="Test Tag 4" onClick={() => window.alert('Tag4 has been clicked!')} id={"Tag4"}/>
        </TagList>
        <TagList ariaLabel="It is incorrect to remove the parent FilterPills">
            <Tag text="Test Tag 1" onClick={() => window.alert('Tag1 has been clicked!')} id={"Tag1"}/>
            <Tag text="Test Tag 2" onClick={() => window.alert('Tag2 has been clicked!')} id={"Tag2"}/>
            <Tag text="Test Tag 3" onClick={() => window.alert('Tag3 has been clicked!')} id={"Tag3"}/>
            <Tag text="Test Tag 4" onClick={() => window.alert('Tag4 has been clicked!')} id={"Tag4"}/>
        </TagList>
    </div>
  );
};

export default TagListExample;
