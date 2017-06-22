import React from 'react';
import Base from 'terra-base';
import Alert from '../../lib/Alert';
import IconHelp from '../../../terra-icon/lib/icon/IconHelp';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () =>
  <Base locale={locale}>
    <div id="custom1">
      <Alert type={Alert.Types.CUSTOM} >Custom Alert with no icon, title or custom color</Alert>
    </div>
    <br />
    <div id="custom2">
      <Alert type={Alert.Types.CUSTOM} title="Custom_Alert:" >Custom Alert with title but no icon or custom color</Alert>
    </div>
    <br />
    <div id="custom3">
      <Alert type={Alert.Types.CUSTOM} customIcon={<IconHelp height="1.3333rem" width="1.3333rem" />} >Custom Alert with icon but no title or custom color</Alert>
    </div>
    <br />
    <div id="custom4">
      <Alert type={Alert.Types.CUSTOM} customStatusColor="orange" >Custom Alert with custom color but no title or icon</Alert>
    </div>
    <br />
    <div id="custom5">
      <Alert type={Alert.Types.CUSTOM} title="Custom_Alert:" customStatusColor="orange" >Custom Alert with custom color and title but no icon</Alert>
    </div>
    <br />
    <div id="custom6">
      <Alert type={Alert.Types.CUSTOM} title="Custom_Alert:" customIcon={<IconHelp height="1.3333rem" width="1.3333rem" />} >Custom Alert with title and icon but no custom color</Alert>
    </div>
    <br />
    <div id="custom7">
      <Alert type={Alert.Types.CUSTOM} customStatusColor="orange" customIcon={<IconHelp height="1.3333rem" width="1.3333rem" />} >Custom Alert with custom color and icon but no title</Alert>
    </div>
    <br />
    <div id="custom8">
      <Alert type={Alert.Types.CUSTOM} title="Custom_Alert:" customStatusColor="orange" customIcon={<IconHelp height="1.3333rem" width="1.3333rem" />} >Custom Alert with title, custom color and icon</Alert>
    </div>
  </Base>;
