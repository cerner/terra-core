import React from 'react';
import FlexContainer from 'terra-flex-container';
import Flexbox from 'terra-flex-container'

const FlexContainerExample = () => (
  <div>
    <FlexContainer element="header" className="testing">
      <FlexContainer order="3" flexDirection="column">
        <span>test1</span>
        <span>test2</span>
        <span>test3</span>
        <span>test4</span>
        <span>test5</span>
      </FlexContainer>
      <FlexContainer order="1">
        <span>test6</span>
        <span>test7</span>
        <span>test8</span>
        <span>test9</span>
        <span>test10</span>
      </FlexContainer>
      <FlexContainer order="2" flexDirection="column">
        <span>test11</span>
        <span>test12</span>
        <span>test13</span>
        <span>test14</span>
        <span>test15</span>
      </FlexContainer>
    </FlexContainer>
  </div>);

export default FlexContainerExample;
