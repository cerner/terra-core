import React from 'react';
import FlexBox from '../../lib/FlexBox';

const FlexBoxShorthand = () => (
  <FlexBox id="flexflow" flexFlow="column wrap" >
    <FlexBox id="flexprop" flex="1 1 20%">
      <span>1 Test Display 1</span>
    </FlexBox>
  </FlexBox>
);
export default FlexBoxShorthand;
