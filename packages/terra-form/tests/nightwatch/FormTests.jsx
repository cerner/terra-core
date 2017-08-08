/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const FormTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/form-tests/control/default">Default Control</Link></li>
      <li><Link to="/tests/form-tests/control/populated">Populated Control</Link></li>
      <li><Link to="/tests/form-tests/field/default">Default Field</Link></li>
      <li><Link to="/tests/form-tests/field/populated">Populated Field</Link></li>
      <li><Link to="/tests/form-tests/fieldset/default">Default Fieldset</Link></li>
      <li><Link to="/tests/form-tests/fieldset/populated">Populated Fieldset</Link></li>
      <li><Link to="/tests/form-tests/input/default">Default Input</Link></li>
      <li><Link to="/tests/form-tests/input/populated_controlled">Populated Input Controlled</Link></li>
      <li><Link to="/tests/form-tests/input/populated_uncontrolled">Populated Input Uncontrolled</Link></li>
      <li><Link to="/tests/form-tests/number-field/default">Default NumberField</Link></li>
      <li><Link to="/tests/form-tests/number-field/populated">Populated NumberField</Link></li>
      <li><Link to="/tests/form-tests/text-field/default">Default TextField</Link></li>
      <li><Link to="/tests/form-tests/text-field/populated">Populated TextField</Link></li>
      <li><Link to="/tests/form-tests/textarea/default">Default Textarea</Link></li>
      <li><Link to="/tests/form-tests/textarea/populated">Populated Textarea</Link></li>
      <li><Link to="/tests/form-tests/textarea-field/default">Default TextareaField</Link></li>
      <li><Link to="/tests/form-tests/textarea-field/populated">Populated TextareaField</Link></li>
      <li><Link to="/tests/form-tests/select/default">Default Select</Link></li>
      <li><Link to="/tests/form-tests/select/choices_prop">Deprecated Prop Select</Link></li>
      <li><Link to="/tests/form-tests/select/populated">Populated Select</Link></li>
      <li><Link to="/tests/form-tests/select/populated_controlled">Controlled Populated Select</Link></li>
      <li><Link to="/tests/form-tests/select-field/default">Default Select Field</Link></li>
      <li><Link to="/tests/form-tests/select-field/choices_prop">Deprecated Prop Select Field</Link></li>
      <li><Link to="/tests/form-tests/select-field/populated">Populated Select Field</Link></li>
      <li><Link to="/tests/form-tests/select-field/populated_controlled">Controlled Populated Select Field</Link></li>
    </ul>
  </div>
);

export default FormTests;
