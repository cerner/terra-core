/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-card/docs/README.md';
import { name } from 'terra-card/package.json';

// Component Source
import CardSrc from '!raw-loader!terra-card/src/Card';
import CardBodySrc from '!raw-loader!terra-card/src/CardBody';

// Example Files
import CardDefault from './CardDefault';
import CardDefaultSrc from '!raw-loader!./CardDefault';
import CardRaised from './CardRaised';
import CardRaisedSrc from '!raw-loader!./CardRaised';
import CardPadding from './CardPadding';
import CardPaddingSrc from '!raw-loader!./CardPadding';
import CardPaddingVertical from './CardPaddingVertical';
import CardPaddingVerticalSrc from '!raw-loader!./CardPaddingVertical';
import CardPaddingHorizontal from './CardPaddingHorizontal';
import CardPaddingHorizontalSrc from '!raw-loader!./CardPaddingHorizontal';
import CardPaddingHR from './CardPaddingHR';
import CardPaddingHRSrc from '!raw-loader!./CardPaddingHR';
import CardContentCentered from './CardContentCentered';
import CardContentCenteredSrc from '!raw-loader!./CardContentCentered';

const DocPage = () => (
  <DocTemplate
    packageName={name}
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
    ]}
    propsTables={[
      {
        componentName: 'Card',
        componentSrc: CardSrc,
      },
      {
        componentName: 'Card Body',
        componentSrc: CardBodySrc,
      },
    ]}
  />
);

export default DocPage;
