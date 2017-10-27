import React from 'react';
import Base from 'terra-base';
import SelectField from '../../../lib/SelectField';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const selectfield = () => (
  <Base locale={locale}>
    <SelectField id="default-select-field" options={[{ value: 'm', display: 'moo' }]} />
  </Base>
);

export default selectfield;
