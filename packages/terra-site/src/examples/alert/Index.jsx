/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-alert/docs/README.md';
import { name } from 'terra-alert/package.json';

// Component Source
import AlertSrc from '!raw-loader!terra-alert/src/Alert';

// Example Files
import AlertExample from './AlertExample';
import ErrorExample from './ErrorExample';
import WarningExample from './WarningExample';
import AdvisoryExample from './AdvisoryExample';
import InfoExample from './InfoExample';
import SuccessExample from './SuccessExample';
import CustomExample from './CustomExample';
import LongTextExample from './LongTextExample';
import ActionExample from './ActionExample';
import SmallContainerExample from './SmallContainerExample';
import DismissibleExample from './DismissibleExample';
import ActionAndDismissibleExample from './ActionAndDismissibleExample';
import BuildYourOwnAlertExample from './BuildYourOwnAlertExample';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Alert',
        example: <AlertExample />,
      },
      {
        title: 'Error Alert',
        example: <ErrorExample />,
      },
      {
        title: 'Warning Alert',
        example: <WarningExample />,
      },
      {
        title: 'Advisory Alert',
        example: <AdvisoryExample />,
      },
      {
        title: 'Information Alert',
        example: <InfoExample />,
      },
      {
        title: 'Success Alert',
        example: <SuccessExample />,
      },
      {
        title: 'Custom Alert',
        example: <CustomExample />,
      },
      {
        title: 'Long Text Alert',
        example: <LongTextExample />,
      },
      {
        title: 'Alert with Action',
        example: <ActionExample />,
      },
      {
        title: 'Alert in Small Container',
        example: <SmallContainerExample />,
      },
      {
        title: 'Dismissible Alert',
        example: <DismissibleExample />,
      },
      {
        title: 'Dismissible Alert with Actions',
        example: <ActionAndDismissibleExample />,
      },
      {
        title: 'Build ',
        example: <BuildYourOwnAlertExample />,
      },
    ]}
    propsTables={[
      {
        componentName: 'Alert',
        componentSrc: AlertSrc,
      },
    ]}
  />
);

export default DocPage;
