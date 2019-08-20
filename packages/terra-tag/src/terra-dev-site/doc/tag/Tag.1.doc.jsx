import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

// Component Source
import TagSrc from '!raw-loader!../../../../src/Tag';

// Example Files
import TagDefault from '../example/TagDefault';
import TagDefaultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TagDefault';
import TagHref from '../example/HrefTag';
import TagHrefSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/HrefTag';
import TagFallbacks from '../example/TagFallbacks';
import TagFallbacksSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TagFallbacks';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
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
        title: 'Tag with no onClick or href',
        description: 'These styles are provided for when this compoment is missing recomended elements for best practice use.',
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
