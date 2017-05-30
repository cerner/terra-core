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
import PopulatedNumberFieldControlled from './number-field/PopulatedNumberFieldControlled';
import PopulatedNumberFieldUncontrolled from './number-field/PopulatedNumberFieldUncontrolled';
import DefaultTextField from './text-field/DefaultTextField';
import PopulatedTextFieldControlled from './text-field/PopulatedTextFieldControlled';
import PopulatedTextFieldUncontrolled from './text-field/PopulatedTextFieldUncontrolled';
import DefaultTextarea from './textarea/DefaultTextarea';
import PopulatedTextareaUncontrolled from './textarea/PopulatedTextareaUncontrolled';
import PopulatedTextareaControlled from './textarea/PopulatedTextareaControlled';
import DefaultTextareaField from './textarea-field/DefaultTextareaField';
import PopulatedTextareaFieldControlled from './textarea-field/PopulatedTextareaFieldControlled';
import PopulatedTextareaFieldUncontrolled from './textarea-field/PopulatedTextareaFieldUncontrolled';

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
    <Route path="/tests/form-tests/number-field/populated_controlled" component={PopulatedNumberFieldControlled} />
    <Route path="/tests/form-tests/number-field/populated_uncontrolled" component={PopulatedNumberFieldUncontrolled} />
    <Route path="/tests/form-tests/text-field/default" component={DefaultTextField} />
    <Route path="/tests/form-tests/text-field/populated_controlled" component={PopulatedTextFieldControlled} />
    <Route path="/tests/form-tests/text-field/populated_uncontrolled" component={PopulatedTextFieldUncontrolled} />
    <Route path="/tests/form-tests/textarea/default" component={DefaultTextarea} />
    <Route path="/tests/form-tests/textarea/populated_controlled" component={PopulatedTextareaUncontrolled} />
    <Route path="/tests/form-tests/textarea/populated_uncontrolled" component={PopulatedTextareaControlled} />
    <Route path="/tests/form-tests/textarea-field/default" component={DefaultTextareaField} />
    <Route path="/tests/form-tests/textarea-field/populated_controlled" component={PopulatedTextareaFieldControlled} />
    <Route path="/tests/form-tests/textarea-field/populated_uncontrolled" component={PopulatedTextareaFieldUncontrolled} />
  </div>
);

export default routes;
