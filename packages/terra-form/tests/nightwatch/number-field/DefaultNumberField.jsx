import React from 'react';
import Base from 'terra-base';
import NumberField from '../../../lib/NumberField';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const numberField = () => (
  <Base locale={locale}>
    <NumberField id="default-number-field" />
  </Base>
);

export default numberField;
