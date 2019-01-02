import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import AlertSrc from '!raw-loader!../../../../src/Alert';

// Example Files
import AlertExample from '../example/AlertExample';
import ErrorExample from '../example/ErrorExample';
import WarningExample from '../example/WarningExample';
import AdvisoryExample from '../example/AdvisoryExample';
import InfoExample from '../example/InfoExample';
import SuccessExample from '../example/SuccessExample';
import CustomExample from '../example/CustomExample';
import LongTextExample from '../example/LongTextExample';
import ActionExample from '../example/ActionExample';
import SmallContainerExample from '../example/SmallContainerExample';
import DismissibleExample from '../example/DismissibleExample';
import ActionAndDismissibleExample from '../example/ActionAndDismissibleExample';
import BuildYourOwnAlertExample from '../example/BuildYourOwnAlertExample';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
