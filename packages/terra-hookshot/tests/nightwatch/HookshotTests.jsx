/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const HookshotTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/hookshot-tests/default">Hookshot - Default</Link></li>
      <li><Link to="/tests/hookshot-tests/close-behaviors">Hookshot - Close Behaviors</Link></li>
      <li><Link to="/tests/hookshot-tests/content-attachment-top-left">Hookshot - Attchment Combinations -- ContentAttachment is Top Left</Link></li>
      <li><Link to="/tests/hookshot-tests/content-attachment-top-center">Hookshot - Attchment Combinations -- ContentAttachment is Top Center</Link></li>
      <li><Link to="/tests/hookshot-tests/content-attachment-top-right">Hookshot - Attchment Combinations -- ContentAttachment is Top Right</Link></li>
      <li><Link to="/tests/hookshot-tests/content-attachment-middle-left">Hookshot - Attchment Combinations -- ContentAttachment is Middle Left</Link></li>
      <li><Link to="/tests/hookshot-tests/content-attachment-middle-center">Hookshot - Attchment Combinations -- ContentAttachment is Middle Center</Link></li>
      <li><Link to="/tests/hookshot-tests/content-attachment-middle-right">Hookshot - Attchment Combinations -- ContentAttachment is Middle Right</Link></li>
      <li><Link to="/tests/hookshot-tests/content-attachment-bottom-left">Hookshot - Attchment Combinations -- ContentAttachment is Bottom Left</Link></li>
      <li><Link to="/tests/hookshot-tests/content-attachment-bottom-center">Hookshot - Attchment Combinations -- ContentAttachment is Bottom Center</Link></li>
      <li><Link to="/tests/hookshot-tests/content-attachment-bottom-right">Hookshot - Attchment Combinations -- ContentAttachment is Bottom Right</Link></li>
      <li><Link to="/tests/hookshot-tests/content-offset">Hookshot - Content Offset</Link></li>
      <li><Link to="/tests/hookshot-tests/enabled-behaviors">Hookshot - Enabled Behaviors</Link></li>
      <li><Link to="/tests/hookshot-tests/target-offset">Hookshot - Target Offset</Link></li>
      <li><Link to="/tests/hookshot-tests/attachment-behaviors">Hookshot - All Attachment Behaviors</Link></li>
      <li><Link to="/tests/hookshot-tests/attachment-margin">Hookshot - Attachment Margent</Link></li>
      <li><Link to="/tests/hookshot-tests/bounding-container">Hookshot - Content constrained by bounding container</Link></li>
    </ul>
  </div>
);

export default HookshotTests;
