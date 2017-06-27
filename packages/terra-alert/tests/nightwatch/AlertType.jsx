import React from 'react';
import Base from 'terra-base';
import Alert from '../../lib/Alert';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () =>
  <Base locale={locale}>
    <h2>Alerts of each of the standard types with default titles</h2>
    <br />
    <Alert type={Alert.Types.ALERT} >Alert of type Alert</Alert>
    <br />
    <Alert type={Alert.Types.ERROR} >Alert of type Error</Alert>
    <br />
    <Alert type={Alert.Types.WARNING} >Alert of type Warning</Alert>
    <br />
    <Alert type={Alert.Types.ADVISORY} >Alert of type Advisory</Alert>
    <br />
    <Alert type={Alert.Types.INFO} >Alert of type Info</Alert>
    <br />
    <Alert type={Alert.Types.SUCCESS} >Alert of type Success</Alert>
    <br />
    <Alert type={Alert.Types.GAP_CHECKING} >Alert of type Gap Checking</Alert>
    <br />
    <Alert type={Alert.Types.OUTSIDE_RECORDS} >Alert of type Outside Records</Alert>
  </Base>;
