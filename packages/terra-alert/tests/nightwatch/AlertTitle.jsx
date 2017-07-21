import React from 'react';
import Base from 'terra-base';
import Alert from '../../lib/Alert';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () =>
  <Base locale={locale}>
    <h2>Alerts of the standard types with custom titles</h2>
    <br />
    <Alert id="alertAlert" type={Alert.Opts.Types.ALERT} title="Alert_Alert:" >Alert of type Alert with custom title</Alert>
    <br />
    <Alert id="errorAlert" type={Alert.Opts.Types.ERROR} title="Error_Alert:" >Alert of type Error with custom title</Alert>
    <br />
    <Alert id="warningAlert" type={Alert.Opts.Types.WARNING} title="Warning_Alert:" >Alert of type Warning with custom title</Alert>
    <br />
    <Alert id="advisoryAlert" type={Alert.Opts.Types.ADVISORY} title="Advisory_Alert:" >Alert of type Advisory with custom title</Alert>
    <br />
    <Alert id="infoAlert" type={Alert.Opts.Types.INFO} title="Info_Alert:" >Alert of type Info with custom title</Alert>
    <br />
    <Alert id="successAlert" type={Alert.Opts.Types.SUCCESS} title="Success_Alert:" >Alert of type Success with custom title</Alert>
  </Base>;
