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
  />
);
export default FlexBoxParent;
