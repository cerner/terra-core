import React from 'react';
import DocTemplate from 'terra-doc-template';
import Markdown from 'terra-markdown';
import ReadMe from '../../../../docs/README.md';
import CustomExampleDocs from '../../../../docs/custom-example.md';
import ActionAndDismissableExampleDocs from '../../../../docs/action-and-dismissable-example.md';
import { name, version } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-duplicates */
// Component Source
import AlertSrc from '!raw-loader!../../../../src/Alert';

// Example Files
import AlertExample from '../example/AlertExample';
import AlertExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AlertExample';
import ErrorExample from '../example/ErrorExample';
import ErrorExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ErrorExample';
import WarningExample from '../example/WarningExample';
import WarningExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/WarningExample';
import AdvisoryExample from '../example/AdvisoryExample';
import AdvisoryExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AdvisoryExample';
import InfoExample from '../example/InfoExample';
import InfoExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/InfoExample';
import SuccessExample from '../example/SuccessExample';
import SuccessExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SuccessExample';
import CustomExample from '../example/CustomExample';
import CustomExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CustomExample';
import LongTextExample from '../example/LongTextExample';
import LongTextExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/LongTextExample';
import ActionExample from '../example/ActionExample';
import ActionExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ActionExample';
import DismissibleExample from '../example/DismissibleExample';
import DismissibleExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DismissibleExample';
import ActionAndDismissibleExample from '../example/ActionAndDismissibleExample';
import ActionAndDismissibleExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ActionAndDismissibleExample';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
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
        description: <Markdown id="custom-example-docs" src={CustomExampleDocs} />,
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
        title: 'Dismissible Alert',
        example: <DismissibleExample />,
        source: DismissibleExampleSrc,
      },
      {
        title: 'Dismissible Alert with Actions',
        description: <Markdown id="action-and-dismissable-example-docs" src={ActionAndDismissableExampleDocs} />,
        example: <ActionAndDismissibleExample />,
        source: ActionAndDismissibleExampleSrc,
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
