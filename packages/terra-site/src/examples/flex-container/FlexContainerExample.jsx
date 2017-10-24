import React from 'react';
import FlexContainer from 'terra-flex-container';

const FlexContainerExample = () => (
  <div>
    <FlexContainer>
      <FlexContainer.FlexItem content={<span>test</span>} key="123" />
      <FlexContainer.FlexItem content={<span>test</span>} key="124" />
      <FlexContainer.FlexItem content={<span>test</span>} key="125" />
    </FlexContainer>
  </div>);

export default FlexContainerExample;
