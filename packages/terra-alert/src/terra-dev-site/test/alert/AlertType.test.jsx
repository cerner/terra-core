import React from 'react';
import Alert from '../../../Alert';

export default () => (
  <div>
    <Alert id="alertAlert" type={Alert.Opts.Types.ALERT}>Alert of type alert</Alert>
    <Alert id="errorAlert" type={Alert.Opts.Types.ERROR}>Alert of type error</Alert>
    <Alert id="warningAlert" type={Alert.Opts.Types.WARNING}>Alert of type Warning</Alert>
    <Alert id="unsatisfiedAlert" type={Alert.Opts.Types.UNSATISFIED}>Alert of type unsatisfied</Alert>
    <Alert id="unverifiedAlert" type={Alert.Opts.Types.UNVERIFIED}>Alert of type unverified</Alert>
    <Alert id="advisoryAlert" type={Alert.Opts.Types.ADVISORY}>Alert of type advisory</Alert>
    <Alert id="infoAlert" type={Alert.Opts.Types.INFO}>Alert of type info</Alert>
    <Alert id="successAlert" type={Alert.Opts.Types.SUCCESS}>Alert of type success</Alert>
  </div>
);
