/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import ModalTests from './ModalTests';

// components
import ModalisOpen from './components/ModalisOpen';
import ModalOpenByClickOn from './components/ModalOpenByClickOn';
import ModalDisableCloseOnEsc from './components/ModalDisableCloseOnEsc';
import ModalDisableCloseOnOutsideClick from './components/ModalDisableCloseOnOutsideClick';
import ModalIsFullscreen from './components/ModalIsFullscreen';
import ModalOverrideRole from './components/ModalOverrideRole';
import ModalEventHooks from './components/ModalEventHooks';
import ModalDialog from './components/ModalDialog';
import ModalContentOverflow from './components/ModalContentOverflow';

const routes = (
  <div>
    <Route path="/tests/modal-tests" component={ModalTests} />
    <Route path="/tests/modal-tests/is-open" component={ModalisOpen} />
    <Route path="/tests/modal-tests/open-by-click-on" component={ModalOpenByClickOn} />
    <Route path="/tests/modal-tests/disable-close-on-esc" component={ModalDisableCloseOnEsc} />
    <Route path="/tests/modal-tests/disable-close-on-outside-click" component={ModalDisableCloseOnOutsideClick} />
    <Route path="/tests/modal-tests/is-fullscreen" component={ModalIsFullscreen} />
    <Route path="/tests/modal-tests/override-role" component={ModalOverrideRole} />
    <Route path="/tests/modal-tests/event-hooks" component={ModalEventHooks} />
    <Route path="/tests/modal-tests/dialog" component={ModalDialog} />
    <Route path="/tests/modal-tests/content-overflow" component={ModalContentOverflow} />
  </div>
);

export default routes;
