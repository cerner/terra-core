/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-alert/docs/README.md';
import { name } from 'terra-alert/package.json';

// Component Source
import AlertSrc from '!raw-loader!terra-alert/src/Alert';

// Example Files
import AlertExample from './AlertExample';
import AlertExampleSrc from 'raw-loader!./AlertExample';
import ErrorExample from './ErrorExample';
import ErrorExampleSrc from 'raw-loader!./ErrorExample';
import WarningExample from './WarningExample';
import WarningExampleSrc from 'raw-loader!./WarningExample';
import AdvisoryExample from './AdvisoryExample';
import AdvisoryExampleSrc from 'raw-loader!./AdvisoryExample';
import InfoExample from './InfoExample';
import InfoExampleSrc from 'raw-loader!./InfoExample';
import SuccessExample from './SuccessExample';
import SuccessExampleSrc from 'raw-loader!./SuccessExample';
import CustomExample from './CustomExample';
import CustomExampleSrc from 'raw-loader!./CustomExample';
import LongTextExample from './LongTextExample';
import LongTextExampleSrc from 'raw-loader!./LongTextExample';
import ActionExample from './ActionExample';
import ActionExampleSrc from 'raw-loader!./ActionExample';
import SmallContainerExample from './SmallContainerExample';
import SmallContainerExampleSrc from 'raw-loader!./SmallContainerExample';
import DismissibleExample from './DismissibleExample';
import DismissibleExampleSrc from 'raw-loader!./DismissibleExample';
import ActionAndDismissibleExample from './ActionAndDismissibleExample';
import ActionAndDismissibleExampleSrc from 'raw-loader!./ActionAndDismissibleExample';
import BuildYourOwnAlertExample from './BuildYourOwnAlertExample';
import BuildYourOwnAlertExampleSrc from 'raw-loader!./BuildYourOwnAlertExample';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Alert',
        example: <AlertExample />,
        source: AlertExampleSrc,
      },
      {
        title: 'Error Alert',
        example: <ErrorExample />,
        source: ErrorExampleSrc,
      },
      {
        title: 'Warning Alert',
        example: <WarningExample />,
        source: WarningExampleSrc,
      },
      {
        title: 'Advisory Alert',
        example: <AdvisoryExample />,
        source: AdvisoryExampleSrc,
      },
      {
        title: 'Information Alert',
        example: <InfoExample />,
        source: InfoExampleSrc,
      },
      {
        title: 'Success Alert',
        example: <SuccessExample />,
        source: SuccessExampleSrc,
      },
      {
        title: 'Custom Alert',
        example: <CustomExample />,
        source: CustomExampleSrc,
      },
      {
        title: 'Long Text Alert',
        example: <LongTextExample />,
        source: LongTextExampleSrc,
      },
      {
        title: 'Alert with Action',
        example: <ActionExample />,
        source: ActionExampleSrc,
      },
      {
        title: 'Alert in Small Container',
        example: <SmallContainerExample />,
        source: SmallContainerExampleSrc,
      },
      {
        title: 'Dismissible Alert',
        example: <DismissibleExample />,
        source: DismissibleExampleSrc,
      },
      {
        title: 'Dismissible Alert with Actions',
        example: <ActionAndDismissibleExample />,
        source: ActionAndDismissibleExampleSrc,
      },
      {
        title: 'Build Your Own Alert',
        example: <BuildYourOwnAlertExample />,
        source: BuildYourOwnAlertExampleSrc,
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
