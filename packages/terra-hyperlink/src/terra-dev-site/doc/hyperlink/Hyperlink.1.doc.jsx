/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates, import/no-unresolved */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
<<<<<<< HEAD
import PropsTable from '../../../../docs/Hyperlink-props-table.md';
import { name, version } from '../../../../package.json';
=======
import { name, version } from '../../../../package.json';
>>>>>>> master

// Example Files
import DefaultHyperlink from '../example/DefaultHyperlink';
import DefaultHyperlinkSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultHyperlink.jsx';
import Audio from '../example/AudioHyperlink';
import AudioSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AudioHyperlink';
import Disabled from '../example/DisabledHyperlink';
import DisabledSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DisabledHyperlink';
import Document from '../example/DocumentHyperlink';
import DocumentSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DocumentHyperlink';
import External from '../example/ExternalHyperlink';
import ExternalSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ExternalHyperlink';
import Image from '../example/ImageHyperlink';
import ImageSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ImageHyperlink';
import UnderlineHidden from '../example/UnderlineHiddenHyperlink';
import UnderlineHiddenSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/UnderlineHiddenHyperlink';
import Video from '../example/VideoHyperlink';
import VideoSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/VideoHyperlink';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
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
        description: 'An external variant adds a custom icon to indicate the destination is external to the source.',
        example: <External />,
        source: ExternalSrc,
      },
      {
        title: 'Audio Hyperlink',
        description: 'An audio variant adds a custom icon to indicate the content linked is audio.',
        example: <Audio />,
        source: AudioSrc,
      },
      {
        title: 'Video Hyperlink',
        description: 'A video variant adds a custom icon to indicate the content linked is a video.',
        example: <Video />,
        source: VideoSrc,
      },
      {
        title: 'Image Hyperlink',
        description: 'An image variant adds a custom icon to indicate the content linked is an image.',
        example: <Image />,
        source: ImageSrc,
      },
      {
        title: 'Document Hyperlink',
        description: 'A document variant adds a custom icon to indicate the content linked is document (.pdf, .doc, .xls, etc.).',
        example: <Document />,
        source: DocumentSrc,
      },
      {
        title: 'Underline Hidden Hyperlink',
        description: 'Option to hide the default underline when applied with theme-specific styling. Reserve for use when terra-hyperlink is applied in special situations within lists, other controls, or other components.',
        example: <UnderlineHidden />,
        source: UnderlineHiddenSrc,
      },
    ]}
    propsTablesMarkdown={[PropsTable]}
  />
);

export default DocPage;
