import React from 'react';
import Alert from '../../../Alert';

export default () => (
  <div>
    <Alert id="alertAlert" type="alert" title="Alert_Alert:">Alert of type Alert with custom title</Alert>
    <Alert id="errorAlert" type="error" title="Error_Alert:">Alert of type Error with custom title</Alert>
    <Alert id="warningAlert" type="warning" title="Warning_Alert:">Alert of type Warning with custom title</Alert>
    <Alert id="advisoryAlert" type="advisory" title="Advisory_Alert:">Alert of type Advisory with custom title</Alert>
    <Alert id="infoAlert" type="info" title="Info_Alert:">Alert of type Info with custom title</Alert>
    <Alert id="successAlert" type="success" title="Success_Alert:">Alert of type Success with custom title</Alert>
  </div>
);
