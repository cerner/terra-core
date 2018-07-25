import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import SingleSelectList from 'terra-list/lib/SingleSelectList';

const SingleSelectSections = () => (
  <SingleSelectList hasSections>
    <SingleSelectList.Section
      headerContent="Header 1"
      listItems={[
        <SingleSelectList.Item isSelectable content={<p>test1</p>} key="123" />,
        <SingleSelectList.Item isSelectable content={<p>test2</p>} key="124" />,
        <SingleSelectList.Item isSelectable content={<p>test3</p>} key="125" />,
      ]}
    />
    <SingleSelectList.Section
      headerContent="Header 2"
      listItems={[
        <SingleSelectList.Item isSelectable content={<p>test1</p>} key="126" />,
        <SingleSelectList.Item isSelectable content={<p>test2</p>} key="127" />,
        <SingleSelectList.Item isSelectable content={<p>test3</p>} key="128" />,
      ]}
    />
  </SingleSelectList>
);

export default SingleSelectSections;
