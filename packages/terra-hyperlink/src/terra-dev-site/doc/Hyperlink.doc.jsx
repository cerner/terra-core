/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates, import/no-unresolved */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../docs/README.md';

// Component Source
import HyperlinkSrc from '!raw-loader!../../../src/Hyperlink';

// Example Files
import DefaultHyperlink from './example/DefaultHyperlink';
import DefaultHyperlinkSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/DefaultHyperlink.jsx';
import Audio from './example/AudioHyperlink';
import AudioSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/AudioHyperlink';
import Disabled from './example/DisabledHyperlink';
import DisabledSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/DisabledHyperlink';
import Document from './example/DocumentHyperlink';
import DocumentSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/DocumentHyperlink';
import External from './example/ExternalHyperlink';
import ExternalSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/ExternalHyperlink';
import Image from './example/ImageHyperlink';
import ImageSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/ImageHyperlink';
import UnderlineHidden from './example/UnderlineHiddenHyperlink';
import UnderlineHiddenSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/UnderlineHiddenHyperlink';
import Video from './example/VideoHyperlink';
import VideoSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/VideoHyperlink';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Hyperlink',
        example: <DefaultHyperlink />,
        source: DefaultHyperlinkSrc,
      },
      {
        title: 'Disabled Hyperlink',
        example: <Disabled />,
        source: DisabledSrc,
      },
      {
        title: 'External Hyperlink',
        example: <External />,
        source: ExternalSrc,
      },
      {
        title: 'Audio Hyperlink',
        example: <Audio />,
        source: AudioSrc,
      },
      {
        title: 'Video Hyperlink',
        example: <Video />,
        source: VideoSrc,
      },
      {
        title: 'Image Hyperlink',
        example: <Image />,
        source: ImageSrc,
      },
      {
        title: 'Document Hyperlink',
        example: <Document />,
        source: DocumentSrc,
      },
      {
        title: 'Underline Hidden Hyperlink',
        example: <UnderlineHidden />,
        source: UnderlineHiddenSrc,
      },
    ]}
    propsTables={[{
      componentName: 'Hyperlink',
      componentSrc: HyperlinkSrc,
    }]}
  />
);

export default DocPage;
