import React from 'react';
import Base from '../../lib/Base';

const AnchorTests = () => (
  <Base>
    <br />
    <a rel="noreferrer noopener" target="_blank" href="https://my.cerner.com/?">hyperlink</a>
    <br />
    <a rel="noreferrer noopener" target="_blank" href="https://my.cerner.com/?" className="is-visited">visited hyperlink</a>
    <br />
    <a rel="noreferrer noopener" target="_blank" href="https://my.cerner.com/?" className="is-hovered">hovered hyperlink</a>
    <br />
    <a rel="noreferrer noopener" target="_blank" href="https://my.cerner.com/?" className="is-focused">focused hyperlink</a>
    <br />
    <a rel="noreferrer noopener" target="_blank" href="https://my.cerner.com/?" className="is-active">active hyperlink</a>
  </Base>
);

export default AnchorTests;
