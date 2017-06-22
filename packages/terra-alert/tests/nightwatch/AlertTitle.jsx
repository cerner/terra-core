import React from 'react';
import Base from 'terra-base';
import Alert from '../../lib/Alert';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () =>
  <Base locale={locale}>
    <Alert type={Alert.Types.ALERT} title="Alert_Alert:" >Alert of type Alert with custom title</Alert>
    <br />
    <Alert type={Alert.Types.ERROR} title="Error_Alert:" >Alert of type Error with custom title</Alert>
    <br />
    <Alert type={Alert.Types.WARNING} title="Warning_Alert:" >Alert of type Warning with custom title</Alert>
    <br />
    <Alert type={Alert.Types.ADVISORY} title="Advisory_Alert:" >Alert of type Advisory with custom title</Alert>
    <br />
    <Alert type={Alert.Types.INFO} title="Info_Alert:" >Alert of type Info with custom title</Alert>
    <br />
    <Alert type={Alert.Types.SUCCESS} title="Success_Alert:" >Alert of type Success with custom title</Alert>
    <br />
    <Alert type={Alert.Types.GAP_CHECKING} title="Gap_Checking_Alert:" >Alert of type Gap Checking with custom title</Alert>
    <br />
    <Alert type={Alert.Types.OUTSIDE_RECORDS} title="Outside_Records_Alert:" >Alert of type Outside Records with custom title</Alert>
  </Base>;
