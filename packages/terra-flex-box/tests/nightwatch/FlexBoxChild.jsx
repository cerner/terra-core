import React from 'react';
import FlexBox from '../../lib/FlexBox';

const FlexBoxChild = () => (
  <FlexBox
    id="child"
    order={0}
    flexGrow={0}
    flexShrink={0}
    flexBasis="20%"
    alignSelf="center"
  />
);
export default FlexBoxChild;
