/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import ModalTests from './ModalTests';

// components
import ModalAppendClass from './components/ModalAppendClass';
import ModalContentOverflow from './components/ModalContentOverflow';
import ModalDialog from './components/ModalDialog';
import ModalDisableCloseOnEsc from './components/ModalDisableCloseOnEsc';
import ModalDisableCloseOnOutsideClick from './components/ModalDisableCloseOnOutsideClick';
import ModalIsFullscreen from './components/ModalIsFullscreen';
import ModalIsOpen from './components/ModalIsOpen';
import ModalOverrideRole from './components/ModalOverrideRole';
import ModalNoFocusableContent from './components/ModalNoFocusableContent';
import ModalScrollableTrue from './components/ModalScrollableTrue';
import ModalScrollableFalse from './components/ModalScrollableFalse';
import ModalCustomProps from './components/ModalCustomProps';

const routes = (
  <div>
    <Route path="/tests/modal-tests" component={ModalTests} />
    <Route path="/tests/modal-tests/append-class" component={ModalAppendClass} />
    <Route path="/tests/modal-tests/content-overflow" component={ModalContentOverflow} />
    <Route path="/tests/modal-tests/dialog" component={ModalDialog} />
    <Route path="/tests/modal-tests/disable-close-on-esc" component={ModalDisableCloseOnEsc} />
    <Route path="/tests/modal-tests/disable-close-on-outside-click" component={ModalDisableCloseOnOutsideClick} />
    <Route path="/tests/modal-tests/is-fullscreen" component={ModalIsFullscreen} />
    <Route path="/tests/modal-tests/is-open" component={ModalIsOpen} />
    <Route path="/tests/modal-tests/override-role" component={ModalOverrideRole} />
    <Route path="/tests/modal-tests/no-focusable-content" component={ModalNoFocusableContent} />
    <Route path="/tests/modal-tests/scrollable-true" component={ModalScrollableTrue} />
    <Route path="/tests/modal-tests/scrollable-false" component={ModalScrollableFalse} />
    <Route path="/tests/modal-tests/custom-props" component={ModalCustomProps} />

  </div>
);

export default routes;
