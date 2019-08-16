import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

// Component Source
import SectionHeaderSrc from '!raw-loader!../../../../src/SectionHeader';

// Example Files
import DefaultSectionHeader from '../example/DefaultSectionHeader';
import DefaultSectionHeaderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultSectionHeader';
import LongTitleSectionHeader from '../example/LongTitleSectionHeader';
import LongTitleSectionHeaderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/LongTitleSectionHeader';
import LongTitleAccordionSectionHeader from '../example/LongTitleAccordionSectionHeader';
import LongTitleAccordionSectionHeaderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/LongTitleAccordionSectionHeader';
import ClosedSectionHeader from '../example/ClosedSectionHeader';
import ClosedSectionHeaderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ClosedSectionHeader';
import OpenSectionHeader from '../example/OpenSectionHeader';
import OpenSectionHeaderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/OpenSectionHeader';
import OnClickSectionHeader from '../example/OnClickSectionHeader';
import OnClickSectionHeaderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/OnClickSectionHeader';
import AccordionSectionHeader from '../example/AccordionSectionHeader';
import AccordionSectionHeaderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AccordionSectionHeader';
import TransparentSectionHeader from '../example/TransparentSectionHeader';
import TransparentSectionHeaderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TransparentSectionHeader';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
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
      {
        example: <TransparentSectionHeader />,
        source: TransparentSectionHeaderSrc,
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
