import React from 'react';
import Alert from '../../../Alert';

export default () => (
  <div>
    <Alert id="alertAlert" type={Alert.Opts.Types.ALERT}>Alert of type Alert</Alert>
    <br />
    <Alert id="errorAlert" type={Alert.Opts.Types.ERROR}>Alert of type Error</Alert>
    <br />
    <Alert id="warningAlert" type={Alert.Opts.Types.WARNING}>Alert of type Warning</Alert>
    <br />
    <Alert id="advisoryAlert" type={Alert.Opts.Types.ADVISORY}>Alert of type Advisory</Alert>
    <br />
    <Alert id="infoAlert" type={Alert.Opts.Types.INFO}>Alert of type Info</Alert>
    <br />
    <Alert id="successAlert" type={Alert.Opts.Types.SUCCESS}>Alert of type Success</Alert>
  </div>
);
