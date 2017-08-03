/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import FormTests from './FormTests';

import DefaultControl from './control/DefaultControl';
import PopulatedControl from './control/PopulatedControl';
import DefaultField from './field/DefaultField';
import PopulatedField from './field/PopulatedField';
import DefaultFieldset from './fieldset/DefaultFieldset';
import PopulatedFieldset from './fieldset/PopulatedFieldset';
import DefaultInput from './input/DefaultInput';
import PopulatedInput from './input/PopulatedInput';
import DefaultNumberField from './number-field/DefaultNumberField';
import PopulatedNumberField from './number-field/PopulatedNumberField';
import DefaultTextField from './text-field/DefaultTextField';
import PopulatedTextField from './text-field/PopulatedTextField';
import DefaultTextarea from './textarea/DefaultTextarea';
import PopulatedTextarea from './textarea/PopulatedTextarea';
import DefaultTextareaField from './textarea-field/DefaultTextareaField';
import PopulatedTextareaField from './textarea-field/PopulatedTextareaField';
import DefaultSelect from './select/DefaultSelect';
import ChoicesPropSelect from './select/ChoicesPropSelect';
import PopulatedSelect from './select/PopulatedSelect';
import PopulatedSelectControlled from './select/PopulatedSelectControlled';
import DefaultSelectField from './select-field/DefaultSelectField';
import ChoicesPropSelectField from './select-field/ChoicesPropSelectField';
import PopulatedSelectField from './select-field/PopulatedSelectField';
import PopulatedSelectFieldControlled from './select-field/PopulatedSelectFieldControlled';

const routes = (
  <div>
    <Route path="/tests/form-tests" component={FormTests} />
    <Route path="/tests/form-tests/control/default" component={DefaultControl} />
    <Route path="/tests/form-tests/control/populated" component={PopulatedControl} />
    <Route path="/tests/form-tests/field/default" component={DefaultField} />
    <Route path="/tests/form-tests/field/populated" component={PopulatedField} />
    <Route path="/tests/form-tests/fieldset/default" component={DefaultFieldset} />
    <Route path="/tests/form-tests/fieldset/populated" component={PopulatedFieldset} />
    <Route path="/tests/form-tests/input/default" component={DefaultInput} />
    <Route path="/tests/form-tests/input/populated" component={PopulatedInput} />
    <Route path="/tests/form-tests/number-field/default" component={DefaultNumberField} />
    <Route path="/tests/form-tests/number-field/populated" component={PopulatedNumberField} />
    <Route path="/tests/form-tests/text-field/default" component={DefaultTextField} />
    <Route path="/tests/form-tests/text-field/populated" component={PopulatedTextField} />
    <Route path="/tests/form-tests/textarea/default" component={DefaultTextarea} />
    <Route path="/tests/form-tests/textarea/populated" component={PopulatedTextarea} />
    <Route path="/tests/form-tests/textarea-field/default" component={DefaultTextareaField} />
    <Route path="/tests/form-tests/textarea-field/populated" component={PopulatedTextareaField} />
    <Route path="/tests/form-tests/select/default" component={DefaultSelect} />
    <Route path="/tests/form-tests/select/choices_prop" component={ChoicesPropSelect} />
    <Route path="/tests/form-tests/select/populated" component={PopulatedSelect} />
    <Route path="/tests/form-tests/select/populated_controlled" component={PopulatedSelectControlled} />
    <Route path="/tests/form-tests/select-field/default" component={DefaultSelectField} />
    <Route path="/tests/form-tests/select-field/choices_prop" component={ChoicesPropSelectField} />
    <Route path="/tests/form-tests/select-field/populated" component={PopulatedSelectField} />
    <Route path="/tests/form-tests/select-field/populated_controlled" component={PopulatedSelectFieldControlled} />
  </div>
);

export default routes;
