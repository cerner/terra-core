/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const HookshotTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/hookshot-tests/default">Hookshot - Default</Link></li>
      <li><Link to="/tests/hookshot-tests/close-behaviors">Hookshot - Close Behaviors</Link></li>
      <li><Link to="/tests/hookshot-tests/content-attachment-top-start">Hookshot - Attchment Combinations -- ContentAttachment is Top Left</Link></li>
      <li><Link to="/tests/hookshot-tests/content-attachment-top-center">Hookshot - Attchment Combinations -- ContentAttachment is Top Center</Link></li>
      <li><Link to="/tests/hookshot-tests/content-attachment-top-end">Hookshot - Attchment Combinations -- ContentAttachment is Top Right</Link></li>
      <li><Link to="/tests/hookshot-tests/content-attachment-middle-start">Hookshot - Attchment Combinations -- ContentAttachment is Middle Left</Link></li>
      <li><Link to="/tests/hookshot-tests/content-attachment-middle-center">Hookshot - Attchment Combinations -- ContentAttachment is Middle Center</Link></li>
      <li><Link to="/tests/hookshot-tests/content-attachment-middle-end">Hookshot - Attchment Combinations -- ContentAttachment is Middle Right</Link></li>
      <li><Link to="/tests/hookshot-tests/content-attachment-bottom-start">Hookshot - Attchment Combinations -- ContentAttachment is Bottom Left</Link></li>
      <li><Link to="/tests/hookshot-tests/content-attachment-bottom-center">Hookshot - Attchment Combinations -- ContentAttachment is Bottom Center</Link></li>
      <li><Link to="/tests/hookshot-tests/content-attachment-bottom-end">Hookshot - Attchment Combinations -- ContentAttachment is Bottom Right</Link></li>
      <li><Link to="/tests/hookshot-tests/content-offset">Hookshot - Content Offset</Link></li>
      <li><Link to="/tests/hookshot-tests/enabled-behaviors">Hookshot - Enabled Behaviors</Link></li>
      <li><Link to="/tests/hookshot-tests/target-offset">Hookshot - Target Offset</Link></li>
      <li><Link to="/tests/hookshot-tests/attachment-behavior-none">Hookshot - Attachment Behavior - None</Link></li>
      <li><Link to="/tests/hookshot-tests/attachment-behavior-flip">Hookshot - Attachment Behavior - Flip</Link></li>
      <li><Link to="/tests/hookshot-tests/attachment-behavior-auto">Hookshot - Attachment Behavior - Auto</Link></li>
      <li><Link to="/tests/hookshot-tests/attachment-margin">Hookshot - Attachment Margin</Link></li>
      <li><Link to="/tests/hookshot-tests/bounding-container">Hookshot - Content constrained by bounding container</Link></li>
    </ul>
  </div>
);

export default HookshotTests;
