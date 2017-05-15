/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import FormTests from './FormTests';

import DefaultField from './components/field/DefaultField';
import PopulatedField from './components/field/PopulatedField';
import DefaultFieldset from './components/fieldset/DefaultFieldset';
import PopulatedFieldset from './components/fieldset/PopulatedFieldset';
import DefaultInput from './components/input/DefaultInput';
import PopulatedInputUncontrolled from './components/input/PopulatedInputUncontrolled';
import PopulatedInputControlled from './components/input/PopulatedInputControlled';

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
  </div>
);

export default routes;
