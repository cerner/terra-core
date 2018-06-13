import React from 'react';
import Hyperlink from '../../../Hyperlink';

const ScaledHyperlink = () => (
  <div role="main" style={{ fontSize: '40px' }} id="link-example">
    <Hyperlink href="https://www.cerner.com" variant="audio">Audio hyperlink</Hyperlink>
    <br />
    <Hyperlink href="https://www.cerner.com" variant="document">Document hyperlink</Hyperlink>
    <br />
    <Hyperlink href="https://www.cerner.com" variant="external">External hyperlink</Hyperlink>
    <br />
    <Hyperlink href="https://www.cerner.com" variant="image">Image hyperlink</Hyperlink>
    <br />
    <Hyperlink href="https://www.cerner.com" variant="video">Video hyperlink</Hyperlink>
  </div>
);

export default ScaledHyperlink;
