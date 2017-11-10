/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const FormTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/form-textarea-tests/default">Textarea - Default</Link></li>
      <li><Link to="/tests/form-textarea-tests/populated">Textarea - Populated</Link></li>
      <li><Link to="/tests/form-textarea-tests/auto-resizable">Textarea - AutoResizable</Link></li>
      <li><Link to="/tests/form-textarea-tests/small">Textarea - Small</Link></li>
      <li><Link to="/tests/form-textarea-tests/medium">Textarea - Medium</Link></li>
      <li><Link to="/tests/form-textarea-tests/large">Textarea - Large</Link></li>
      <li><Link to="/tests/form-textarea-tests/full">Textarea - Full</Link></li>
      <li><Link to="/tests/form-textarea-tests/invalid">Textarea - Invalid</Link></li>
      <li><Link to="/tests/form-textarea-tests/rows">Textarea - Manually set rows</Link></li>
      <li><Link to="/tests/form-textarea-tests/mobile-document-touch">Textarea - Mobile (DocumentTouch test)</Link></li>
      <li><Link to="/tests/form-textarea-tests/mobile-ontouchstart">Textarea - Mobile (ontouchstart test)</Link></li>
      <li><Link to="/tests/form-textarea-tests/mobile-max-touch-points">Textarea - Mobile (maxTouchPoints test)</Link></li>
      <li><Link to="/tests/form-textarea-tests/mobile-ms-max-touch-points">Textarea - Mobile (msMaxTouchPoints test)</Link></li>
    </ul>
  </div>
);

export default FormTests;
