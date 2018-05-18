/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-tag/docs/README.md';
import { name } from 'terra-tag/package.json';

// Component Source
import TagSrc from '!raw-loader!terra-tag/src/Tag';

// Example Files
import TagDefault from './TagDefault';
import TagDefaultSrc from '!raw-loader!./TagDefault';
import TagHref from './HrefTag';
import TagHrefSrc from '!raw-loader!./HrefTag';
import TagFallbacks from './TagFallbacks';
import TagFallbacksSrc from '!raw-loader!./TagFallbacks';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Tag with onClick',
        example: <TagDefault />,
        source: TagDefaultSrc,
      },
      {
        title: 'Tag with href',
        example: <TagHref />,
        source: TagHrefSrc,
      },
      {
        title: 'Tag Fallbacks',
        example: <TagFallbacks />,
        source: TagFallbacksSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Tag',
        componentSrc: TagSrc,
      },
    ]}
  />
);

export default DocPage;
