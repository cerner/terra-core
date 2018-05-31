import React from 'react';
import A from '../../../Hyperlink';

const ScaledHyperlink = () => (
  <div style={{ fontSize: '40px' }}>
    <A href="https://www.cerner.com" variant="audio">Audio hyperlink</A>
    <br />
    <A href="https://www.cerner.com" variant="document">Document hyperlink</A>
    <br />
    <A href="https://www.cerner.com" variant="external">External hyperlink</A>
    <br />
    <A href="https://www.cerner.com" variant="image">Image hyperlink</A>
    <br />
    <A href="https://www.cerner.com" variant="video">Video hyperlink</A>
  </div>
);

export default ScaledHyperlink;
