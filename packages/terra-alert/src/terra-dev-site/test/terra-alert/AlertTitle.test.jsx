import React from 'react';
import Base from 'terra-base';
import Alert from '../../../Alert';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () =>
  <Base locale={locale}>
    <Alert id="alertAlert" type="alert" title="Alert_Alert:" >Alert of type Alert with custom title</Alert>
    <br />
    <Alert id="errorAlert" type="error" title="Error_Alert:" >Alert of type Error with custom title</Alert>
    <br />
    <Alert id="warningAlert" type="warning" title="Warning_Alert:" >Alert of type Warning with custom title</Alert>
    <br />
    <Alert id="advisoryAlert" type="advisory" title="Advisory_Alert:" >Alert of type Advisory with custom title</Alert>
    <br />
    <Alert id="infoAlert" type="info" title="Info_Alert:" >Alert of type Info with custom title</Alert>
    <br />
    <Alert id="successAlert" type="success" title="Success_Alert:" >Alert of type Success with custom title</Alert>
  </Base>;
