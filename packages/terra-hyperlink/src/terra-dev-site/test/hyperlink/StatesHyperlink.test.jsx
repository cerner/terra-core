import React from 'react';
import A from '../../../Hyperlink';

const HyperlinkStates = () => (
  <div role="main" style={{ padding: '0 10px' }} id="link-example">
    <A href="https://my.cerner.com/?">hyperlink</A>
    <br />
    <br />
    <A href="https://my.cerner.com/?" className="is-visited">visited hyperlink</A>
    <br />
    <br />
    <A href="https://my.cerner.com/?" className="is-hovered">hovered hyperlink</A>
    <br />
    <br />
    <A href="https://my.cerner.com/?" className="is-focused">focused hyperlink</A>
    <br />
    <br />
    <A href="https://my.cerner.com/?" className="is-active">active hyperlink</A>
  </div>
);

export default HyperlinkStates;
