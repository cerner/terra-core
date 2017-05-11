/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const FormTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/form-tests/choice-field/default">Default Choice Field</Link></li>
      <li><Link to="/tests/form-tests/choice-field/populated">Populated Choice Field</Link></li>
      <li><Link to="/tests/form-tests/control/default">Default Control Field</Link></li>
      <li><Link to="/tests/form-tests/control/populated">Populated Control Field</Link></li>
      <li><Link to="/tests/form-tests/field/default">Default Field</Link></li>
      <li><Link to="/tests/form-tests/field/populated">Populated Field</Link></li>
      <li><Link to="/tests/form-tests/input/default">Default Input</Link></li>
      <li><Link to="/tests/form-tests/input/populated">Populated Input</Link></li>
      <li><Link to="/tests/form-tests/multi-choice-field/default">Multi Choice Field</Link></li>
      <li><Link to="/tests/form-tests/multi-choice-field/populated">Populated Multi Choice Field</Link></li>
      <li><Link to="/tests/form-tests/number-field/default">Default Number Field</Link></li>
      <li><Link to="/tests/form-tests/number-field/populated">Populated Number Field</Link></li>
      <li><Link to="/tests/form-tests/textarea/default">Default Textarea</Link></li>
      <li><Link to="/tests/form-tests/textarea/populated">Populated Textarea</Link></li>
      <li><Link to="/tests/form-tests/textarea-field/default">Default Textarea Field</Link></li>
      <li><Link to="/tests/form-tests/textarea-field/populated">Populated Textarea Field</Link></li>
      <li><Link to="/tests/form-tests/text-field/default">Default TextField</Link></li>
      <li><Link to="/tests/form-tests/text-field/populated">Populated TextField</Link></li>
    </ul>
  </div>
);

export default FormTests;
