/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import ModalTests from './ModalTests';

// components
import ModalDefault from './components/ModalDefault';
import ModalOpenByClickOn from './components/ModalOpenByClickOn';
import ModalDisableCloseOnEsc from './components/ModalDisableCloseOnEsc';
import ModalDisableCloseOnOutsideClick from './components/ModalDisableCloseOnOutsideClick';
import ModalIsFullscreen from './components/ModalIsFullscreen';
import ModalOverrideRole from './components/ModalOverrideRole';
import ModalEventHooks from './components/ModalEventHooks';

const routes = (
  <div>
    <Route path="/tests/modal-tests" component={ModalTests} />
    <Route path="/tests/modal-tests/default" component={ModalDefault} />
    <Route path="/tests/modal-tests/open-by-click-on" component={ModalOpenByClickOn} />
    <Route path="/tests/modal-tests/disable-close-on-esc" component={ModalDisableCloseOnEsc} />
    <Route path="/tests/modal-tests/disable-close-on-outside-click" component={ModalDisableCloseOnOutsideClick} />
    <Route path="/tests/modal-tests/is-fullscreen" component={ModalIsFullscreen} />
    <Route path="/tests/modal-tests/override-role" component={ModalOverrideRole} />
    <Route path="/tests/modal-tests/event-hooks" component={ModalEventHooks} />
  </div>
);

export default routes;
