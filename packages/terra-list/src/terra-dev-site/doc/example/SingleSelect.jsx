import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import SingleSelectList from 'terra-list/lib/SingleSelectList';

const SingleSelectExamples = () => (
  <div>
    <h2>Example</h2>
    <SingleSelectList hasChevrons isDivided>
      <SingleSelectList.Item content={<span>test</span>} key="123" />
      <SingleSelectList.Item content={<span>test</span>} key="124" />
      <SingleSelectList.Item content={<span>test</span>} key="125" />
    </SingleSelectList>
  </div>
);

export default SingleSelectExamples;
