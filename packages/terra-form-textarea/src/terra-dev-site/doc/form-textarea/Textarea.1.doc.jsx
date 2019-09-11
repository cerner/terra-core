import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';

import { name, version } from '../../../../package.json';

// Example Files
import FormTextareaPropsTable from '!terra-props-table-loader!../../../../src/Textarea';
import FormTextareaSrc from '!raw-loader!../../../../src/Textarea';
import ResizableExample from '../example/Resizable';
import ResizableExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/Resizable';
import FixedSmallSizeExample from '../example/FixedSmallSize';
import FixedSmallSizeExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/FixedSmallSize';
import FixedMediumSizeExample from '../example/FixedMediumSize';
import FixedMediumSizeExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/FixedMediumSize';
import FixedLargeSizeExample from '../example/FixedLargeSize';
import FixedLargeSizeExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/FixedLargeSize';
import FillContainerExample from '../example/FillContainer';
import FillContainerExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/FillContainer';
import InvalidExample from '../example/Invalid';
import InvalidExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/Invalid';
import DisabledExample from '../example/Disabled';
import DisabledExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/Disabled';
import TextareaExample from '../example/Textarea';
import TextareaExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/Textarea';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    propsTables={[
      {
        componentName: 'Form Textarea',
        componentSrc: FormTextareaSrc,
        componentProps: FormTextareaPropsTable,
      },
    ]}
    examples={[
      {
        example: <TextareaExample />,
        source: TextareaExampleSrc,
      },
      {
        example: <FixedSmallSizeExample />,
        source: FixedSmallSizeExampleSrc,
      },
      {
        example: <FixedMediumSizeExample />,
        source: FixedMediumSizeExampleSrc,
      },
      {
        example: <FixedLargeSizeExample />,
        source: FixedLargeSizeExampleSrc,
      },
      {
        example: <ResizableExample />,
        source: ResizableExampleSrc,
      },
      {
        example: <FillContainerExample />,
        source: FillContainerExampleSrc,
      },
      {
        description: 'Leaving this as blank makes this input invalid.',
        example: <InvalidExample />,
        source: InvalidExampleSrc,
      },
      {
        example: <DisabledExample />,
        source: DisabledExampleSrc,
      },
    ]}
  />
);

export default DocPage;
