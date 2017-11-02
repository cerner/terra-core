import React from 'react';
import FlexBox from '../../lib/FlexBox';

const FlexBoxChild = () => (
  <FlexBox id="parent" flexDirection="column">
    <FlexBox id="child1" order={2} flexGrow={0} flexShrink={0} flexBasis="auto" alignSelf="flex-end">
      <span>3 Test Display 3</span>
    </FlexBox>
    <FlexBox id="child2" order={1} flexGrow={0} flexShrink={0} flexBasis="auto" alignSelf="center">
      <span>2 Test Display 2</span>
    </FlexBox>
    <FlexBox id="child3" order={0} flexGrow={0} flexShrink={0} flexBasis="auto" alignSelf="flex-start">
      <span>1 Test Display 1</span>
    </FlexBox>
  </FlexBox>
);
export default FlexBoxChild;
