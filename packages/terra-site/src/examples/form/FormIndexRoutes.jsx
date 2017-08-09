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
    <Route path="/site/form/field" component={FieldIndex} />
    <Route path="/site/form/fieldset" component={FieldsetIndex} />
    <Route path="/site/form/input" component={InputIndex} />
    <Route path="/site/form/control" component={ControlIndex} />
    <Route path="/site/form/number-field" component={NumberFieldIndex} />
    <Route path="/site/form/textarea" component={TextareaIndex} />
    <Route path="/site/form/textarea-field" component={TextareaFieldIndex} />
    <Route path="/site/form/text-field" component={TextFieldIndex} />
    <Route path="/site/form/select" component={SelectIndex} />
    <Route path="/site/form/select-field" component={SelectFieldIndex} />
  </div>
);

export default routes;
