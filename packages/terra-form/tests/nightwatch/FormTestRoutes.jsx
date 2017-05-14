/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import FormTests from './FormTests';

import DefaultChoiceField from './components/choice-field/DefaultChoiceField';
import PopulatedChoiceField from './components/choice-field/PopulatedChoiceField';
import DefaultControl from './components/control/DefaultControl';
import PopulatedControl from './components/control/PopulatedControl';
import DefaultField from './components/field/DefaultField';
import PopulatedField from './components/field/PopulatedField';
import DefaultInput from './components/input/DefaultInput';
import PopulatedInput from './components/input/PopulatedInput';
import DefaultMultiChoiceField from './components/multi-choice-field/DefaultMultiChoiceField';
import PopulatedMultiChoiceField from './components/multi-choice-field/PopulatedMultiChoiceField';
import DefaultNumberField from './components/number-field/DefaultNumberField';
import PopulatedNumberField from './components/number-field/PopulatedNumberField';
import DefaultRadioGroup from './components/radio-group/DefaultRadioGroup';
import PopulatedRadioGroup from './components/radio-group/PopulatedRadioGroup';
import DefaultTextField from './components/text-field/DefaultTextField';
import PopulatedTextField from './components/text-field/PopulatedTextField';
import DefaultTextarea from './components/textarea/DefaultTextarea';
import PopulatedTextarea from './components/textarea/PopulatedTextarea';
import DefaultTextareaField from './components/textarea-field/DefaultTextareaField';
import PopulatedTextareaField from './components/textarea-field/PopulatedTextareaField';

const routes = (
  <div>
    <Route path="/tests/form-tests" component={FormTests} />
    <Route path="/tests/form-tests/choice-field/default" component={DefaultChoiceField} />
    <Route path="/tests/form-tests/choice-field/populated" component={PopulatedChoiceField} />
    <Route path="/tests/form-tests/control/default" component={DefaultControl} />
    <Route path="/tests/form-tests/control/populated" component={PopulatedControl} />
    <Route path="/tests/form-tests/field/default" component={DefaultField} />
    <Route path="/tests/form-tests/field/populated" component={PopulatedField} />
    <Route path="/tests/form-tests/input/default" component={DefaultInput} />
    <Route path="/tests/form-tests/input/populated" component={PopulatedInput} />
    <Route path="/tests/form-tests/multi-choice-field/default" component={DefaultMultiChoiceField} />
    <Route path="/tests/form-tests/multi-choice-field/populated" component={PopulatedMultiChoiceField} />
    <Route path="/tests/form-tests/number-field/default" component={DefaultNumberField} />
    <Route path="/tests/form-tests/number-field/populated" component={PopulatedNumberField} />
    <Route path="/tests/form-tests/radio-group/default" component={DefaultRadioGroup} />
    <Route path="/tests/form-tests/radio-group/populated" component={PopulatedRadioGroup} />
    <Route path="/tests/form-tests/text-field/default" component={DefaultTextField} />
    <Route path="/tests/form-tests/text-field/populated" component={PopulatedTextField} />
    <Route path="/tests/form-tests/textarea/default" component={DefaultTextarea} />
    <Route path="/tests/form-tests/textarea/populated" component={PopulatedTextarea} />
    <Route path="/tests/form-tests/textarea-field/default" component={DefaultTextareaField} />
    <Route path="/tests/form-tests/textarea-field/populated" component={PopulatedTextareaField} />
  </div>
);

export default routes;
