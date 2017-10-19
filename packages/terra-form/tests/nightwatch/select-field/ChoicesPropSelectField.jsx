import React from 'react';
import Base from 'terra-base';
import SelectField from '../../../lib/SelectField';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const selectfield = () => (
  <Base locale={locale}>
    <SelectField id="prop-select-field" choices={['moo']} />
  </Base>
);

export default selectfield;
