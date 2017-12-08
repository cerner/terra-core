import React from 'react';
import Base from 'terra-base';
import Alert from '../../lib/Alert';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

console.log('Alert with no props defaults to type alert - text content provided');
export default () =>
  <Base locale={locale}>
    <Alert id="defaultAlert" >Default Alert</Alert>
  </Base>;
