import React from 'react';
import OverlayContainer from '../../../../OverlayContainer';
import Overlay from '../../../../Overlay';

const OverlayExample = () => (
  <OverlayContainer style={{ height: '100px', width: '100%' }} id="overlay-container">
    <Overlay isOpen isRelativeToContainer isScrollable>
      <p>I</p>
      <p>am</p>
      <p>some</p>
      <p>very</p>
      <p>tall</p>
      <p>content</p>
      <p>in</p>
      <p>the</p>
      <p>overlay</p>
      <p>to</p>
      <p>prove</p>
      <p>that</p>
      <p>isScrollable</p>
      <p>works.</p>
    </Overlay>
  </OverlayContainer>
);

export default OverlayExample;
