/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-abstract-modal/docs/README.md';
import { name } from 'terra-abstract-modal/package.json';

// Component Source
import ModalSrc from '!raw-loader!terra-abstract-modal/src/AbstractModal';

// Example Files
import AbstractModalIsOpened from './example/AbstractModalIsOpened';
import AbstractModalIsOpenedSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/AbstractModalIsOpened';
import AbstractModalCloseOnOutsideClick from './example/AbstractModalCloseOnOutsideClick';
import AbstractModalCloseOnOutsideClickSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/AbstractModalCloseOnOutsideClick';
import AbstractModalIsFullscreen from './example/AbstractModalIsFullscreen';
import AbstractModalIsFullscreenSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/AbstractModalIsFullscreen';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Modal',
        example: <AbstractModalIsOpened />,
        source: AbstractModalIsOpenedSrc,
      },
      {
        title: 'Disable closing the modal when clicking on the overlay',
        example: <AbstractModalCloseOnOutsideClick />,
        source: AbstractModalCloseOnOutsideClickSrc,
      },
      {
        title: 'Fullscreen Modal',
        example: <AbstractModalIsFullscreen />,
        source: AbstractModalIsFullscreenSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Modal',
        componentSrc: ModalSrc,
      },
    ]}
  />
);

export default DocPage;
