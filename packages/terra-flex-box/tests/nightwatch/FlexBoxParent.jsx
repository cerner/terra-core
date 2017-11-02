import React from 'react';
import FlexBox from '../../lib/FlexBox';

const FlexBoxParent = () => (
  <FlexBox
    id="parent"
    element="header"
    display="inline-flex"
    flexDirection="column"
    flexWrap="wrap"
    justifyContent="center"
    alignItems="stretch"
    alignContent="flex-start"
  >
    <span>1 Test Display 1</span>
    <span>2 Test Display 2</span>
    <span>3 Test Display 3</span>
  </FlexBox>
);
export default FlexBoxParent;
