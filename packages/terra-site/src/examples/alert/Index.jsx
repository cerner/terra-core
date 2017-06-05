/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-alert/docs/README.md';
import { version } from 'terra-alert/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import AlertSrc from '!raw-loader!terra-alert/src/Alert';
import Alert, { AlertTypes } from 'terra-alert';
import IconHelp from 'terra-icon/lib/icon/IconHelp';
import Button from 'terra-button';

// Example Files
import AlertExample from './AlertExample';
import ErrorExample from './ErrorExample';
import WarningExample from './WarningExample';
import RequiredExample from './RequiredExample';
import AdvisoryExample from './AdvisoryExample';
import InformationExample from './InformationExample';
import ConfirmationExample from './ConfirmationExample';
import CustomExample from './CustomExample';

const actionFunc = () => {
  // eslint-disable-next-line no-alert
  alert('Action performed');
};

const AlertExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={AlertSrc} />
    <h2>Alert Examples</h2>
    <br />
    <AlertExample />
    <hr />
    <ErrorExample />
    <hr />
    <WarningExample />
    <hr />
    <RequiredExample />
    <hr />
    <AdvisoryExample />
    <hr />
    <InformationExample />
    <hr />
    <ConfirmationExample />
    <hr />
    <CustomExample />
    <hr />
    <Alert type={AlertTypes.WARNING} title="Warning!" alertAction={<Button text="Action" size="medium" variant="primary" onClick={actionFunc} />} >
      This is a warning. It is configured with a custom Action button.
    </Alert>
    <hr />
    <Alert type={AlertTypes.REQUIRED} isDismissible >This is a rerquired warning. It is configured to be dismissible.</Alert>
    <hr />
    <Alert type={AlertTypes.ADVISORY} isDismissible alertAction={<Button text="Action" size="medium" variant="primary" onClick={actionFunc} />} >
      This is an advisory. It is configured to be dismissible and with a custom action button.
    </Alert>
    <hr />
    <Alert type={AlertTypes.INFORMATION} isDismissible >This is information. It is configured to be dismissible.</Alert>
    <hr />
    <Alert type={AlertTypes.CONFIRMATION} isDismissible >This is a confirmation. It is configured to be dismissible.</Alert>
  </div>
);

export default AlertExamples;
