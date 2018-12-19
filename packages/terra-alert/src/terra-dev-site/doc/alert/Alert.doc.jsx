import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import AlertSrc from '!raw-loader!../../../../src/Alert';

// Example Files
import AlertExample from '../example/AlertExample';
import AlertExampleSrc from '!raw-loader!../example/AlertExample';
import ErrorExample from '../example/ErrorExample';
import ErrorExampleSrc from '!raw-loader!../example/ErrorExample';
import WarningExample from '../example/WarningExample';
import WarningExampleSrc from '!raw-loader!../example/WarningExample';
import AdvisoryExample from '../example/AdvisoryExample';
import AdvisoryExampleSrc from '!raw-loader!../example/AdvisoryExample';
import InfoExample from '../example/InfoExample';
import InfoExampleSrc from '!raw-loader!../example/InfoExample';
import SuccessExample from '../example/SuccessExample';
import SuccessExampleSrc from '!raw-loader!../example/SuccessExample';
import CustomExample from '../example/CustomExample';
import CustomExampleSrc from '!raw-loader!../example/CustomExample';
import LongTextExample from '../example/LongTextExample';
import LongTextExampleSrc from '!raw-loader!../example/LongTextExample';
import ActionExample from '../example/ActionExample';
import ActionExampleSrc from '!raw-loader!../example/ActionExample';
import SmallContainerExample from '../example/SmallContainerExample';
import SmallContainerExampleSrc from '!raw-loader!../example/SmallContainerExample';
import DismissibleExample from '../example/DismissibleExample';
import DismissibleExampleSrc from '!raw-loader!../example/DismissibleExample';
import ActionAndDismissibleExample from '../example/ActionAndDismissibleExample';
import ActionAndDismissibleExampleSrc from '!raw-loader!../example/ActionAndDismissibleExample';
import BuildYourOwnAlertExample from '../example/BuildYourOwnAlertExample';
import BuildYourOwnAlertExampleSrc from '!raw-loader!../example/BuildYourOwnAlertExample';
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
        title: 'Build ',
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
