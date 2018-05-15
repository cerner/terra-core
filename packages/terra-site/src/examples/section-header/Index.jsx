/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-section-header/docs/README.md';
import { name } from 'terra-section-header/package.json';

// Component Source
import SectionHeaderSrc from '!raw-loader!terra-section-header/src/SectionHeader';

// Example Files
import DefaultSectionHeader from './DefaultSectionHeader';
import DefaultSectionHeaderSrc from '!raw-loader!./DefaultSectionHeader';
import LongTitleSectionHeader from './LongTitleSectionHeader';
import LongTitleSectionHeaderSrc from '!raw-loader!./LongTitleSectionHeader';
import LongTitleAccordionSectionHeader from './LongTitleAccordionSectionHeader';
import LongTitleAccordionSectionHeaderSrc from '!raw-loader!./LongTitleAccordionSectionHeader';
import ClosedSectionHeader from './ClosedSectionHeader';
import ClosedSectionHeaderSrc from '!raw-loader!./ClosedSectionHeader';
import OpenSectionHeader from './OpenSectionHeader';
import OpenSectionHeaderSrc from '!raw-loader!./OpenSectionHeader';
import OnClickSectionHeader from './OnClickSectionHeader';
import OnClickSectionHeaderSrc from '!raw-loader!./OnClickSectionHeader';
import AccordionSectionHeader from './AccordionSectionHeader';
import AccordionSectionHeaderSrc from '!raw-loader!./AccordionSectionHeader';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <DefaultSectionHeader />,
        source: DefaultSectionHeaderSrc,
      },
      {
        example: <LongTitleSectionHeader />,
        source: LongTitleSectionHeaderSrc,
      },
      {
        example: <LongTitleAccordionSectionHeader />,
        source: LongTitleAccordionSectionHeaderSrc,
      },
      {
        example: <ClosedSectionHeader />,
        source: ClosedSectionHeaderSrc,
      },
      {
        example: <OpenSectionHeader />,
        source: OpenSectionHeaderSrc,
      },
      {
        example: <OnClickSectionHeader />,
        source: OnClickSectionHeaderSrc,
      },
      {
        example: <AccordionSectionHeader />,
        source: AccordionSectionHeaderSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Section Header',
        componentSrc: SectionHeaderSrc,
      },
    ]}
  />
);

export default DocPage;
