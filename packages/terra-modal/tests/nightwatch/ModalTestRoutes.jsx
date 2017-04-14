/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ModalTests from './ModalTests';
import ModalIsOpen from './ModalIsOpen';
import ModalOpenByClickOn from './ModalOpenByClickOn';
import ModalDisableCloseOnEsc from './ModalDisableCloseOnEsc';
import ModalDisableCloseOnOutsideClick from './ModalDisableCloseOnOutsideClick';
import ModalIsFullscreen from './ModalIsFullscreen';

const routes = (
  <div>
    <Route path="/tests/modal-tests" component={ModalTests} />
    <Route path="/tests/modal-tests/is-open" component={ModalIsOpen} />
    <Route path="/tests/modal-tests/open-by-click-on" component={ModalOpenByClickOn} />
    <Route path="/tests/modal-tests/disable-close-on-esc" component={ModalDisableCloseOnEsc} />
    <Route path="/tests/modal-tests/disable-close-on-outside-click" component={ModalDisableCloseOnOutsideClick} />
    <Route path="/tests/modal-tests/is-fullscreen" component={ModalIsFullscreen} />
  </div>
);

export default routes;
