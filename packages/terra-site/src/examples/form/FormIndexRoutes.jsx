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
    <Route path="site/form/field" onEnter={() => window.scrollTo(0, 0)} component={FieldIndex} />
    <Route path="site/form/fieldset" onEnter={() => window.scrollTo(0, 0)} component={FieldsetIndex} />
    <Route path="site/form/input" onEnter={() => window.scrollTo(0, 0)} component={InputIndex} />
    <Route path="site/form/control" onEnter={() => window.scrollTo(0, 0)} component={ControlIndex} />
    <Route path="site/form/number-field" onEnter={() => window.scrollTo(0, 0)} component={NumberFieldIndex} />
    <Route path="site/form/textarea" onEnter={() => window.scrollTo(0, 0)} component={TextareaIndex} />
    <Route path="site/form/textarea-field" onEnter={() => window.scrollTo(0, 0)} component={TextareaFieldIndex} />
    <Route path="site/form/text-field" onEnter={() => window.scrollTo(0, 0)} component={TextFieldIndex} />
    <Route path="site/form/select" onEnter={() => window.scrollTo(0, 0)} component={SelectIndex} />
    <Route path="site/form/select-field" onEnter={() => window.scrollTo(0, 0)} component={SelectFieldIndex} />
  </div>
);

export default routes;
