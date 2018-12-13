import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import ModalSrc from '!raw-loader!../../../../src/AbstractModal';

// Example Files
import AbstractModalIsOpened from '../example/AbstractModalIsOpened';
import AbstractModalIsOpenedSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AbstractModalIsOpened';
import AbstractModalCloseOnOutsideClick from '../example/AbstractModalCloseOnOutsideClick';
import AbstractModalCloseOnOutsideClickSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AbstractModalCloseOnOutsideClick';
import AbstractModalIsFullscreen from '../example/AbstractModalIsFullscreen';
import AbstractModalIsFullscreenSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AbstractModalIsFullscreen';
import AbstractModalFallbackFocusSelector from '../example/AbstractModalFallbackFocusSelector';
import AbstractModalFallbackFocusSelectorSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AbstractModalFallbackFocusSelector';
import AbstractModalFallbackFocusFunction from '../example/AbstractModalFallbackFocusFunction';
import AbstractModalFallbackFocusFunctionSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AbstractModalFallbackFocusFunction';

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
      {
        title: 'Fallback Focus with Function returning dom element',
        example: <AbstractModalFallbackFocusFunction />,
        source: AbstractModalFallbackFocusFunctionSrc,
      },
      {
        title: 'Fallback Focus with dom selector',
        example: <AbstractModalFallbackFocusSelector />,
        source: AbstractModalFallbackFocusSelectorSrc,
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
