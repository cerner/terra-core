/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const ImageTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/image-tests/default">Default Image</Link></li>
      <li><Link to="/tests/image-tests/non-fluid">Non-fluid Image</Link></li>
      <li><Link to="/tests/image-tests/fluid">Fluid Image</Link></li>
      <li><Link to="/tests/image-tests/loading">Loading Image</Link></li>
    </ul>
  </div>
);

export default ImageTests;
