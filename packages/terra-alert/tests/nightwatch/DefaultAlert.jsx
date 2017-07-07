import React from 'react';
import Base from 'terra-base';
import Alert from '../../lib/Alert';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () =>
  <Base locale={locale}>
    <h2>Alert with no props defaults to type alert - text content provided</h2>
    <br />
    <Alert id="defaultAlert" >Default Alert</Alert>
  </Base>;
