/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const FormTests = () => (
  <div>
    <ul>
      <li>Control Tests</li>
      <ul>
        <li><Link to="/tests/form-tests/control/default">Default Control</Link></li>
        <li><Link to="/tests/form-tests/control/populated">Populated Control</Link></li>
      </ul>
      <li>Field Tests</li>
      <ul>
        <li><Link to="/tests/form-tests/field/combinations">Field - Field Combinations</Link></li>
        <li><Link to="/tests/form-tests/field/in-error">Field - Interactive In Error</Link></li>
        <li><Link to="/tests/form-tests/field/inline">Field - Inline</Link></li>
        <li><Link to="/tests/form-tests/field/text-wrap">Field - Text Wrap</Link></li>
      </ul>
      <li>Fieldset Tests</li>
      <ul>
        <li><Link to="/tests/form-tests/fieldset/default">Default Fieldset</Link></li>
        <li><Link to="/tests/form-tests/fieldset/populated">Populated Fieldset</Link></li>
      </ul>
      <li>Input Tests</li>
      <ul>
        <li><Link to="/tests/form-tests/input/default">Default Input</Link></li>
        <li><Link to="/tests/form-tests/input/populated_controlled">Populated Input Controlled</Link></li>
        <li><Link to="/tests/form-tests/input/populated_uncontrolled">Populated Input Uncontrolled</Link></li>
      </ul>
      <li>NumberField Tests</li>
      <ul>
        <li><Link to="/tests/form-tests/number-field/default">Default NumberField</Link></li>
        <li><Link to="/tests/form-tests/number-field/populated">Populated NumberField</Link></li>
      </ul>
      <li>TextFeild Tests</li>
      <ul>
        <li><Link to="/tests/form-tests/text-field/default">Default TextField</Link></li>
        <li><Link to="/tests/form-tests/text-field/populated">Populated TextField</Link></li>
      </ul>
      <li>Textarea Tests</li>
      <ul>
        <li><Link to="/tests/form-tests/textarea/default">Default Textarea</Link></li>
        <li><Link to="/tests/form-tests/textarea/populated">Populated Textarea</Link></li>
      </ul>
      <li>Textarea Field Tests</li>
      <ul>
        <li><Link to="/tests/form-tests/textarea-field/default">Default TextareaField</Link></li>
        <li><Link to="/tests/form-tests/textarea-field/populated">Populated TextareaField</Link></li>
      </ul>
      <li>Select Tests</li>
      <ul>
        <li><Link to="/tests/form-tests/select/default">Default Select</Link></li>
        <li><Link to="/tests/form-tests/select/choices_prop">Deprecated Prop Select</Link></li>
        <li><Link to="/tests/form-tests/select/populated">Populated Select</Link></li>
        <li><Link to="/tests/form-tests/select/populated_controlled">Controlled Populated Select</Link></li>
      </ul>
      <li>Select Field Tests</li>
      <ul>
        <li><Link to="/tests/form-tests/select-field/default">Default Select Field</Link></li>
        <li><Link to="/tests/form-tests/select-field/choices_prop">Deprecated Prop Select Field</Link></li>
        <li><Link to="/tests/form-tests/select-field/populated">Populated Select Field</Link></li>
        <li><Link to="/tests/form-tests/select-field/populated_controlled">Controlled Populated Select Field</Link></li>
      </ul>
    </ul>
  </div>
);

export default FormTests;
