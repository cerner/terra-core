import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

// Example Files
import CardPropsTable from '!terra-props-table-loader!../../../../src/Card';
import CardSrc from '!raw-loader!../../../../src/Card';
import CardBodyPropsTable from '!terra-props-table-loader!../../../../src/CardBody';
import CardBodySrc from '!raw-loader!../../../../src/CardBody';
import CardDefault from '../example/CardDefault';
import CardDefaultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CardDefault';
import CardRaised from '../example/CardRaised';
import CardRaisedSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CardRaised';
import CardPadding from '../example/CardPadding';
import CardPaddingSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CardPadding';
import CardPaddingVertical from '../example/CardPaddingVertical';
import CardPaddingVerticalSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CardPaddingVertical';
import CardPaddingHorizontal from '../example/CardPaddingHorizontal';
import CardPaddingHorizontalSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CardPaddingHorizontal';
import CardPaddingHR from '../example/CardPaddingHR';
import CardPaddingHRSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CardPaddingHR';
import CardContentCentered from '../example/CardContentCentered';
import CardContentCenteredSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CardContentCentered';
import CardVisuallyHiddenText from '../example/CardVisuallyHiddenText';
import CardVisuallyHiddenTextSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CardVisuallyHiddenText';


const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Card basic example',
        example: <CardDefault />,
        source: CardDefaultSrc,
      },
      {
        title: 'Card basic raised example',
        example: <CardRaised />,
        source: CardRaisedSrc,
      },
      {
        title: 'Card plus Card Body with default padding',
        example: <CardPadding />,
        source: CardPaddingSrc,
      },
      {
        title: 'Card plus Card Body with only vertical padding',
        example: <CardPaddingVertical />,
        source: CardPaddingVerticalSrc,
      },
      {
        title: 'Card plus Card Body with only horizontal padding',
        example: <CardPaddingHorizontal />,
        source: CardPaddingHorizontalSrc,
      },
      {
        title: 'Card plus padded and non-padded children',
        example: <CardPaddingHR />,
        source: CardPaddingHRSrc,
      },
      {
        title: 'Centered content inside card',
        example: <CardContentCentered />,
        source: CardContentCenteredSrc,
      },
      {
        title: 'Card with Visually Hidden Text',
        example: <CardVisuallyHiddenText />,
        source: CardVisuallyHiddenTextSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Card',
        componentSrc: CardSrc,
        componentProps: CardPropsTable,
      },
      {
        componentName: 'Card Body',
        componentSrc: CardBodySrc,
        componentProps: CardBodyPropsTable,
      },
    ]}
  />
);

export default DocPage;
