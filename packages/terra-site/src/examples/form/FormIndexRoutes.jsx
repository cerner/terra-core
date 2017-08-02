/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';

// Form Component Indexes
import FieldIndex from './components/FieldIndex';
import FieldsetIndex from './components/FieldsetIndex';
import InputIndex from './components/InputIndex';
import ControlIndex from './components/ControlIndex';
import NumberFieldIndex from './components/NumberFieldIndex';
import TextareaIndex from './components/TextareaIndex';
import TextareaFieldIndex from './components/TextareaFieldIndex';
import TextFieldIndex from './components/TextFieldIndex';
import SelectIndex from './components/SelectIndex';
import SelectFieldIndex from './components/SelectFieldIndex';

const routes = (
  <div>
    <Route path="/form/field" component={FieldIndex} />
    <Route path="/form/fieldset" component={FieldsetIndex} />
    <Route path="/form/input" component={InputIndex} />
    <Route path="/form/control" component={ControlIndex} />
    <Route path="/form/number-field" component={NumberFieldIndex} />
    <Route path="/form/textarea" component={TextareaIndex} />
    <Route path="/form/textarea-field" component={TextareaFieldIndex} />
    <Route path="/form/text-field" component={TextFieldIndex} />
    <Route path="/form/select" component={SelectIndex} />
    <Route path="/form/select-field" component={SelectFieldIndex} />
  </div>
);

export default routes;
