/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const InputTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/form-input-tests/default">Default</Link></li>
      <li><Link to="/tests/form-input-tests/invalid">Invalid</Link></li>
      <li><Link to="/tests/form-input-tests/disabled">Disabled</Link></li>
      <li><Link to="/tests/form-input-tests/onChangeInput">On Change</Link></li>
      <li><Link to="/tests/form-input-tests/onBlurInput">On Blur</Link></li>
      <li><Link to="/tests/form-input-tests/onFocusInput">On Focus</Link></li>
      <li><Link to="/tests/form-input-tests/required">Required</Link></li>
      <li><Link to="/tests/form-input-tests/focussed">Focussed</Link></li>
    </ul>
  </div>
);

export default InputTests;
