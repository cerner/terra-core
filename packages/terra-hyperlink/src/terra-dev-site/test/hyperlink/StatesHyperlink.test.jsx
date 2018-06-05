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
    <br />
    <br />
    <A href="https://my.cerner.com/?" variant="document">icon hyperlink</A>
    <br />
    <br />
    <A href="https://my.cerner.com/?" className="is-visited" variant="document">icon visited hyperlink</A>
    <br />
    <br />
    <A href="https://my.cerner.com/?" className="is-hovered" variant="document">icon hovered hyperlink</A>
    <br />
    <br />
    <A href="https://my.cerner.com/?" className="is-focused" variant="document">icon focused hyperlink</A>
    <br />
    <br />
    <A href="https://my.cerner.com/?" className="is-active" variant="document">icon active hyperlink</A>
  </div>
);

export default HyperlinkStates;
