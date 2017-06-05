/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-alert/docs/README.md';
import { version } from 'terra-alert/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import AlertSrc from '!raw-loader!terra-alert/src/Alert';
import IconHelp from 'terra-icon/lib/icon/IconHelp';

// Example Files
import AlertExample from './AlertExample';
import ErrorExample from './ErrorExample';
import WarningExample from './WarningExample';
import RequiredExample from './RequiredExample';
import AdvisoryExample from './AdvisoryExample';
import InformationExample from './InformationExample';
import ConfirmationExample from './ConfirmationExample';
import CustomExample from './CustomExample';
import LongTextExample from './LongTextExample';
import ActionExample from './ActionExample';
import DismissibleExample from './DismissibleExample';
import ActionAndDismissibleExample from './ActionAndDismissibleExample';

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
    <LongTextExample />
    <hr />
    <ActionExample />
    <hr />
    <DismissibleExample />
    <hr />
    <ActionAndDismissibleExample />
    <hr />
    <IconHelp height="1.3333rem" width="1.3333rem" />
  </div>
);

export default AlertExamples;
