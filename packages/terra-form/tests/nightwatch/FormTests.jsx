/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const FormTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/form-tests/field/default">Default Field</Link></li>
      <li><Link to="/tests/form-tests/field/populated">Populated Field</Link></li>
      <li><Link to="/tests/form-tests/fieldset/default">Default Fieldset</Link></li>
      <li><Link to="/tests/form-tests/fieldset/populated">Populated Fieldset</Link></li>
      <li><Link to="/tests/form-tests/input/default">Default Input</Link></li>
      <li><Link to="/tests/form-tests/input/populated_controlled">Populated Input Controlled</Link></li>
      <li><Link to="/tests/form-tests/input/populated_uncontrolled">Populated Input Uncontrolled</Link></li>
      <li><Link to="/tests/form-tests/number-field/default">Default NumberField</Link></li>
      <li><Link to="/tests/form-tests/number-field/populated_controlled">Populated NumberField Controlled</Link></li>
      <li><Link to="/tests/form-tests/number-field/populated_uncontrolled">Populated NumberField Uncontrolled</Link></li>
      <li><Link to="/tests/form-tests/text-field/default">Default TextField</Link></li>
      <li><Link to="/tests/form-tests/text-field/populated_controlled">Populated TextField Controlled</Link></li>
      <li><Link to="/tests/form-tests/text-field/populated_uncontrolled">Populated TextField Uncontrolled</Link></li>
      <li><Link to="/tests/form-tests/textarea/default">Default Textarea</Link></li>
      <li><Link to="/tests/form-tests/textarea/populated_controlled">Populated Textarea Controlled</Link></li>
      <li><Link to="/tests/form-tests/textarea/populated_uncontrolled">Populated Textarea Uncontrolled</Link></li>
      <li><Link to="/tests/form-tests/textarea-field/default">Default TextareaField</Link></li>
      <li><Link to="/tests/form-tests/textarea-field/populated_controlled">Populated TextareaField Controlled</Link></li>
      <li><Link to="/tests/form-tests/textarea-field/populated_uncontrolled">Populated TextareaField Uncontrolled</Link></li>
    </ul>
  </div>
);

export default FormTests;
