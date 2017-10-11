import React from 'react';
import HookshotTemplate from '../HookshotTestTemplate';

const NoCloseBehavior = () => (
  <HookshotTemplate
    id="NoCloseBehavior"
    hookshotContentProps={{ closeOnEsc: false, closeOnOutsideClick: false, closeOnResize: false }}
  />
);

const EcsBehavior = () => (
  <HookshotTemplate
    id="EcsBehavior"
    hookshotContentProps={{ closeOnEsc: true, closeOnOutsideClick: false, closeOnResize: false }}
  />
);

const OutsideClickBehavior = () => (
  <HookshotTemplate
    id="OutsideClickBehavior"
    hookshotContentProps={{ closeOnEsc: false, closeOnOutsideClick: true, closeOnResize: false }}
  />
);

const ResizeBehavior = () => (
  <HookshotTemplate
    id="ResizeBehavior"
    hookshotContentProps={{ closeOnEsc: false, closeOnOutsideClick: false, closeOnResize: true }}
  />
);

const AllBehavior = () => (
  <HookshotTemplate
    id="AllBehavior"
    hookshotContentProps={{ closeOnEsc: true, closeOnOutsideClick: true, closeOnResize: true }}
  />
);

const HookshotExample = () => (
  <div>
    <p>All Close Behavior</p>
    <AllBehavior />
    <p>Close on ESC Behavior</p>
    <EcsBehavior />
    <p>Close on Outside Click Behavior</p>
    <OutsideClickBehavior />
    <p>Close on Resize Behavior</p>
    <ResizeBehavior />
    <p>No Close Behavior - Once opened, content stays on the screen when scrolling occurs.</p>
    <NoCloseBehavior />
  </div>
);

export default HookshotExample;
