/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import FormTests from './FormTests';

import DefaultField from './field/DefaultField';
import PopulatedField from './field/PopulatedField';
import DefaultFieldset from './fieldset/DefaultFieldset';
import PopulatedFieldset from './fieldset/PopulatedFieldset';
import DefaultInput from './input/DefaultInput';
import PopulatedInputUncontrolled from './input/PopulatedInputUncontrolled';
import PopulatedInputControlled from './input/PopulatedInputControlled';
import DefaultNumberField from './number-field/DefaultNumberField';
import PopulatedNumberField from './number-field/PopulatedNumberField';
import DefaultTextField from './text-field/DefaultTextField';
import PopulatedTextField from './text-field/PopulatedTextField';
import DefaultTextarea from './textarea/DefaultTextarea';
import PopulatedTextarea from './textarea/PopulatedTextarea';
import DefaultTextareaField from './textarea-field/DefaultTextareaField';
import PopulatedTextareaField from './textarea-field/PopulatedTextareaField';

const routes = (
  <div>
    <Route path="/tests/form-tests" component={FormTests} />
    <Route path="/tests/form-tests/field/default" component={DefaultField} />
    <Route path="/tests/form-tests/field/populated" component={PopulatedField} />
    <Route path="/tests/form-tests/fieldset/default" component={DefaultFieldset} />
    <Route path="/tests/form-tests/fieldset/populated" component={PopulatedFieldset} />
    <Route path="/tests/form-tests/input/default" component={DefaultInput} />
    <Route path="/tests/form-tests/input/populated_controlled" component={PopulatedInputControlled} />
    <Route path="/tests/form-tests/input/populated_uncontrolled" component={PopulatedInputUncontrolled} />
    <Route path="/tests/form-tests/number-field/default" component={DefaultNumberField} />
    <Route path="/tests/form-tests/number-field/populated" component={PopulatedNumberField} />
    <Route path="/tests/form-tests/text-field/default" component={DefaultTextField} />
    <Route path="/tests/form-tests/text-field/populated" component={PopulatedTextField} />
    <Route path="/tests/form-tests/textarea/default" component={DefaultTextarea} />
    <Route path="/tests/form-tests/textarea/populated" component={PopulatedTextarea} />
    <Route path="/tests/form-tests/textarea-field/default" component={DefaultTextareaField} />
    <Route path="/tests/form-tests/textarea-field/populated" component={PopulatedTextareaField} />
  </div>
);

export default routes;
